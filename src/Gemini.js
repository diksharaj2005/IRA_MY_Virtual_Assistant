import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAmAJjqv5z2HvDdK-iSnb6Izvuk6F3pPcQ" });

const generationConfig = {
    temperature:1,
    topP:0.95,
    topK:40,
    maxOutputTokens:20,
    responseMimeType:"text/plain",
};

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return(response.text);
}

export default main;