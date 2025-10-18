import { Container, TestimonialCard, Stars, Header, Text, ExpandButton } from "./styles";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  preview: string;
  fullText: string;
}

function Testimonials() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Victor L.",
      role: "Tesorero - Supervisor Operativo",
      preview: "Tuve la suerte de conocer a Eugenia en una formación que brindó el Banco. Me sorprendió como nos conocía antes de conocernos en persona...",
      fullText: "Tuve la suerte de conocer a Eugenia en una formación que brindó el Banco. Me sorprendió como nos conocía antes de conocernos en persona. Había hecho un trabajo impresionante previo a la capacitación que nos brindó para poder encontrar herramientas específicas para cada uno de los presentes y éramos más de 30!\n\nEugenia maneja un dinamismo en sus charlas que hace que el mensaje llegue a la audiencia. Posee recursos muy variados y es una excelente oradora.\n\nPrincipalmente me dio herramientas para salir del lugar en el que estaba cómodo sin miedo a lo desconocido. Afrontar lo que no conozco con un plan o a donde quiero llegar y que pretendo lograr. Animarme al cambio.\n\nSu Consultoría, les servirá a todas aquellas organizaciones que estén buscando hacer un cambio importante en su estructura mejorando las relaciones entre los pares, desde el respeto y el entendimiento. En mi caso en particular fue una nueva forma de hacer negocios por parte del Banco, cambiar de personas con trabajos operativos a rutinarios, a personas con dinamismo y dispuestos a afrontar situaciones distintas de las usuales. Las personas que asistimos a su capacitación logramos muy buenos resultados en las ventas."
    },
    {
      id: 2,
      name: "Marcos T.",
      role: "Gerente Comercial",
      preview: "Trabajar con Eugenia fue una experiencia súper enriquecedora. Tiene una forma muy clara y humana de liderar...",
      fullText: "Trabajar con Eugenia fue una experiencia súper enriquecedora. Tiene una forma muy clara y humana de liderar, y sabe detectar el potencial de cada persona para ayudarla a crecer.\n\nAlgo que siempre valoré fue su manera de ordenar procesos sin perder la cercanía con el equipo. Gracias a su mirada estratégica y su forma de comunicar, no solo mejoré en lo comercial, también gané mucha más seguridad para tomar decisiones y encarar desafíos nuevos.\n\nRecomiendo su consultoría a toda persona o equipo que quiera crecer con propósito y claridad.\n\nY si tengo que pensar en algo que la represente, elijo una brújula: porque orienta sin imponer el camino."
    },
    {
      id: 3,
      name: "Blanca R.",
      role: "Gerente de Ventas",
      preview: "Tuve el placer de trabajar con Eugenia y su impacto en la organización y en mí ha sido realmente significativo...",
      fullText: "Tuve el placer de trabajar con Eugenia y su impacto en la organización y en mí ha sido realmente significativo.\n\nEs una profesional creativa e innovadora, impulsora de grandes cambios, y siempre se destaca por su impecable desempeño. Lo que más me impresiona de ella es su actitud positiva, alegre y enérgica, que contagia a todos a su alrededor.\n\nEugenia tiene la capacidad de hacernos soñar junto a ella, motivándonos a ser parte de los desafíos que propone. En lo personal, es una persona luminosa y sensible, siempre dispuesta a brindar apoyo a los demás. Su presencia en el equipo ha sido un verdadero regalo."
    },
    {
      id: 4,
      name: "Nuria G.",
      role: "Supervisora de Ventas",
      preview: "Eugenia tiene una experiencia real, una humildad y actitud que es admirable. Tiene una claridad para solucionar conflictos...",
      fullText: "Eugenia tiene una experiencia real, una humildad y actitud que es admirable. Tiene una claridad para solucionar conflictos y situaciones que se presentan.\n\nSiento que es una topadora. Es un orgullo y un placer trabajar con ella, en lo profesional y también en lo personal, verla hacer lo que hace, conectar, inspirar y dejar huella. Cuando ambos caminos se recorren con calidad se marca la diferencia.\n\nEugenia siempre impulsa las propuestas de valor. Es un ejemplo de que la pasión, el compromiso y la empatía pueden convivir con los desafíos de cada día."
    }
  ];

  const handleToggle = (id: number) => {
    console.log('Clicked ID:', id);
    console.log('Current expandedId:', expandedId);
    setExpandedId(prev => {
      const newValue = prev === id ? null : id;
      console.log('New expandedId:', newValue);
      return newValue;
    });
  };

  return (
    <Container>
      {testimonials.map((testimonial) => {
        const isExpanded = expandedId === testimonial.id;
        console.log(`Card ${testimonial.id} expanded:`, isExpanded);
        
        return (
          <TestimonialCard key={testimonial.id} expanded={isExpanded}>
            <Stars>★ ★ ★ ★ ★</Stars>
            <ExpandButton onClick={() => handleToggle(testimonial.id)}>
              {isExpanded ? "Ver menos" : "Ver más"}
            </ExpandButton>
            <Header>
              {testimonial.name} | {testimonial.role}
            </Header>
            <Text expanded={isExpanded}>
              {isExpanded
                ? testimonial.fullText.split('\n').map((paragraph, index) => (
                    paragraph.trim() && <p key={index}>{paragraph}</p>
                  ))
                : `" ${testimonial.preview} "`
              }
            </Text>
          </TestimonialCard>
        );
      })}
    </Container>
  );
}

export default Testimonials;