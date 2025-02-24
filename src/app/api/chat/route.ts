import { NextRequest, NextResponse } from "next/server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {

  // get prompt field from the request body
  const reqBody = await req.json();
  const { userPrompt } = reqBody;
  const prompt = "you are a mental health professional. you are talking to a patient who is suffering from depression. you want to help them feel better. so answer the following questions: " + userPrompt;
  // const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string);

const genAI = new GoogleGenerativeAI("AIzaSyCIusz1cw3yD8l8LVLcgsSXF_cBI-ueDdQ");
 

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json({
      text
    });
  } catch (error) {
    return NextResponse.json({
      text: "Unable to process the prompt. Please try again."
    });
  }
}

 

// 

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());