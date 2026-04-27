// src/app/api/inquiries/route.ts
// Endpoint for handling leasing inquiries

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Mock database storage
type InquiryStatus = "new" | "contacted" | "qualified" | "won" | "lost";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  type?: string;
  message?: string;
  squareFootage?: number;
  createdAt: string;
  status: InquiryStatus;
};

const inquiries: Inquiry[] = [];

export async function POST(request: NextRequest) {
  try {
    const body: Partial<Inquiry> = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create inquiry object
    const inquiry: Inquiry = {
      id: Date.now().toString(),
      name: String(body.name),
      email: String(body.email),
      phone: String(body.phone),
      company: typeof body.company === "string" ? body.company : undefined,
      type: typeof body.type === "string" ? body.type : undefined,
      message: typeof body.message === "string" ? body.message : undefined,
      squareFootage:
        typeof body.squareFootage === "number" ? body.squareFootage : undefined,
      createdAt: new Date().toISOString(),
      status: "new",
    };

    const hasDb = Boolean(process.env.DATABASE_URL);
    if (hasDb) {
      const created = await prisma.inquiry.create({
        data: {
          name: inquiry.name,
          email: inquiry.email,
          phone: inquiry.phone,
          company: inquiry.company,
          type: inquiry.type,
          message: inquiry.message,
          squareFootage: inquiry.squareFootage,
          status: inquiry.status,
        },
      });

      return NextResponse.json({
        success: true,
        data: created,
        message: "Inquiry submitted successfully",
      });
    }

    // Store inquiry (dev fallback)
    inquiries.push(inquiry);

    // Send email notification (implement with SendGrid, Gmail, etc.)
    console.log("New inquiry:", inquiry);

    return NextResponse.json({
      success: true,
      data: inquiry,
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const hasDb = Boolean(process.env.DATABASE_URL);
  if (hasDb) {
    const data = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data });
  }

  return NextResponse.json({
    success: true,
    data: inquiries,
  });
}
