export const BUSINESS = {
  name: "HP Film",
  phoneDisplay: "+54 11 3112-2136",
  whatsappNumber: "541131122136", // Verificar que sea el número de WhatsApp del negocio.
  address: "Villa de Luján 2136, B1824, Provincia de Buenos Aires, Argentina",
  instagramUrl: "https://www.instagram.com/hpfilm_2136/",
  instagramHandle: "@hpfilm_2136",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=HP%20Film%20Villa%20de%20Luj%C3%A1n%202136%20Buenos%20Aires",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=HP%20Film%20Villa%20de%20Luj%C3%A1n%202136%20Buenos%20Aires",
  googleRating: 4.7, // Actualizar periódicamente según Google Maps.
  googleReviews: 50, // Actualizar periódicamente según Google Maps.
  coordinates: { latitude: -34.7187041, longitude: -58.3779046 },
  hours: [
    { day: "Lunes", hours: "09:00 – 19:00" },
    { day: "Martes", hours: "09:00 – 19:00" },
    { day: "Miércoles", hours: "09:30 – 19:00" },
    { day: "Jueves", hours: "09:00 – 19:00" },
    { day: "Viernes", hours: "09:00 – 19:00" },
  ],
} as const;

export const SERVICES = ["Polarizado automotor", "Sacabollos", "Cristales automotor"] as const;

export const SERVICE_MESSAGES = {
  polarizado: "Hola HP Film, vi su página y quería consultar por un polarizado para mi auto.",
  sacabollos: "Hola HP Film, quería consultar por un trabajo de sacabollos.",
  cristales: "Hola HP Film, quería consultar por un trabajo en los cristales de mi auto.",
} as const;

export const galleryImages: Array<{ src: string; alt: string }> = [];

export const GENERAL_MESSAGE =
  "Hola HP Film, vi su página web y quería consultar por un trabajo para mi auto.";

export function whatsappUrl(message = GENERAL_MESSAGE) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
