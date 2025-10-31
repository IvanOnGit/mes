import { useState } from "react";
import Contact from "../Contact/Contact";
import Eugenia from "../Eugenia/Eugenia";
import Navbar from "../Navbar/Navbar";
import { AboutMeContainer, Card, CardsContainer,Container, DropdownsAndIcons, ModalContent, ModalImage, ModalOverlay, ModalText, TitleTreeContainer, TreeContainer, Dropdown, DropdownHeader, DropdownContent, IconsGrid, IconWrapper, Tooltip, CollageSection, StyledEugeniaParada, WhatIdoContainer, StyledEugeniaSentada, AlwaysContainer, AlwaysIcons, AlwaysText, MyAxis, Lists, MySymbology } from "./styles";

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
  { src: "/images/About me Icon 2.svg", alt: "Icon 2", tooltip: "Lic. en Comercialización de UAI (1° promedio Cs. Empresariales)" },
  { src: "/images/About me Icon 3.svg", alt: "Icon 3", tooltip: "Programa de Emprendedores en IAE - NAVES" },
  { src: "/images/About me Icon 4.svg", alt: "Icon 4", tooltip: "Astróloga humanista CASA XI" },
  { src: "/images/About me Icon 5.svg", alt: "Icon 5", tooltip: "Astróloga humanista, evolutiva, sistémica, transpersonal y empresarial. Nueva Delfos" },
  { src: "/images/About me Icon 6.svg", alt: "Icon 6", tooltip: "Practicante Chamánica FSS" },
  { src: "/images/About me Icon 7.svg", alt: "Icon 7", tooltip: "Consteladora Organizacional y Consultora Sistémica CONGRUENCIA SAC" },
  { src: "/images/About me Icon 8.svg", alt: "Icon 8", tooltip: "Comunicadora Sistémica CLCF" },
  { src: "/images/About me Icon 9.svg", alt: "Icon 9", tooltip: "Consteladora Familiar con orientación al trauma trifocal ICFT" },
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
                  <p>Interesada en explorar el mundo, los planos espirituales, y las nuevas experiencias. Conectada con el presente, enriqueciéndose de lo que emerge dispuesta al cambio y a expandir sus horizontes, encontrando belleza y gratitud en cada paso.</p>
                  <p className="extra-text">— La vida es El Viaje.</p>
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
                  <p>Expresiva, intuitiva, auténtica. Creadora de Biotrascendencia®, filosofía que nació como resultado de sentir la conexión con la unidad y la vida, motivada por la visión, propósito de una vida con sentido, el enfoque evolutivo y habitar nuevos lugares de mayor bienestar y comprensión. Una herramienta poderosa para quienes busquen y se animen a estar mejor.</p>
                  <p className="extra-text">— Presencia + Consciencia + Sentido</p>
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
                  <p>Maria Eugenia se caracteriza por impulsar, proponer, llevar a cabo y crear nuevas posibilidades que generen valor. Sembrar, intervenir con acciones de impacto x 5. Promueve que cada uno es protagonista de su propia vida, el verdadero diseñador.</p>
                  <p className="extra-text">— Si quieres vivirlo, ¿qué esperas?</p>
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
          <WhatIdoContainer>
            <StyledEugeniaParada src="/images/EugeniaParada.png" alt="" />
            <div className="Lists-container">
              <Lists>
                <h2>Que me gusta hacer?</h2>
                <span></span>
                <ul>
                  <li>Facilitar y acompañar procesos evolutivos.</li>
                  <li>Conectar y abrir puertas.</li>
                  <li>Ayudar a encontrar un mayor bienestar.</li>
                  <li>Sembrar amor, sentido y entusiasmo.</li>
                </ul>
              </Lists>
              <Lists>
                <h2>Cómo lo hago?</h2>
                <span></span>
                <ul>
                  <li>Descubriendo los talentos.</li>
                  <li>Activando la potencia de las personas.</li>
                  <li>Creando nuevas posibilidades.</li>
                  <li>Combinando disciplinas al servicio de la vida.</li>
                </ul>
              </Lists>
              <Lists>
                <h2>Mi Simbología</h2>
                <span></span>
                <MySymbology src="/images/MySymbology.png" alt="" />
              </Lists>
            </div>
          </WhatIdoContainer>
          <AlwaysContainer>
            <StyledEugeniaSentada src="/images/EugeniaSentada.png" alt="" />
            <AlwaysText>
              <h2>Siempre con:</h2>
              <AlwaysIcons src="/images/AlwaysIcons.png" alt="" />
            </AlwaysText>
            <span></span>
            <AlwaysText>
              <h2>Mi eje</h2>
              <MyAxis src="/images/MyAxis.png" alt="" />
            </AlwaysText>
          </AlwaysContainer>
        </CollageSection>
        <TreeContainer>
          <TitleTreeContainer>
            <h2>Recorrido Profesional</h2>
            <img src="/images/Tree.svg" alt="" />
          </TitleTreeContainer>
          <CardsContainer>
            <Card>
              <h2 className="mobile">ÁMBITO <br />EMPRESARIAL</h2>
              <p>Con más de 30 años de experiencia en el ámbito empresarial, María Eugenia ha desarrollado su carrera en organizaciones de primer nivel como Coca Cola Femsa, Banco Galicia, Banco Tornquist, CTI Móvil y TSU Cosméticos. En su trayectoria, se ha desempeñado como Gerente de Ventas y Responsable de Desarrollo de Mercado, alcanzando un alto nivel de expertise comercial y liderando exitosas estrategias en el mundo corporativo [...]</p>
              <button onClick={() => openModal(1)}>Ver más</button>
            </Card>
            <span />
            <Card>
              <h2>ÁMBITO DE CAPACITACIÓN Y FORMACIÓN</h2>
              <p>Como formadora de equipos de ventas, María Eugenia ha liderado y brindado cientos de procesos de entrenamiento y capacitación a lo largo de su carrera, optimizando el desempeño y POTENCIANDO EL TALENTO de las personas. Ha ejercido como docente de orientación vocacional y desarrollo de habilidades para el mundo laboral de nivel secundario, y dictado talleres [...] </p>
              <button onClick={() => openModal(2)}>Ver más</button>
            </Card>
            <span />
            <Card>
              <h2>ÁMBITO DE <br />DESARROLLO HUMANO</h2>
              <p>Desde 2011 María Eugenia inició un profundo camino de búsqueda interior, impulsado por una fuerte experiencia que marcó su vida personal, esta etapa de resiliencia y transformación la llevó a explorar diversas disciplinas holísticas. En 2019, con la convicción de que el conocimiento adquirido debía estar al servicio de las personas, decidió compartir estas herramientas con quienes buscan reconectar consigo mismos [...]</p>
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
              <ModalText>
                <h3>ÁMBITO EMPRESARIAL</h3>
                <h4>Enfoque Humano y Creativo</h4>
                <p>Con más de 30 años de experiencia en el ámbito empresarial, María Eugenia ha desarrollado su carrera en organizaciones de primer nivel como Coca Cola Femsa, Banco Galicia, Banco Tornquist, CTI Móvil y TSU Cosméticos. En su trayectoria, se ha desempeñado como Gerente de Ventas y Responsable de Desarrollo de Mercado, alcanzando un alto nivel de expertise comercial y liderando exitosas estrategias en el mundo corporativo.</p>
                <p>En 2007, creó y fundó la Consultora Comercial y de Gestión Empresarial SYS Argentina®, la cual dirige hasta la fecha. A través de su equipo ha brindado soluciones a más de 1.200 pymes, siendo especialista en el mercado financiero y de retailers, abarcando actividades claves como ventas, marketing y atención al cliente.</p>
                <p>Su ADN diferencial está marcado por una absoluta vocación de servicio, un enfoque cercano y personalizado hacia las personas, un compromiso con la excelencia profesional y, además, por su espíritu emprendedor, que la ha impulsado a crear diversos proyectos, generando redes y abriendo nuevas oportunidades y soluciones innovadoras.</p>
              </ModalText>
              <ModalImage>
                <img src="/images/Corporate9.png" alt="" />
              </ModalImage>
            </ModalContent>
          </ModalOverlay>
        )}

        {activeModal === 2 && (
          <ModalOverlay $isClosing={isClosing} onClick={closeModal}>
            <ModalContent $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>
              <ModalText className="modal2">
                <h3>ÁMBITO DE CAPACITACIÓN Y FORMACIÓN</h3>
                <h4>Activadora de Talentos</h4>
                <p>Como formadora de equipos de ventas, María Eugenia ha liderado y brindado cientos de procesos de entrenamiento y capacitación a lo largo de su carrera, optimizando el desempeño y potenciando el talento de las personas. </p>
                <p>Ha ejercido como docente de orientación vocacional y desarrollo de habilidades para el mundo laboral de nivel secundario y dictado talleres para ayudar a jóvenes y adultos a desarrollarse profesionalmente. Su sello: Generosa en compartir su experticia y crear espacios vivenciales.</p>
                <p>Desde la Consultoría instruye y acompaña  a través de Formación In Company y Professional Training® en ventas, eficiencia laboral, liderazgo y habilidades de gestión. Y a través de Mundo Vocacional® facilita procesos de autoconocimiento, vocación, ocupación, profesión y propósito en acción.</p>
              </ModalText>
              <ModalImage className="modal2">
                <img src="/images/Formation.jpg" alt="" />
              </ModalImage>
            </ModalContent>
          </ModalOverlay>
        )}

        {activeModal === 3 && (
          <ModalOverlay $isClosing={isClosing} onClick={closeModal}>
            <ModalContent $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>
              <ModalText className="modal3">
                <h3>ÁMBITO DE DESARROLLO HUMANO</h3>
                <h4>Evolución Personal</h4>
                <p>Desde 2011 María Eugenia inició un profundo camino de búsqueda interior, impulsado por una fuerte experiencia que marcó su vida personal, esta etapa de resiliencia y transformación la llevó a explorar diversas disciplinas holísticas.</p>
                <p>En 2019, con la convicción de que el conocimiento adquirido debía estar al servicio de las personas, decidió compartir estas herramientas con quienes buscan reconectar consigo mismos. Desde entonces, acompaña procesos de autoconocimiento, conexión y conciencia, promoviendo el bienestar integral tanto en el ámbito personal como profesional.</p>
                <p>Hoy, Eugenia brinda sesiones individuales y talleres grupales como Astróloga, Consteladora Familiar y Consultora Sistémica. Integrando su sólida experiencia en el mundo empresarial, también diseña conferencias y entrenamientos para organizaciones, donde fusiona sus conocimientos holísticos con una mirada estratégica, generando intervenciones de alto impacto orientadas al desarrollo humano y organizacional.</p>
              </ModalText>
              <ModalImage className="modal3">
                <img src="/images/MeditatingBack.jpg" alt="" />
              </ModalImage>
            </ModalContent>
          </ModalOverlay>
        )}
    </Container>
  );
}

export default AboutMe;