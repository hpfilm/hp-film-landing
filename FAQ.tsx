import { SectionHeading } from "./SectionHeading";

const faqs = [
  ["¿Cómo pido un presupuesto?", "Podés escribirnos por WhatsApp. Para algunos trabajos puede ser útil enviar fotos del vehículo."],
  ["¿Necesito sacar turno?", "Contactanos por WhatsApp para coordinar disponibilidad antes de acercarte."],
  ["¿Dónde están ubicados?", "Estamos en Villa de Luján 2136, B1824, Provincia de Buenos Aires."],
  ["¿Puedo enviar fotos antes de llevar el auto?", "Sí. Iniciá una conversación por WhatsApp y adjuntá fotos para que podamos entender mejor tu consulta."],
  ["¿Cómo sé cuánto cuesta el trabajo?", "El valor puede depender del vehículo y del trabajo necesario. Pedinos un presupuesto con los datos de tu auto."],
];

export function FAQ() {
  return <section className="section faq-section" id="preguntas"><div className="container faq-layout"><SectionHeading eyebrow="Preguntas frecuentes" title="Todo claro antes de venir" copy="Respuestas breves para que tu consulta sea más simple." /><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>;
}
