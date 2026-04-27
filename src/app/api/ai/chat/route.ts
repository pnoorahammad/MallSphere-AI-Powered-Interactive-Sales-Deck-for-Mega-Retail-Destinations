// src/app/api/ai/chat/route.ts
// AI chat endpoint powered by OpenAI

import { NextRequest, NextResponse } from "next/server";

async function generateAIResponse(message: string): Promise<string> {
  // In production, use OpenAI SDK
  /*
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      { role: "system", content: mallContext + (context || "") },
      { role: "user", content: message }
    ],
    temperature: 0.7,
    max_tokens: 500,
  });
  return response.choices[0].message.content || "Unable to process request";
  */

  // Mock responses for development
  const mockResponses: { [key: string]: string } = {
    leasing: "We offer premium retail and office spaces with flexible lease terms starting at $100/sqft annually. Our dedicated leasing team can help find the perfect space for your brand. Would you like to schedule a consultation?",
    events: "We host 100+ world-class events annually including fashion shows, food festivals, tech summits, and live concerts. Average attendance: 2,000+ per event. Let's discuss your event needs!",
    brands: "We partner with 500+ premium brands across luxury fashion, F&B, tech, and lifestyle categories. Our curated portfolio attracts 25 million+ annual visitors.",
    pricing: "Space rates vary by location and size. Ground floor retail starts at $250/sqft, upper level at $150/sqft, and office space at $100/sqft. Contact our team for specific quotes.",
    default: "That's a great question! Our dedicated team would love to discuss your specific needs. Would you like to schedule a demo or speak with a specialist?",
  };

  // Simple keyword matching
  const lowerMessage = message.toLowerCase();
  for (const [key, response] of Object.entries(mockResponses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }

  return mockResponses.default;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    // Generate AI response
    const response = await generateAIResponse(message);

    return NextResponse.json({
      success: true,
      data: {
        message: response,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("AI Chat Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process message" },
      { status: 500 }
    );
  }
}
