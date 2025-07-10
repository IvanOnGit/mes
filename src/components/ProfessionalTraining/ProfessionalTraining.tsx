import FloatingDescription from "../FloatingDescription/FloatingDescription";
import FloatingSubtitle from "../FloatingSubtitle/FloatingSubtitle";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Capsule, CapsulesContainer, Container, ModalityContainer, Paragraph, TextContainer } from "./styles";

function ProfessionalTraining() {
  return (
    <Container>
      <Navbar />
      <FloatingTitle title="PROFESSIONAL TRAINING" />
      <FloatingDescription description="Entrenamientos que impactan y dejan Huellas" />
      <FloatingSubtitle subtitle="· DE LA TEORÍA A LA ACCIÓN ·" />
      <Hero 
        image="/images/PROFESSIONAL TRAINING.jpg" 
      />
      <TextContainer>
              <img src="/images/ProfessionalGroup.svg" alt="" />
              <div>
                <h2>Subtítulo para Professional Training</h2>
                <p>A través de Programas de Formación y de Talleres de Capacitación y Entrenamiento se combinan conocimientos teóricos, actividades prácticas y experiencias vivenciales. Estas iniciativas se destacan como herramientas clave para el desarrollo de habilidades, facilitando un aprendizaje concreto, permitiendo a cada participante aplicar lo aprendido, ganar confianza y adquirir nuevas competencias que contribuyen a la eficiencia y al crecimiento profesional.</p>
              </div>
              <div>
                <Paragraph>La temática y el diseño de los programas se adaptan y personalizan según las características específicas de cada organización, los objetivos establecidos, la cultura organizacional, la dinámica del grupo y otras particularidades relevantes.</Paragraph>
                <button>Solicitá Información</button>
              </div>
      </TextContainer>
      <ModalityContainer>
              <h2>MODALIDADES</h2>
              <CapsulesContainer>
                <Capsule>
                  <h3>Formación In Company</h3>
                </Capsule>
                <span></span>
                <Capsule>
                  <h3>DT - Consultor In Company</h3>
                </Capsule>
                <span></span>
                <Capsule>
                  <h3>Professional Training</h3>
                </Capsule>
              </CapsulesContainer>
      </ModalityContainer>
    </Container>
  );
}

export default ProfessionalTraining;