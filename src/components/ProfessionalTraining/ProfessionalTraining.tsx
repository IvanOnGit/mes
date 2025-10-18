import React, { useState } from "react";
import Contact from "../Contact/Contact";
import FloatingDescription from "../FloatingDescription/FloatingDescription";
import FloatingSubtitle from "../FloatingSubtitle/FloatingSubtitle";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
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
  ExpandableCapsulesContainer,
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalBody,
  ModalCapsules,
  InnerModalCapsule
} from "./styles";
import RequestInformation from "../RequestInformation/RequestInformation";

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

const seminarData = [
  {
    id: 1,
    title: "HABILIDADES DE GESTIÓN",
    image: "/images/Seminar 1.jpg"
  },
  {
    id: 2,
    title: "LIDERAZGO GERENCIAL",
    image: "/images/Seminar 2.jpg"
  },
  {
    id: 3,
    title: "EFICIENCIA LABORAL",
    image: "/images/Seminar 3.jpg"
  },
  {
    id: 4,
    title: "RRHH",
    image: "/images/Seminar 4.jpg"
  },
  {
    id: 5,
    title: "VENTAS",
    image: "/images/Seminar 5.jpg"
  }
];

function ProfessionalTraining() {
  const [expandedCapsule, setExpandedCapsule] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedSeminar, setSelectedSeminar] = useState<typeof seminarData[0] | null>(null);

  const toggleCapsule = (id: number) => {
    setExpandedCapsule(expandedCapsule === id ? null : id);
  };

  const openModal = (seminar: typeof seminarData[0]) => {
    setSelectedSeminar(seminar);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSeminar(null);
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
          {seminarData.map((seminar) => (
            <IndividualSeminar key={seminar.id}>
              <img src={seminar.image} alt={seminar.title} />
              <h4>{seminar.title}</h4>
              <span />
              <button onClick={() => openModal(seminar)}>+</button>
            </IndividualSeminar>
          ))}
        </Seminars>
      </FormativeSeminars>

      {/* Modal */}
      {modalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={closeModal}>×</ModalClose>
            <ModalBody>
              {/* Contenido específico para cada seminario */}
              {selectedSeminar?.id === 1 && (
                <div>
                  <div>
                    <h3>La Solución Está Fuera De La Caja</h3>
                    <p>Qué sostiene lo automático, repetido y el desgano. Apostando a la Motivación, Creatividad, Confianza. Recursos para avanzar</p>
                  </div>
                  <div>
                     <h3>Reconversión de puestos</h3>
                     <p>Entrenamiento para lograr cambios orgánicos y favorables ante nuevas funciones, tareas y responsabilidades. Desarrollo de habilidades.</p>
                  </div>
                </div>
              )}

              {selectedSeminar?.id === 2 && (
                <div>
                  <div>
                      <h3>Liderazgo Escencial</h3>
                      <p>El líder de la era de acuario. Liderazgo auténtico, visionario, transformador.</p>
                  </div>
                  <div>
                      <h3>Ecosistema Virtuoso</h3>
                      <p>Organizaciones que avanzan. Colaboradores que aportan valor. Cambio de paradigmas y herramientas sistémicas</p>
                  </div>
                  <div>
                      <h3>Kit de Herramientas para la Solución y Disolución de Conflictos</h3>
                      <p>Entrenamiento en técnicas para erradicar los conflictos y las trabas personales. Las diferencias que enriquecen y nutren.</p>
                  </div>
                  <div>
                      <h3>Autogestión</h3>
                      <p>Entrenamiento en proactividad, eficiencia y autonomía. Incorporación de indicadores de gestión.</p>
                  </div>
                </div>
              )}

              {selectedSeminar?.id === 3 && (
                <div>
                  <div>
                      <h3>Kit de Herramientas para la Solución y Disolución de Conflictos </h3>
                      <p>Entrenamiento en técnicas para erradicar los conflictos y las trabas personales. Las diferencias que enriquecen y nutren.</p>
                  </div>
                  <div>
                      <h3>LLÉVALO PUESTO ! Talleres vivenciales.</h3>
                      <p>COMPROMISO Y PERTENENCIA. Taller de entrenamiento del sentido de pertenencia y el valor del compromiso. VALORES CORPORATIVO. Taller para internalizar los valores de la Empresa.</p>
                      <p><strong>*CONSULTE SOBRE SU TEMA DE INTERÉS*</strong></p>
                  </div>
                  <div>
                      <h3>Transformando los Miedos en Oportunidades</h3>
                      <p>Darle lugar a los miedos, problemas que paralizan y limitan la prosperidad individual y por consiguiente la corporativa. Lo personal siempre impacta en el rendimiento laboral. Darle lugar para fluir y avanzar.</p>
                      <p><strong>*CONSULTE SOBRE LA SAGA DESINTOXICANDO*</strong></p>
                  </div>
                  <div>
                      <h3>Autogestión</h3>
                      <p>Entrenamiento en proactividad, eficiencia y autonomía. Incorporación de indicadores de gestión.</p>
                  </div>
                  <div>
                      <h3>Zombie vs Protagonistas</h3>
                      <p>Taller de transformación de trabas y obstáculos para la prosperidad.</p>
                  </div>
                  <div>
                      <h3>Desintoxicando  1</h3>
                      <p>“ Críticas, Quejas y Chismes”. Las toxinas que anulan e impiden el valor humano: Una mirada inteligente para despojar creencias y fomentar ambientes virtuosos.</p>
                      <p><strong>*CONSULTE SOBRE LA SAGA DESINTOXICANDO*</strong></p>
                  </div>
                </div>
              )}

              {selectedSeminar?.id === 4 && (
                <div>
                  <div>
                      <h3>Astrología Empresarial</h3>
                      <p>Introducción al lenguaje para conocer mejor a las personas de la empresa y alocarlas donde puedan desplegar sus talentos. Inteligencia aplicada para lograr eficiencia y resultados.</p>
                  </div>
                  <div>
                      <h3>Metodología Sistémica Empresarial</h3>
                      <p>Herramienta para encontrar soluciones rápidas, integrativas y sostenibles. Revoluciona tu equipo</p>
                  </div>
                </div>
              )}

              {selectedSeminar?.id === 5 && (
                <div>
                  <div>
                      <h3>Programa de Formación en Ventas</h3>
                      <ModalCapsules>
                        <InnerModalCapsule>MÓDULO 1</InnerModalCapsule>
                        <InnerModalCapsule>MÓDULO 2</InnerModalCapsule>
                        <InnerModalCapsule>MÓDULO 3</InnerModalCapsule>
                        <InnerModalCapsule>MÓDULO 4</InnerModalCapsule>
                        <InnerModalCapsule>MÓDULO 5</InnerModalCapsule>
                      </ModalCapsules>
                  </div>
                  <div>
                      <h3>VENDEDORES EXITOSOS, se nace o se hacen?”. Creando los NUEVOS EMBAJADORES CORPORATIVOS.</h3>
                      <p>Herramienta para encontrar soluciones rápidas, integrativas y sostenibles. RevolucNueva mirada para la organización y entrenamiento transformador para los responsables de generar nuevos clientes, aumentar la facturación, representar a la Empresa.iona tu equipo</p>
                  </div>
                </div>
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
      <RequestInformation title="¡Multiplicá tu Crecimiento!" />
      <Contact />
    </Container>
  );
}

export default ProfessionalTraining;