import { useState } from "react";
import Contact from "../Contact/Contact";
import Eugenia from "../Eugenia/Eugenia";
import Navbar from "../Navbar/Navbar";
import { AboutMeContainer, Card, CardsContainer, CollageSection, Container, DropdownsAndIcons, MobileCollageSection, ModalContent, ModalImage, ModalOverlay, ModalText, TitleTreeContainer, TreeContainer, Dropdown, DropdownHeader, DropdownContent, IconsGrid, IconWrapper, Tooltip } from "./styles";

function AboutMe() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({
    bio: false,
    viajera: false,
    investigadora: false,
    creadora: false,
    agente: false
  });

  const iconsData = [
  { src: "/images/About me Icon 1.svg", alt: "Icon 1", tooltip: "Magister en Dirección de Empresas MBA, EDDE" },
  { src: "/images/About me Icon 2.svg", alt: "Icon 2", tooltip: "Lic. en Comercialización de UADE (1° promedio Cs. Empresariales)" },
  { src: "/images/About me Icon 3.svg", alt: "Icon 3", tooltip: "Programa de Emprendedores en IAE - NAVES" },
  { src: "/images/About me Icon 4.svg", alt: "Icon 4", tooltip: "Astróloga humanista CASA XI" },
  { src: "/images/About me Icon 5.svg", alt: "Icon 5", tooltip: "Astróloga humanista, evolutiva, sistémica, transpersonal y empresarial. NUEVA DELPHIOS" },
  { src: "/images/About me Icon 6.svg", alt: "Icon 6", tooltip: "Consteladora Familiar con orientación al trauma trifocal ICFT" },
  { src: "/images/About me Icon 7.svg", alt: "Icon 7", tooltip: "Consteladora Organizacional y Consultora Sistémica CONGRUENCIA SAC" },
  { src: "/images/About me Icon 8.svg", alt: "Icon 8", tooltip: "Comunicadora Sistémica CLCF" },
  { src: "/images/About me Icon 9.svg", alt: "Icon 9", tooltip: "Practicante Chamánica FSS" },
];

  const openModal = (modalNumber: number) => {
    setActiveModal(modalNumber);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveModal(null);
      setIsClosing(false);
    }, 300);
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Container>
        <Navbar />
        <Eugenia />
        <AboutMeContainer>
          <h1>Sobre mi</h1>
          <DropdownsAndIcons>
            <div className="dropdowns-section">
              <Dropdown>
                <DropdownHeader 
                  onClick={() => toggleDropdown('bio')}
                  $isOpen={openDropdowns.bio}
                >
                  <span className="dropdown-title">
                    <img id="bio-icon" src="/images/BioMagister.svg" alt="" className="dropdown-icon" />
                    Bio - Magister
                  </span>
                  <span className="arrow">⌄</span>
                </DropdownHeader>
                <DropdownContent $isOpen={openDropdowns.bio}>
                  <p>Guía y mentora para alcanzar una vida plena, consciente y de trascendencia. Facilita procesos de evolución personal y profesional.</p>
                  <p className="extra-text">—¿Cómo te conectas con la vida?</p>
                </DropdownContent>
              </Dropdown>

              <Dropdown>
                <DropdownHeader 
                  onClick={() => toggleDropdown('viajera')}
                  $isOpen={openDropdowns.viajera}
                >
                  <span className="dropdown-title">
                    <img src="/images/Traveller.svg" alt="" className="dropdown-icon" />
                    Viajera
                  </span>
                  <span className="arrow">⌄</span>
                </DropdownHeader>
                <DropdownContent $isOpen={openDropdowns.viajera}>
                  <p>Interesada en explorar el mundo, los planos espirituales, y las nuevas experiencias. Conectada con el presente, enriqueciéndose de lo que emerge después de abrirse al cambio y a expandir sus horizontes, encontrando belleza y gratitud en cada paso.</p>
                  <p className="extra-text">— La vida es el viaje</p>
                </DropdownContent>
              </Dropdown>

              <Dropdown>
                <DropdownHeader 
                  onClick={() => toggleDropdown('investigadora')}
                  $isOpen={openDropdowns.investigadora}
                >
                  <span className="dropdown-title">
                    <img src="/images/Investigator.svg" alt="" className="dropdown-icon" />
                    Investigadora
                  </span>
                  <span className="arrow">⌄</span>
                </DropdownHeader>
                <DropdownContent $isOpen={openDropdowns.investigadora}>
                  <p>Observadora y en continua formación y actualización. Se inspira tanto de pensadores y profesionales que dejan su legado, como de sus propias investigaciones, lo que le permite cultivarse, cuestionar y ampliar su perspectiva para compartir al mundo.</p>
                  <p className="extra-text">— Lo que observo es mi creación</p>
                </DropdownContent>
              </Dropdown>

              <Dropdown>
                <DropdownHeader 
                  onClick={() => toggleDropdown('creadora')}
                  $isOpen={openDropdowns.creadora}
                >
                  <span className="dropdown-title">
                    <img src="/images/Creator.svg" alt="" className="dropdown-icon" />
                    Creadora
                  </span>
                  <span className="arrow">⌄</span>
                </DropdownHeader>
                <DropdownContent $isOpen={openDropdowns.creadora}>
                  <p>Biotrascendencia® como resultado de su visión, propósito, trayectoria, experiencia de vida, formación y motivación. Esta filosofía que nace para aportar sensibilidad, compartir a quienes resuenen con el enfoque evolutivo y su búsqueda.</p>
                  <p className="extra-text">— Presencia + Conciencia + Sentido</p>
                </DropdownContent>
              </Dropdown>

              <Dropdown>
                <DropdownHeader 
                  onClick={() => toggleDropdown('agente')}
                  $isOpen={openDropdowns.agente}
                >
                  <span className="dropdown-title">
                    <img src="/images/ChangeAgent.svg" alt="" className="dropdown-icon" />
                    Agente De Cambio
                  </span>
                  <span className="arrow">⌄</span>
                </DropdownHeader>
                <DropdownContent $isOpen={openDropdowns.agente}>
                  <p>María Eugenia se caracteriza por llevar a cabo, implementar y dejar huellas en el camino. Inspirar, motivar, sembrar, generar el cambio, mostrarlo. Cada uno es protagonista de su propia vida, el desafío es elegir vivirlo.</p>
                  <p className="extra-text">— Si quieres vivirlo, ¿qué esperas? Let's go!</p>
                </DropdownContent>
              </Dropdown>
            </div>

            <div className="icons-section">
              <IconsGrid>
                {iconsData.map((icon, index) => (
                  <IconWrapper key={index}>
                    <img src={icon.src} alt={icon.alt} />
                    <Tooltip>{icon.tooltip}</Tooltip>
                  </IconWrapper>
                ))}
              </IconsGrid>
            </div>
          </DropdownsAndIcons>
        </AboutMeContainer>
        <CollageSection>
          <img src="/images/Collage.svg" alt="" />
          <img src="/images/MySymbols.svg" alt="" />
        </CollageSection>
        <MobileCollageSection>
          <img src="/images/MobileCollage1.svg" alt="" />
          <img src="/images/MobileCollage2.svg" alt="" />
          <img src="/images/MobileCollage3.svg" alt="" />
        </MobileCollageSection>
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
        <Contact />

        {/* Modales */}
        {activeModal === 1 && (
          <ModalOverlay $isClosing={isClosing} onClick={closeModal}>
            <ModalContent $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>
              <ModalImage>
                <h3>ÁMBITO CORPORATIVO</h3>
                <img src="/images/Corporate9.svg" alt="" />
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