import { NextResponse } from "next/server";

const CLINIC_KNOWLEDGE_SYSTEM_PROMPT = `
You are "Cobie", the official AI Healthcare Assistant for Cobourg Care Clinic in Cobourg, Ontario. Your role is to provide accurate, polite, empathetic, and direct information to patients.

CLINIC INFORMATION:
- Address: Unit 5A, 609 William Street Cobourg, Ontario, K9A 3A6, Canada
- Hours: Monday - Friday: 9:30 AM - 5:00 PM, Saturday: 10:00 AM - 4:00 PM, Sunday: Closed
- Phone: 647-508-9094
- Fax: (905) 291-7547
- Accepted Payment Methods: Cash and e-Transfer

DOCTOR ROSTER & BOOKING RULES:
1. Dr. Paul Edokpayi:
   - Services: Venepuncture (Blood work), Vaccinations, Immunizations.
   - Rule: Patients rostered coming for blood work or immunizations MUST book under Dr. Paul.

2. Dr. Isah:
   - Services: General Consultations, Health Check-ups, Chronic Disease Management, Preventive Care, Family Medicine.
   - Rule: All other medical issues/discussions (except blood work and seasonal vaccines) MUST book under Dr. Isah.

UNINSURED SERVICES & FEE SCHEDULE (Non-OHIP):
- Sick Note / Fit-to-Return-to-Work or School Note: $35
- Completion of Medical Forms (daycare, school, camp): $35
- Immunization Form Completion: $35
- Extended Sick Note / School Excuse Note Beyond 3 Days: $50
- Adoption / Parental Leave Forms: $50
- Travel Consultation: $50
- Disability Tax Credit Certificate (T2201): $100
- Driver's Medical Examination (when not OHIP-covered): $150
- Attending Physician's Statement (APS): $150
- Third-Party Medical Report (insurance, employment, legal): $160
- Copy of Medical Records: $30 administrative fee + $0.30/page
- Ear Wax Removal: $25 (One Ear), $50 (Both Ears)
- Firefighter's Physical Examination: $150
- TB Skin Test & Report (School / Education): FREE (OHIP-covered)
- 1-Step TB Skin Test (Employment): $70
- 2-Step TB Skin Test (Employment): $100

WSIB POLICIES:
- Official WSIB Functional Abilities Form (FAF): Billed directly to WSIB ($45 WSIB physician rate). The patient is NOT charged.
- Employer-Specific Functional Abilities Form: The employer is responsible for paying the physician fee for custom forms.

RESPONSE STYLE RULES:
- Be concise, direct, helpful, and friendly.
- Do NOT repeat generic greetings ("Hello, I am Cobie...") on follow-up questions unless the user explicitly greets you.
- When asked about booking an appointment, clearly explain:
  1. Book under Dr. Paul for Blood Work / Vaccinations.
  2. Book under Dr. Isah for all General Care & Check-ups.
  3. Direct them to click 'Appointments' in the website header or call reception at 647-508-9094.
- If asked about medical emergencies, instruct the user to call 911 or visit the nearest Emergency Department immediately.
`;

function getSmartClinicResponse(query) {
  const q = query.toLowerCase().trim();

  if (q.includes("name") || q.includes("who are you") || q.includes("your name") || q.includes("who is cobie")) {
    return "I'm Cobie, the official AI Assistant for Cobourg Care Clinic! I'm here to help you with appointment booking, clinic hours, doctor services, and uninsured fees.";
  }

  if (
    q.includes("appointment") ||
    q.includes("book") ||
    q.includes("schedule") ||
    q.includes("see a doctor") ||
    q.includes("visit")
  ) {
    return "To book an appointment at Cobourg Care Clinic:\n\n• **Dr. Paul Edokpayi**: Book here for Blood Work (Venepuncture) and Vaccinations/Immunizations.\n• **Dr. Isah**: Book here for all General Consultations, Health Check-ups, Chronic Disease Management, and Family Medicine.\n\nYou can click **Appointments** in the top navigation bar to book online via Ocean Booking, or call our reception at **647-508-9094**.";
  }

  if (q.includes("paul") || q.includes("blood") || q.includes("vaccine") || q.includes("immunization") || q.includes("flu")) {
    return "Dr. Paul Edokpayi handles **Venepuncture (Blood work)** and **Vaccinations/Immunizations**. Please book under Dr. Paul for these services.";
  }

  if (q.includes("isah") || q.includes("doctor") || q.includes("family doctor") || q.includes("physician") || q.includes("checkup")) {
    return "Dr. Isah is an experienced Family Physician handling **General Consultations, Health Check-ups, Chronic Disease Management, and Family Medicine**. Please book under Dr. Isah.";
  }

  if (q.includes("sick note") || q.includes("work note") || q.includes("school note") || q.includes("fit to return")) {
    return "Cobourg Care Clinic uninsured sick notes:\n• **Sick Note / Fit-to-Return Note**: $35\n• **Extended Sick Note (Beyond 3 Days)**: $50\n\n*Note: Sick notes are administrative services not covered by OHIP.*";
  }

  if (q.includes("form") || q.includes("daycare") || q.includes("camp") || q.includes("adoption")) {
    return "Medical form completion fees:\n• **Daycare, School, Camp Forms**: $35\n• **Immunization Form Completion**: $35\n• **Adoption / Parental Leave Forms**: $50\n• **Disability Tax Credit (T2201)**: $100\n• **Attending Physician's Statement (APS)**: $150";
  }

  if (q.includes("driver") || q.includes("driving") || q.includes("license")) {
    return "Our **Driver's Medical Examination** fee is **$150** when the exam is not covered by OHIP. Reception can confirm coverage prior to your visit.";
  }

  if (q.includes("ear wax") || q.includes("earwax") || q.includes("ear")) {
    return "Ear Wax Removal procedure fees:\n• **One Ear**: $25\n• **Both Ears**: $50";
  }

  if (q.includes("tb") || q.includes("tuberculin") || q.includes("mantoux")) {
    return "TB (Tuberculosis) Skin Test & Report Fees:\n• **For School / Students**: **FREE** (OHIP-covered for school, college, and university entry).\n• **For Employment**:\n  - 1-Step TB Skin Test: $70\n  - 2-Step TB Skin Test: $100";
  }

  if (q.includes("record") || q.includes("copy") || q.includes("chart")) {
    return "Copy of Medical Records: **$30 administrative fee + $0.30 per page**.";
  }

  if (q.includes("wsib") || q.includes("workplace") || q.includes("injury")) {
    return "For official **WSIB Functional Abilities Forms (FAF)**, WSIB is billed directly ($45 rate) with **no charge to the patient**. Employer-specific forms are billed to the employer or patient.";
  }

  if (q.includes("hour") || q.includes("open") || q.includes("close") || q.includes("time") || q.includes("saturday") || q.includes("sunday")) {
    return "Cobourg Care Clinic Operating Hours:\n• **Mon - Fri**: 9:30 AM – 5:00 PM\n• **Saturday**: 10:00 AM – 4:00 PM\n• **Sunday**: Closed";
  }

  if (q.includes("address") || q.includes("location") || q.includes("where") || q.includes("direction") || q.includes("william")) {
    return "Cobourg Care Clinic Location:\n**Unit 5A, 609 William Street, Cobourg, Ontario, K9A 3A6, Canada**.";
  }

  if (q.includes("phone") || q.includes("contact") || q.includes("fax") || q.includes("call") || q.includes("reception")) {
    return "Contact Information:\n• **Phone**: 647-508-9094\n• **Fax**: (905) 291-7547";
  }

  if (q.includes("payment") || q.includes("pay") || q.includes("cash") || q.includes("etransfer") || q.includes("e-transfer") || q.includes("credit") || q.includes("debit")) {
    return "Accepted Payment Methods:\n• **Cash**\n• **e-Transfer**\n\nPayment for uninsured services is required at the time of service or form pickup.";
  }

  if (q.includes("fee") || q.includes("cost") || q.includes("price") || q.includes("uninsured") || q.includes("ohip")) {
    return "Medically necessary physician services are covered by OHIP. Non-insured services (sick notes $35, daycare forms $35, driver's exams $150, T2201 $100, record copies $30+$0.30/pg) are paid by the patient or third party via Cash or e-Transfer. Visit our **Uninsured Fees** page for the full schedule.";
  }

  return "I'm Cobie, your Cobourg Care AI Assistant! How can I help you today? You can ask about:\n• Booking appointments (Dr. Paul vs Dr. Isah)\n• Clinic hours & location\n• Sick notes & uninsured form fees\n• WSIB & payment methods\nOr call reception at **647-508-9094**.";
}

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // Build Gemini history payload (skipping initial greeting message for clean context)
    const formattedContents = messages
      .filter((m, index) => index > 0 || m.role === "user")
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    if (!apiKey) {
      const lastUserMsg = messages[messages.length - 1]?.content || "";
      const text = getSmartClinicResponse(lastUserMsg);
      return NextResponse.json({ reply: text, isFallback: true });
    }

    const payload = {
      systemInstruction: {
        parts: [{ text: CLINIC_KNOWLEDGE_SYSTEM_PROMPT }],
      },
      contents: formattedContents.length > 0 ? formattedContents : [
        {
          role: "user",
          parts: [{ text: messages[messages.length - 1]?.content || "Hello" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 2048,
        temperature: 0.3,
      },
    };

    // Try primary model gemini-3.6-flash
    let response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      // Fallback model gemini-flash-latest
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
    }

    if (!response.ok) {
      const errData = await response.text();
      console.error("Gemini API Error:", errData);
      const lastUserMsg = messages[messages.length - 1]?.content || "";
      const fallbackText = getSmartClinicResponse(lastUserMsg);
      return NextResponse.json({ reply: fallbackText, isFallback: true });
    }

    const data = await response.json();
    const candidateParts = data?.candidates?.[0]?.content?.parts || [];
    const fullText = candidateParts.map((p) => p.text || "").filter(Boolean).join("\n").trim();
    const replyText = fullText || getSmartClinicResponse(messages[messages.length - 1]?.content || "");

    return NextResponse.json({ reply: replyText });
  } catch (error) {
    console.error("Error in chat API route:", error);
    const lastUserMsg = messages[messages.length - 1]?.content || "";
    const fallbackText = getSmartClinicResponse(lastUserMsg);
    return NextResponse.json({ reply: fallbackText, isFallback: true });
  }
}
