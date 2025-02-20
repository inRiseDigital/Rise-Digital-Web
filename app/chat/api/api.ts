import Groq from "groq-sdk";

const groq = new Groq({ 
  apiKey: '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',
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