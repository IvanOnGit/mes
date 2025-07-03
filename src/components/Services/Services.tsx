import { useState } from 'react';
import { 
  Container, 
  InnerContainer, 
  Titles, 
  TitleItem, 
  ExpandedDescription,
  Images, 
  ImageItem
} from "./styles";

const services = [
  {
    id: 0,
    title: "LÍDERES - BIOTRASCENDENCIA",
    description: "La consultoría le brinda a los Líderes las herramientas necesarias para alcanzar sus metas profesionales y prosperar en entornos complejos, dinámicos y cambiantes.",
    subtitle: "Facilitar la evolución consciente",
    image: "/images/BIOTRASCENDENCIA.jpg"
  },
  {
    id: 1,
    title: "CONSULTORÍA SISTÉMICA",
    description: "Metodología integral que aborda los desafíos organizacionales desde una perspectiva holística, considerando todas las interacciones y dinámicas del sistema.",
    subtitle: "Transformación organizacional integral",
    image: "/images/CONSULTORÍA SISTÉMICA.jpg"
  },
  {
    id: 2,
    title: "CONSULTORÍA ASTROLÓGICA",
    description: "Herramientas de autoconocimiento y desarrollo personal basadas en el análisis astrológico para la toma de decisiones estratégicas.",
    subtitle: "Orientación cósmica para el liderazgo",
    image: "/images/ASTROLOGÍA.jpg"
  },
  {
    id: 3,
    title: "TALENT ACTIVATION SYSTEM",
    description: "Sistema innovador para identificar, desarrollar y activar el potencial único de cada individuo en el contexto profesional y personal.",
    subtitle: "Desbloquea tu máximo potencial",
    image: "/images/TAS.jpg"
  },
  {
    id: 4,
    title: "PROFESSIONAL TRAINING",
    description: "Programas de formación especializados para el desarrollo de competencias técnicas y habilidades blandas en entornos profesionales.",
    subtitle: "Excelencia en el desarrollo profesional",
    image: "/images/PROFESSIONAL TRAINING.jpg"
  }
];

function InteractiveServices() {
  const [activeService, setActiveService] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleServiceClick = (index: number) => {
    if (activeService === index && isExpanded) {
      // Secuencia de cierre
      setShowContent(false);
      setTimeout(() => {
        setIsExpanded(false);
        setActiveService(-1);
      }, 300); // Esperar que desaparezca el contenido
    } else {
      setActiveService(index);
      setIsExpanded(true);
      // Esperar que se complete la expansión antes de mostrar el contenido
      setTimeout(() => {
        setShowContent(true);
      }, 800); // Tiempo para que se complete la expansión
    }
  };

  const handleClose = () => {
    // Secuencia de cierre
    setShowContent(false);
    setTimeout(() => {
      setIsExpanded(false);
      setActiveService(-1);
    }, 300);
  };

  return (
    <Container>
      <h1>SERVICIOS</h1>
      
      <InnerContainer className={isExpanded ? 'expanded' : ''}>
        <Titles className={isExpanded ? 'expanded' : ''}>
          {services.map((service, index) => (
            <TitleItem 
              key={service.id}
              className={`
                ${activeService === index ? 'active' : ''}
                ${isExpanded && activeService !== index ? 'hidden' : ''}
                ${isExpanded && activeService === index ? 'expanded' : ''}
                ${showContent && activeService === index ? 'show-content' : ''}
              `}
              onClick={() => handleServiceClick(index)}
            >
              <h2>+ {service.title}</h2>
              {isExpanded && activeService === index && (
                <ExpandedDescription className={showContent ? 'show' : ''}>
                  <p className="service-description">
                    {service.description}
                  </p>
                  <h3>{service.subtitle}</h3>
                  <div className="action-buttons">
                    <button className="btn-primary">Ver más</button>
                    <button className="btn-secondary">Contactar</button>
                  </div>
                </ExpandedDescription>
              )}
            </TitleItem>
          ))}
        </Titles>

        <Images className={isExpanded ? 'expanded' : ''}>
          {services.map((service, index) => (
            <ImageItem 
              key={service.id}
              className={`
                ${activeService === index ? 'active' : ''}
                ${isExpanded && activeService !== index ? 'hidden' : ''}
                ${isExpanded && activeService === index ? 'expanded' : ''}
                ${showContent && activeService === index ? 'show-content' : ''}
              `}
              onClick={() => handleServiceClick(index)}
            >
              <img src={service.image} alt={service.title} />
              <div className="plus-icon">+</div>
              {isExpanded && activeService === index && (
                <div className="close-icon" onClick={handleClose}>×</div>
              )}
            </ImageItem>
          ))}
        </Images>
      </InnerContainer>
    </Container>
  );
}

export default InteractiveServices;