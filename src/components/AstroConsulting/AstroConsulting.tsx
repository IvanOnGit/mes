import { useState } from 'react';
import Contact from "../Contact/Contact";
import FloatingDescription from "../FloatingDescription/FloatingDescription";
import FloatingSubtitle from "../FloatingSubtitle/FloatingSubtitle";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import DynamicImages from "../ImagesContainer/ImagesContainer";
import Navbar from "../Navbar/Navbar";
import RequestInformation from "../RequestInformation/RequestInformation";
import { 
  Capsule, 
  CapsulesContainer, 
  Container, 
  FirstContainer, 
  TypesOfLecturesContainer, 
  SecondContainer, 
  TextContainer, 
  ModalityContainer, 
  IconsContainer,
  ExpandedContainer,
  ExpandedContent,
  CloseButton,
  InPeopleExpanded,
  InCompanyExpanded,
  DropdownsContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem
} from "./styles";

const myImages = [
    "/images/Astro 1.svg",
    "/images/Astro 2.svg",
    "/images/Astro 3.svg",
  ];

// Datos para los desplegables
const dropdownData = {
  RRHH: [
    "Selección de personal.",
    "Activación de talentos.",
    "Planes de carreras.",
    "Reconversión de puestos.",
    "Re-ubicación de colaboradores.",
    "Perfiles de Líderes.",
    "Conocimiento sobre cada colaborador.",
    "Cuándo y cómo hablar sobre pertinencias.",
    "Cómo beneficiar para sus empleados."
  ],
  MARKETING: [
    "Conocer las inquietudes de mercado.",
    "Planificar lanzamientos.",
    "Profundizar en los comportamientos de los consumidores.",
    "Crear campañas de comunicación efectivas."
  ],
  "DIRECCIÓN GENERAL": [
    "Conocer los perfiles y alcances de Directores y Gerentes.",
    "Definir objetivos.",
    "Crear Equipos de Líderes alineados a la misión y visión de la Empresa.",
    "Conocer ciclos propios de la Empresa.",
    "Contar con información del entorno para la planificación estratégica."
  ],
  "TODAS LAS ÁREAS": [
    "Mejorar relacionamiento la comunicación particular y general.",
    "Trabajar en equipo a través de la energía entre colaboradores.",
    "Eficientar los procesos.",
    "Potenciar habilidades, maximizar rendimientos y eficiencia.",
    "Crear Equipos exitosos."
  ]
};

function AstroConsulting() {
  const [expandedPersonas, setExpandedPersonas] = useState(false);
  const [expandedEmpresas, setExpandedEmpresas] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const togglePersonas = () => {
    setExpandedPersonas(!expandedPersonas);
    if (expandedEmpresas) setExpandedEmpresas(false);
    setOpenDropdown(null);
  };

  const toggleEmpresas = () => {
    setExpandedEmpresas(!expandedEmpresas);
    if (expandedPersonas) setExpandedPersonas(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <Container>
      <Navbar />
      <FloatingTitle title="CONSULTORÍA ASTROLÓGICA" />
      <FloatingDescription description="Que lo desconocido no controle tu Vida Descubre, elige y diseña tu Camino" />
      <FloatingSubtitle subtitle="· TU MAPA ENERGÉTICO ·" />
      <Hero 
        image="/images/ASTROLOGÍA.jpg" 
      />
      
      {/* Contenedor que se expande/contrae */}
      <ExpandedContainer $isExpanded={expandedPersonas || expandedEmpresas} $hasOpenDropdown={openDropdown !== null}>
        {!expandedPersonas && !expandedEmpresas && (
          <TextContainer>
            <FirstContainer>
              <img src="/images/InPeople.svg" alt="" />
              <div>
                <h2>EN LAS PERSONAS</h2>
                <span></span>
                <p>
                  La carta astral es el mapa energético que sirve como guía y es la fuente de información disponible para autoconocerse
                  ampliar la comprensión y tomar mejores decisiones.
                </p>
                <button onClick={togglePersonas}>Ver más</button>
              </div>
            </FirstContainer>
            <SecondContainer>
              <img src="/images/InBusiness.svg" alt="" />
              <div>
                <h2>EN LAS EMPRESAS</h2>
                <span></span>
                <p>La Astrología en las organizaciones es una herramienta potente que brinda soluciones inmediatas, especialmente en las relaciones y en el desarrollo de talentos.</p>
                <button onClick={toggleEmpresas}>Ver más</button>
              </div>
            </SecondContainer>
          </TextContainer>
        )}

        {/* Contenido expandido para Personas */}
        {expandedPersonas && (
          <ExpandedContent $bgColor="#D2D2D2" $fromLeft={true}>
            <CloseButton onClick={togglePersonas}>Ver menos</CloseButton>
            <InPeopleExpanded>
              <img src="/images/InPeople.svg" alt="" />
              <div className='text'>
                <h2>EN LAS PERSONAS</h2>
                <span />
                <div >
                <p>
                 La carta natal opera en su completitud, seamos conocedores o no de la misma. El sistema de creencias de cada persona no limita ni evita que la energía opere y se manifieste a través de los sentimientos, comportamientos, sucesos, vínculos y entorno.
                </p>
                <p>
                  Es decir que tomar conocimiento sobre uno mismo, tener contacto con el potencial de posibilidades que traemos y abordarlo con conciencia, permite salir de lo automático, lo reactivo y de la reactivo y de la identidad identidad fija auto-percibida.
                </p>
              </div>
              </div>
              <div className='text'>
                <p className='not'>
                  La propuesta es dejar de ver que lo de afuera no nos pertenece para sí lograr un mayor despliegue y expansión, habitando nuevos lugares, siendo creador y diseñador del propio destino.
                </p>
                <p>
                  Lo importante es asumir el poder de crear, resignificar y potenciar todos los dones y talentos que traemos, aprendiendo a transformar lo incómodo en oportunidad y encauzarlo a favor del propósito de vida.
                </p>
              </div>
            </InPeopleExpanded>
          </ExpandedContent>
        )}

        {/* Contenido expandido para Empresas */}
        {expandedEmpresas && (
          <ExpandedContent $bgColor="white" $fromLeft={false}>
            <CloseButton onClick={toggleEmpresas}>Ver menos</CloseButton>
            <InCompanyExpanded>
                <img src="/images/InBusiness.svg" alt="" />
                <div className="content-wrapper">
                  <div className='text'>
                    <h2>EN LAS EMPRESAS</h2>
                    <span />
                    <p>
                      La Astrología en las organizaciones es una herramienta potente que 
                      brinda soluciones inmediatas, especialmente en las relaciones 
                      y en el desarrollo de talentos.
                    </p>
                    <p>
                      Cuando una persona está en el lugar adecuado impacta en el entorno. 
                      Cuando los equipos son formados y reestructurados, en función a sus energías, 
                      sus características y propósito personal, los resultados se manifiestan 
                      y el clima laboral es virtuoso, colaborativo y constructivo.
                    </p>
                  </div>
                  <DropdownsContainer>
                    {Object.entries(dropdownData).map(([key, items]) => (
                      <div key={key} style={{ width: '100%' }}>
                        <DropdownButton 
                          onClick={() => toggleDropdown(key)}
                          $isOpen={openDropdown === key}
                        >
                          {key}
                          <span className="arrow">{openDropdown === key ? '▲' : '▼'}</span>
                        </DropdownButton>
                        <DropdownContent $isOpen={openDropdown === key}>
                          {items.map((item, index) => (
                            <DropdownItem key={index}>
                              • {item}
                            </DropdownItem>
                          ))}
                        </DropdownContent>
                      </div>
                    ))}
                  </DropdownsContainer>
                </div>
            </InCompanyExpanded>
          </ExpandedContent>
        )}
      </ExpandedContainer>

      <TypesOfLecturesContainer>
              <h2>TIPOS DE LECTURA</h2>
              <CapsulesContainer>
                <Capsule>
                  <h3>Carta Natal</h3>
                </Capsule>
                <Capsule>
                  <h3>Carta Dacrónica</h3>
                </Capsule>
                <Capsule>
                  <h3>Sinastría</h3>
                </Capsule>
                <Capsule>
                  <h3>Revolución Solar</h3>
                </Capsule>
                <Capsule>
                  <h3>Predicciones</h3>
                </Capsule>
                <Capsule>
                  <h3>Carta Vocacional</h3>
                </Capsule>
        </CapsulesContainer>
                <Capsule className="last">
                  <h3>Carta Astral - Eventos, Proyectos, Empresas, Momento</h3>
                </Capsule>
      </TypesOfLecturesContainer>
      <ModalityContainer>
              <h2>MODALIDADES</h2>
              <IconsContainer>
                <div>
                  <img src="/images/Icono 9.svg" alt="" />
                </div>
                <div>
                  <img src="/images/Icono 10.svg" alt="" />
                </div>
                <div>
                  <img src="/images/Icono 8.svg" alt="" />
                </div>
                <div>
                  <img src="/images/Icono 11.svg" alt="" />
                </div>
              </IconsContainer>
      </ModalityContainer>
      <RequestInformation title="¡Deja el Piloto Automático y Comanda tu Vida!" />
      <DynamicImages images={myImages} />
      <Contact />
    </Container>
  );
}

export default AstroConsulting;