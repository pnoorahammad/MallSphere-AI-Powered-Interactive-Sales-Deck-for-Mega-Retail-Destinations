// src/lib/types.ts
// All TypeScript types for the application

export interface MallProperty {
  id: string;
  name: string;
  description: string;
  location: string;
  area: number;
  yearOpened: number;
  stories: number;
  parking: number;
  annualVisitors: number;
  annualRevenue: number;
  tenantCount: number;
  heroVideo: string;
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Brand {
  id: string;
  name: string;
  category: "Luxury" | "Fashion" | "F&B" | "Tech" | "Lifestyle" | "Other";
  description?: string;
  logo: string;
  website?: string;
  instagram?: string;
  tenantsSince?: number;
  propertyId: string;
}

export interface Venue {
  id: string;
  name: string;
  type: "Retail" | "F&B" | "Entertainment" | "Office" | "Other";
  area: number;
  floor?: number;
  description?: string;
  price?: number;
  available: boolean;
  images: string[];
  propertyId: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  image?: string;
  eventType: "Concert" | "Fashion" | "Festival" | "Pop-up" | "Conference" | "Other";
  capacity?: number;
  ticketPrice?: number;
  propertyId: string;
  creatorId: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  type: string;
  message: string;
  status: "new" | "contacted" | "qualified" | "won" | "lost";
  venueId?: string;
  createdAt: Date;
}

export interface Sponsorship {
  id: string;
  title: string;
  description: string;
  packageName: "Gold" | "Platinum" | "Diamond" | "Titanium";
  price: number;
  benefits: string[];
  available: boolean;
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface User {
  id: string;
  email: string;
  name?: string;
  role: "user" | "admin" | "sponsor" | "tenant";
  company?: string;
  avatar?: string;
  createdAt: Date;
}
