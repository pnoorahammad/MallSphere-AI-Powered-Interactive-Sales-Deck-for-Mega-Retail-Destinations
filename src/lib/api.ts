// src/lib/api.ts
// API client for making requests to the backend

import axios from "axios";

/**
 * In the browser we should prefer same-origin calls (`/api`) to avoid:
 * - wrong port issues (e.g. running dev server on 3001 but env points to 3000)
 * - CORS issues when frontend/backend are actually the same Next app
 *
 * If you truly have a separate backend, set `NEXT_PUBLIC_API_URL` explicitly.
 */
const API_BASE_URL =
  typeof window !== "undefined"
    ? process.env.NEXT_PUBLIC_API_URL || "/api"
    : process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

type JsonObject = Record<string, unknown>;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if available
apiClient.interceptors.request.use((config) => {
  // This module can be imported by server code during bundling; guard browser-only APIs.
  const token = typeof window !== "undefined" ? window.localStorage.getItem("authToken") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    throw error.response?.data || error;
  }
);

// Properties
export const propertiesAPI = {
  getAll: () => apiClient.get("/properties"),
  // Server currently expects `?id=` query param (see `src/app/api/properties/route.ts`)
  getById: (id: string) => apiClient.get("/properties", { params: { id } }),
  create: (data: JsonObject) => apiClient.post("/properties", data),
  update: (id: string, data: JsonObject) => apiClient.put(`/properties/${id}`, data),
};

// Brands
export const brandsAPI = {
  getAll: (propertyId?: string) =>
    apiClient.get("/brands", { params: { propertyId } }),
  getById: (id: string) => apiClient.get(`/brands/${id}`),
  create: (data: JsonObject) => apiClient.post("/brands", data),
};

// Venues
export const venuesAPI = {
  getAll: (propertyId?: string) =>
    apiClient.get("/venues", { params: { propertyId } }),
  getById: (id: string) => apiClient.get(`/venues/${id}`),
  create: (data: JsonObject) => apiClient.post("/venues", data),
};

// Events
export const eventsAPI = {
  getAll: (propertyId?: string) =>
    apiClient.get("/events", { params: { propertyId } }),
  getById: (id: string) => apiClient.get(`/events/${id}`),
  create: (data: JsonObject) => apiClient.post("/events", data),
  book: (eventId: string, quantity: number) =>
    apiClient.post(`/events/${eventId}/book`, { quantity }),
};

// Inquiries
export const inquiriesAPI = {
  submit: (data: JsonObject) => apiClient.post("/inquiries", data),
  getAll: () => apiClient.get("/inquiries"),
  getById: (id: string) => apiClient.get(`/inquiries/${id}`),
};

// Sponsorships
export const sponsorshipsAPI = {
  getAll: () => apiClient.get("/sponsorships"),
  getById: (id: string) => apiClient.get(`/sponsorships/${id}`),
  apply: (id: string, data: JsonObject) =>
    apiClient.post(`/sponsorships/${id}/apply`, data),
};

// AI Chat
export const aiAPI = {
  chat: (message: string, context?: string) =>
    apiClient.post("/ai/chat", { message, context }),
  generateContent: (section: string) =>
    apiClient.post("/ai/generate-content", { section }),
};

// Content
export const contentAPI = {
  getBySection: (section: string) =>
    apiClient.get(`/content/${section}`),
  getAll: () => apiClient.get("/content"),
};

export default apiClient;
