import { GoogleGenAI } from "@google/genai";


const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
console.log(apiKey)


const ai = new GoogleGenAI({apiKey});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 20,
  responseMimeType: "text/plain",
};


async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return(response.text);
}

export default main;