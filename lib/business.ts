export const BUSINESS = {
  name: "HP Film",
  phoneDisplay: "+54 11 3112-2136",
  whatsappNumber: "541131122136", // Verificar que sea el número de WhatsApp del negocio.
  address: "Villa de Luján 2136, B1824, Provincia de Buenos Aires, Argentina",
  instagramUrl: "https://www.instagram.com/hpfilm_2136/",
  instagramHandle: "@hpfilm_2136",
  mapsUrl: "https://www.google.com/maps/place/Hp+sacabollos+,polarizado+y+cristales+automotor./@-34.7187041,-58.3804795,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccd49797c7bc5:0x9533554a45616865!8m2!3d-34.7187041!4d-58.3779046!16s%2Fg%2F11byqbm08y?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D",
  reviewsUrl: "https://www.google.com/maps/place/Hp+sacabollos+,polarizado+y+cristales+automotor./@-34.7187041,-58.3804795,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccd49797c7bc5:0x9533554a45616865!8m2!3d-34.7187041!4d-58.3779046!16s%2Fg%2F11byqbm08y?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D",
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

export const SERVICES = ["Polarizado automotor", "Sacabollos", "Cristales automotor", "Lavado de interiores"] as const;

export const SERVICE_MESSAGES = {
  polarizado: "Hola HP Film, vi su página y quería consultar por un polarizado para mi auto.",
  sacabollos: "Hola HP Film, quería consultar por un trabajo de sacabollos.",
  cristales: "Hola HP Film, quería consultar por un trabajo en los cristales de mi auto.",
  interiores: "Hola HP Film, quería consultar por un lavado de interiores para mi auto.",
} as const;

export const galleryImages: Array<{ src: string; alt: string }> = [
  { src: "/images/gallery/trabajo-01.jpg", alt: "Audi blanco con cristales polarizados" },
  { src: "/images/gallery/trabajo-02.jpg", alt: "Camioneta blanca terminada en el taller" },
  { src: "/images/gallery/trabajo-03.jpg", alt: "Volkswagen negro frente al taller HP Film" },
  { src: "/images/gallery/trabajo-04.jpg", alt: "Vehículos atendidos dentro del taller HP Film" },
  { src: "/images/gallery/trabajo-05.jpg", alt: "Frente del local HP Film con autos de clientes" },
  { src: "/images/gallery/trabajo-06.jpg", alt: "Peugeot negro con polarizado terminado" },
  { src: "/images/gallery/trabajo-07.jpg", alt: "Camioneta Nissan negra atendida en HP Film" },
  { src: "/images/gallery/trabajo-08.jpg", alt: "Camioneta blanca con polarizado 3M terminado" },
  { src: "/images/gallery/trabajo-09.jpg", alt: "Detalle antes y después de reparación de carrocería" },
  { src: "/images/gallery/trabajo-10.jpg", alt: "Técnico trabajando en una reparación de sacabollos" },
  { src: "/images/gallery/trabajo-11.jpg", alt: "BMW azul con cristales polarizados" },
  { src: "/images/gallery/trabajo-12.jpg", alt: "Chevrolet Camaro amarillo atendido en el taller" },
];

export const GENERAL_MESSAGE =
  "Hola HP Film, vi su página web y quería consultar por un trabajo para mi auto.";

export function whatsappUrl(message = GENERAL_MESSAGE) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
