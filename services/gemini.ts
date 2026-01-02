
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getCuratorInsight(topic: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional curator for a Chinese cultural heritage museum. Provide a concise, educational, and respectful insight (2-3 sentences) about the following aspect of the 'Liang Zhu' (Butterfly Lovers) legend: ${topic}. Focus on its cultural significance or historical symbolism. Answer in a professional museum tone.`,
      config: {
        systemInstruction: "You are an expert in Chinese intangible cultural heritage and traditional legends.",
        temperature: 0.7,
      },
    });
    return response.text || "Insight currently unavailable.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The curator is currently unavailable to provide insights.";
  }
}
