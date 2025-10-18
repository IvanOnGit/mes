import Contact from "../Contact/Contact";
import FloatingDescription from "../FloatingDescription/FloatingDescription";
import FloatingSubtitle from "../FloatingSubtitle/FloatingSubtitle";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import RequestInformation from "../RequestInformation/RequestInformation";
import { Capsule, CapsulesContainer, Container, LeftColumn, RightColumn, StagesContainer, TextContainer } from "./styles";

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
      <TextContainer>
              <LeftColumn>
                <p>Es un programa creado para autoconocerse, descubrirse, activar los talentos, integrarlos y potenciarlos.</p>
                
                <p>Esta mirada holística integral permite incorporar recursos, desplegar los dones y habilidades, sentir mayor confianza y transformar los obstáculos para alcanzar un nivel superior.</p>
                
                <p>Es una experiencia vivencial. Se trabaja a nivel energético y espiritual  y se incluye la atención al cuerpo, la mente y las emociones.</p>
                
                <p>El abordaje incluye disciplinas combinadas que permiten una rápida y profunda transformación, tales como Coaching Sistémico, Constelaciones, Astrología, Chamanismo en concordancia con la Psicología y la Educación Física</p>
                
                <p>Se trata de un programa personalizado, enfocado en trabajar sobre las metas individuales de cada participante, acompañando de manera cercana su proceso de evolución.</p>
              </LeftColumn>
              
              <RightColumn>
                <div className="top-section">
                  <p>Para enriquecer los resultados, se recomienda complementar con un abordaje a nivel individual, grupal e institucional, especialmente en el caso de deportistas que forman parte de equipos.</p>
                </div>
                
                <div className="image-section">
                  <img src="/images/FieldView.svg" alt="Teamwork" />
                </div>
              </RightColumn>
      </TextContainer>
          <StagesContainer>
              <h2>ETAPAS</h2>
              <CapsulesContainer>
                <Capsule>
                  <h3>Autoconocimiento</h3>
                  <p>ETAPA 1</p>
                </Capsule>
                <span></span>
                <Capsule>
                  <h3>Intervenciones De Transformación</h3>
                  <p>ETAPA 2</p>
                </Capsule>
                <span></span>
                <Capsule>
                  <h3>Integración</h3>
                  <p>ETAPA 3</p>
                </Capsule>
                <span></span>
                <Capsule>
                  <h3>Evolución Aplicada</h3>
                  <p>META</p>
                </Capsule>
              </CapsulesContainer>
          </StagesContainer>
          <RequestInformation title="¿Estás listo para llevarte a un Nivel Superior?" subtitle="¡Lográ una Activación Consciente!" />
            <Contact />
        </Container>
    </>
  );
}

export default TalentActivationSystem;