import { useState } from "react";
import Contact from "../Contact/Contact";
import Eugenia from "../Eugenia/Eugenia";
import Navbar from "../Navbar/Navbar";
import { AboutMeContainer, ButtonsContainer, Card, CardsContainer, CollageSection, Container, IconsAndButtons, IconsContainer, ModalContent, ModalImage, ModalOverlay, ModalText, Recomendation, RecomendationsContainer, StarsAndText, TitleAndIcons, TitleTreeContainer, TreeContainer, UserFake } from "./styles";

function AboutMe() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (modalNumber: number) => {
    setActiveModal(modalNumber);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    // Esperar a que termine la animación antes de cerrar completamente
    setTimeout(() => {
      setActiveModal(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <Container>
        <Navbar />
        <Eugenia />
        <AboutMeContainer>
          <span></span>
          <IconsAndButtons>            
            <TitleAndIcons>
              <h1>Sobre mi</h1>
              <IconsContainer>
                  <img src="/images/About me Icon 1.svg" alt="" />
                  <img src="/images/About me Icon 2.svg" alt="" />
                  <img src="/images/About me Icon 3.svg" alt="" />
                  <img src="/images/About me Icon 4.svg" alt="" />
                  <img src="/images/About me Icon 5.svg" alt="" />
                  <img src="/images/About me Icon 6.svg" alt="" />
                  <img src="/images/About me Icon 7.svg" alt="" />
                  <img src="/images/About me Icon 8.svg" alt="" />
                  <img src="/images/About me Icon 9.svg" alt="" />
              </IconsContainer>
            </TitleAndIcons>
            <ButtonsContainer>
              <button>
                  <img src="/images/BioMagister.svg" alt="" />
                  Bio - Magister
              </button>
              <button>
                  <img src="/images/Traveller.svg" alt="" />
                  Viajera
              </button>
              <button>
                  <img src="/images/Investigator.svg" alt="" />
                  Investigadora
              </button>
              <button>
                  <img src="/images/Creator.svg" alt="" />
                  Creadora
              </button>
              <button>
                  <img src="/images/ChangeAgent.svg" alt="" />
                  Agente de Cambio
              </button>
            </ButtonsContainer>
          </IconsAndButtons>
        </AboutMeContainer>
        <CollageSection>
          <img src="/images/Collage.svg" alt="" />
          <img src="/images/MySymbols.svg" alt="" />
        </CollageSection>
        <TreeContainer>
          <span></span>
          <TitleTreeContainer>
            <h2>RECORRIDO PROFESIONAL</h2>
            <img src="/images/Tree.svg" alt="" />
          </TitleTreeContainer>
          <CardsContainer>
            <Card>
              <h2>ÁMBITO CORPORATIVO</h2>
              <p>Con más de 30 años de experiencia en el ámbito empresarial, María Eugenia ha desarrollado su carrera en organizaciones de primer nivel como Coca Cola Femsa, Banco Galicia, Banco Tornquist, CTI Móvil y TSU Cosméticos. En su trayectoria, se ha desempeñado como Gerente de Ventas y Responsable de Desarrollo.</p>
              <button onClick={() => openModal(1)}>Ver más</button>
            </Card>
            <span />
            <Card>
              <h2>ÁMBITO EDUCATIVO Y FORMATIVO</h2>
              <p>Como formadora de equipos de ventas, María Eugenia ha liderado y disfrutado muchos procesos de entrenamiento y capacitación a lo largo de su carrera, optimizando el desempeño y potenciando el talento de las personas. Además, ha ejercido como docente en talleres de orientación vocacional y desarrollo.</p>
              <button onClick={() => openModal(2)}>Ver más</button>
            </Card>
            <span />
            <Card>
              <h2>ÁMBITO DE DESARROLLO HUMANO</h2>
              <p>A partir de 2011, María Eugenia inició un proceso de búsqueda interior y exploración de diversas disciplinas y filosofías tras el fallecimiento de su marido. Este profundo proceso le permitió descubrir un nuevo mundo espiritual y un camino de evolución personal.</p>
              <button onClick={() => openModal(3)}>Ver más</button>
            </Card>
          </CardsContainer>
        </TreeContainer>
        <RecomendationsContainer>
          <Recomendation>
            <UserFake />
            <StarsAndText>
              <div>
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
              </div>
              <p>Referencias de clientes, empresas, entre otras cosas, acá se escriben los opiniones de los clientes de MES o íconos de empresas.</p>
            </StarsAndText>
          </Recomendation>
          <Recomendation>
            <UserFake />
            <StarsAndText>
              <div>
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
              </div>
              <p>Referencias de clientes, empresas, entre otras cosas, acá se escriben los opiniones de los clientes de MES o íconos de empresas.</p>
            </StarsAndText>
          </Recomendation>
          <Recomendation>
            <UserFake />
            <StarsAndText>
              <div>
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
              </div>
              <p>Referencias de clientes, empresas, entre otras cosas, acá se escriben los opiniones de los clientes de MES o íconos de empresas.</p>
            </StarsAndText>
          </Recomendation>
        </RecomendationsContainer>
        <Contact />

        {/* Modales */}
        {activeModal === 1 && (
          <ModalOverlay $isClosing={isClosing} onClick={closeModal}>
            <ModalContent $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>
              <ModalImage>
                <h3>ÁMBITO CORPORATIVO</h3>
                <img src="/images/Corporate.svg" alt="" />
                <h4>Enfoque Cercano y Personalizado</h4>
                <span />
              </ModalImage>
              <ModalText>
                <p>Con más de 30 años de experiencia en el ámbito empresarial, María Eugenia ha desarrollado su carrera en organizaciones de primer nivel como Coca Cola Femsa, Banco Galicia, Banco Tornquist, CTI Móvil y TSU Cosméticos. En su trayectoria, se ha desempeñado como Gerente de Ventas y Responsable de Desarrollo de Mercado, alcanzando un alto nivel de expertise comercial y liderando exitosas estrategias en el mundo corporativo.</p>
                <p>En 2007, creó y fundó la Consultora Comercial y de Gestión Empresarial SYS Argentina®, la cual dirige hasta la fecha. A través de su equipo ha brindado soluciones a más de 1.200 pymes, siendo especialista en el mercado financiero y de retailers, abarcando actividades claves como ventas, marketing y atención al cliente.</p>
                <p>Su ADN diferencial está marcado por una absoluta vocación de servicio, un enfoque cercano y personalizado hacia las personas, un compromiso con la excelencia profesional y, además, por su espíritu emprendedor, que la ha impulsado a crear diversos proyectos, generando redes y abriendo nuevas oportunidades y soluciones innovadoras.</p>
              </ModalText>
            </ModalContent>
          </ModalOverlay>
        )}

        {activeModal === 2 && (
          <ModalOverlay $isClosing={isClosing} onClick={closeModal}>
            <ModalContent $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>
              <ModalImage>
                <h3>ÁMBITO EDUCATIVO Y FORMATIVO</h3>
                <img src="/images/Formation.svg" alt="" />
                <h4>Talentos y Propósito en Acción</h4>
                <span />
              </ModalImage>
              <ModalText>
                <p>Como formadora de equipos de ventas, María Eugenia ha liderado y brindado cientos de procesos de entrenamiento y capacitación a lo largo de su carrera, optimizando el desempeño y potenciando el talento de las personas. </p>
                <p>Ha ejercido como docente de orientación vocacional y desarrollo de habilidades para el mundo laboral de nivel secundario y dictado talleres para ayudar a jóvenes y adultos a desarrollarse profesionalmente. Su sello: Generosa en compartir su experticia y crear espacios vivenciales.</p>
                <p>Desde la Consultoría instruye y acompaña  a través de Formación In Company y Professional Training® en ventas, eficiencia laboral, liderazgo y habilidades de gestión. Y a través de Mundo Vocacional® facilita procesos de autoconocimiento, vocación, ocupación, profesión y propósito en acción.</p>
              </ModalText>
            </ModalContent>
          </ModalOverlay>
        )}

        {activeModal === 3 && (
          <ModalOverlay $isClosing={isClosing} onClick={closeModal}>
            <ModalContent $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>
              <ModalImage>
                <h3>ÁMBITO DE DESARROLLO HUMANO</h3>
                <img src="/images/MeditatingBack.svg" alt="" />
                <h4>Evolución Personal</h4>
                <span />
                <img className="meditatingBack" src="/images/MeditatingFront.svg" alt="" />
              </ModalImage>
              <ModalText>
                <p>A partir de 2011, María Eugenia inició su proceso de búsqueda interior y exploración de nuevas disciplinas y filosofías tras el fallecimiento de su marido. Esto le permitió descubrir un mundo de autoconsciencia y el camino de evolución personal.</p>
                <p>En 2019, sintió el impulso de compartir todas las herramientas que había adquirido durante su proceso resiliente y de transformación. Así, comenzó a facilitar y orientar a clientes, integrando su experiencia empresarial con una profunda visión de bienestar y humanidad. Con una fuerte convicción de que lo esencial de la vida está negado o desconectado en muchos ámbitos, continuó formándose, investigando y actualizándose.</p>
                <p>En 2022, fundó Casa Cinco, un espacio  destinado a facilitar la expresión del ser, compartir actividades de autoconocimiento, conexión y conciencia, promoviendo el bienestar integral en la vida personal y profesional en su ciudad natal.</p>
                <p>Eugenia brinda talleres grupales, conferencias y consultoría organizacional, combinando diversas disciplinas para promover el desarrollo humano y empresarial. A través de Biotrascendencia®, ayuda a las personas y a las  organizaciones a alcanzar una vida plena, dar un salto evolutivo, trascendiendo los límites que les impiden avanzar.</p>
                <p>Agradecida y acompañada por su equipo de colaboradoras, maravillosas personas, quienes  comparten el compromiso y la pasión por lo que hacen.</p>
              </ModalText>
            </ModalContent>
          </ModalOverlay>
        )}
    </Container>
  );
}

export default AboutMe;