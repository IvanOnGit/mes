import FloatingDescription from "../FloatingDescription/FloatingDescription";
import FloatingSubtitle from "../FloatingSubtitle/FloatingSubtitle";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container, TextContainer } from "./styles";

function TalentActivationSystem() {
  return (
    <>
      <Container>
      <Navbar />
      <FloatingTitle title="TALENT ACTIVATION SYSTEM®" />
      <FloatingDescription description="Activa todos tus talentos y vive tu meta" />
      <FloatingSubtitle subtitle="· A CREATIVE AND SYSTEMIC WAY TO FAST TRANSFORMATION ·" />
      <Hero
        image="/images/TAS.jpg" />
    </Container>
      <TextContainer>
        <img src="/images/Cyclist.svg" alt="" />
        <div>
          <h2>TALENT ACTIVATION SYSTEM - TAS</h2>
          <p><strong>Es un programa creado para autoconocerse, descubrirse, activar los talentos, integrarlos y potenciarlos.</strong></p>
          <p>Esta mirada holística integral permite incorporar recursos, desplegar los dones y habilidades, sentir mayor confianza y <strong>transformar los obstáculos para alcanzar un nivel superior.</strong></p>
          <p>Es una experiencia vivencial. Se trabaja a nivel energético y espiritual y se incluye la atención al cuerpo, la mente y las emociones.</p>
        </div>
        <div>
          <p>El abordaje incluye disciplinas combinadas que permiten una rápida y profunda transformación, tales como Coaching Sistémico, Constelaciones, Astrología, Chamanismo en concordancia con la Psicología y la Educación Física.</p>
          <p>Se trata de un <strong>programa personalizado</strong>, enfocado en trabajar sobre las metas individuales de cada participante, acompañando de manera cercana su proceso de evolución.</p>
          <p>Para enriquecer los resultados, se recomienda complementar con un abordaje a <strong>nivel individual, grupal e institucional,</strong> especialmente en el caso de deportistas que forman parte de equipos.</p>
        </div>
      </TextContainer>
    </>
  );
}

export default TalentActivationSystem;