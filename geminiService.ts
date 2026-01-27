
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Seraphis Insight AI, a specialized assistant for Seraphis IT & Data Solutions, a South African cybersecurity firm.
Your goal is to help potential clients understand cyber risk, POPIA compliance, and managed security operations.

Seraphis Positioning:
- Managed Cyber Defence, Regulatory Compliance, and Security Operations.
- We don't sell tools, we deliver outcomes: audit readiness, threat visibility, rapid containment, and business recovery.
- Focus: South African SMEs and mid-market organizations.
- Technology: Microsoft Azure based (Sentinel, Defender, etc.).

Key Focus Areas:
1. POPIA (Protection of Personal Information Act) Compliance.
2. SOC (Security Operations Centre) as a Service.
3. Incident Response and Business Recovery.
4. Industrial/OT Security.

Be professional, knowledgeable about the South African regulatory landscape, and reassuring. If users ask about pricing or specific quotes, suggest they "Request a Security & Compliance Readiness Consultation" via the contact form.
`;

export async function getChatResponse(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  // Always use a named parameter and direct process.env.API_KEY access as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
        // Removed maxOutputTokens to follow guidelines recommending avoidance if not strictly required
      },
    });

    // Access .text property directly, not as a method
    return response.text || "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error processing your request. Please reach out to us at security@seraphis.co.za for immediate assistance.";
  }
}