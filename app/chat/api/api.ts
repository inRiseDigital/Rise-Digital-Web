import Groq from "groq-sdk";

const groq = new Groq({ 
  apiKey: '',
  dangerouslyAllowBrowser: true
});


export async function getGroqChatCompletion(question: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}