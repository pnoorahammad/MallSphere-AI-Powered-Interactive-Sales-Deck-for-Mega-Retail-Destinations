// src/app/api/properties/route.ts
// Properties API endpoint

import { NextRequest, NextResponse } from "next/server";

const properties = [
  {
    id: "1",
    name: "MallSphere Premier",
    location: "San Francisco, CA",
    description: "A world-class shopping destination",
    area: 2500000,
    yearOpened: 2020,
    stories: 5,
    parking: 3000,
    annualVisitors: 25000000,
    annualRevenue: 850000000,
    tenantCount: 500,
    heroVideo: "https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_24fps.mp4",
    thumbnail: "https://images.unsplash.com/photo-1487675241189-6267ff3c0d0d?w=800",
    images: [
      "https://images.unsplash.com/photo-1487675241189-6267ff3c0d0d?w=400",
      "https://images.unsplash.com/photo-1468495244123-6f60f8ce1538?w=400",
    ],
  },
];

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  if (id) {
    const property = properties.find((p) => p.id === id);
    if (!property) {
      return NextResponse.json(
        { success: false, error: "Property not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: property });
  }

  return NextResponse.json({ success: true, data: properties });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newProperty = {
      id: (properties.length + 1).toString(),
      ...body,
    };
    properties.push(newProperty);
    return NextResponse.json({ success: true, data: newProperty });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to create property" },
      { status: 500 }
    );
  }
}
