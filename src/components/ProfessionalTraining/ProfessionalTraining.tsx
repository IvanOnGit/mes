import React, { useState } from "react";
import Contact from "../Contact/Contact";
import FloatingDescription from "../FloatingDescription/FloatingDescription";
import FloatingSubtitle from "../FloatingSubtitle/FloatingSubtitle";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import DynamicImages from "../ImagesContainer/ImagesContainer";
import Navbar from "../Navbar/Navbar";
import { 
  Capsule, 
  CapsulesContainer, 
  Container, 
  FormativeSeminars, 
  IndividualSeminar, 
  ModalityContainer, 
  Paragraph, 
  Seminars, 
  TextContainer,
  CapsuleContent,
  ExpandableCapsulesContainer
} from "./styles";

const myImages = [
  "/images/Professional Training 1.svg",
  "/images/Professional Training 2.svg",
  "/images/Professional Training 3.svg",
];

const modalityData = [
  {
    id: 1,
    title: "Formación In Company",
    content: "Programas formativos facilitados en las Empresas, permite mayor personalización y especialización en ambiente conocido y comodidad, retener y potenciar talentos, interacción, eficiencia y mayor alcance."
  },
  {
    id: 2,
    title: "DT - Consultor In Company",
    content: "Contar con un DT o Consultor especialista, permite focalizar y tratar las necesidades sobre lo planeado, invertir, acciones, potenciar talentos, ampliar las posibilidades. Sumar estrategias y acelerar el crecimiento."
  },
  {
    id: 3,
    title: "Professional Training",
    content: "Los procesos de entrenamiento y acompañamiento profesional son aceleradores de las mejores prácticas profesionales. Acortando abruptamente los procesos de inducción y adaptación y aprendizaje laboral o cultural. Sin desetender las responsabilidades de otros colaboradores de la Empresa."
  }
];

function ProfessionalTraining() {
  const [expandedCapsule, setExpandedCapsule] = useState<number | null>(null);

  const toggleCapsule = (id: number) => {
    setExpandedCapsule(expandedCapsule === id ? null : id);
  };

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
      
      <ModalityContainer expanded={expandedCapsule !== null}>
        <h2>MODALIDADES</h2>
        <ExpandableCapsulesContainer>
          <CapsulesContainer>
            {modalityData.map((modality, index) => (
              <React.Fragment key={modality.id}>
                {index > 0 && <span></span>}
                <Capsule 
                  onClick={() => toggleCapsule(modality.id)}
                  expanded={expandedCapsule === modality.id}
                >
                  <h3>{modality.title}</h3>
                  <CapsuleContent expanded={expandedCapsule === modality.id}>
                    <p>{modality.content}</p>
                  </CapsuleContent>
                </Capsule>
              </React.Fragment>
            ))}
          </CapsulesContainer>
        </ExpandableCapsulesContainer>
      </ModalityContainer>
      
      <FormativeSeminars>
        <h2>SEMINARIOS FORMATIVOS</h2>
        <h3> Alineados con la mirada de Biotrascendencia®</h3>
        <Seminars>
          <IndividualSeminar>
            <img src="/images/Seminar 1.svg" alt="" />
            <h4>HABILIDADES DE GESTIÓN</h4>
            <span />
            <button>+</button>
          </IndividualSeminar>
          <IndividualSeminar>
            <img src="/images/Seminar 2.svg" alt="" />
            <h4>LIDERAZGO GERENCIAL</h4>
            <span />
            <button>+</button>
          </IndividualSeminar>
          <IndividualSeminar>
            <img src="/images/Seminar 3.svg" alt="" />
            <h4>EFICIENCIA LABORAL</h4>
            <span />
            <button>+</button>
          </IndividualSeminar>
          <IndividualSeminar>
            <img src="/images/Seminar 4.svg" alt="" />
            <h4>RRHH</h4>
            <span />
            <button>+</button>
          </IndividualSeminar>
          <IndividualSeminar>
            <img src="/images/Seminar 5.svg" alt="" />
            <h4>VENTAS</h4>
            <span />
            <button>+</button>
          </IndividualSeminar>
        </Seminars>
      </FormativeSeminars>
      <DynamicImages images={myImages} />
      <Contact />
    </Container>
  );
}

export default ProfessionalTraining;