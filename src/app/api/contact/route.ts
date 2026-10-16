import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (origin && (!host || new URL(origin).host !== host)) {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12000) {
    return NextResponse.json({ error: "Bericht te groot." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      throw new Error("Invalid body");
    }
  } catch {
    return NextResponse.json({ error: "Ongeldige gegevens." }, { status: 400 });
  }

  const read = (key: string) =>
    typeof body[key] === "string" ? (body[key] as string).trim() : "";

  if (read("website")) {
    return NextResponse.json({ ok: true });
  }

  const name = read("name");
  const email = read("email");
  const phone = read("phone");
  const message = read("message");

  if (
    name.length < 2 || name.length > 120 ||
    email.length > 254 || !emailPattern.test(email) ||
    phone.length > 50 ||
    message.length < 10 || message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Controleer uw naam, e-mailadres en bericht." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY ontbreekt");
    return NextResponse.json(
      { error: "Verzenden is momenteel niet beschikbaar." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Heckmann Website <website@hhev.nl>",
      to: ["info@hhev.nl"],
      replyTo: email,
      subject: "Nieuw contactverzoek via de website",
      text: [
        "Nieuw contactverzoek via hhev.nl",
        "",
        `Naam: ${name}`,
        `E-mail: ${email}`,
        `Telefoon: ${phone || "Niet ingevuld"}`,
        "",
        "Bericht:",
        message,
      ].join("\\n"),
    });

    if (error) {
      console.error("Resend verzending mislukt:", error.name);
      return NextResponse.json(
        { error: "Verzenden is niet gelukt. Probeer het later opnieuw." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contactformulier verzending mislukt:", error);
    return NextResponse.json(
      { error: "Verzenden is niet gelukt. Probeer het later opnieuw." },
      { status: 502 }
    );
  }
}
