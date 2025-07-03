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
    description: "Cada persona está interconectada con los demás miembros de los sistemas a los que pertenece, y estas relaciones operan mas allá de su voluntad o conocimiento, influyendo profundamente en su comportamiento y experiencia.",
    subtitle: "Fluir y avanzar",
    image: "/images/CONSULTORÍA SISTÉMICA.jpg"
  },
  {
    id: 2,
    title: "CONSULTORÍA ASTROLÓGICA",
    description: "La carta astral es el mapa energético que sirve como guía y es una potente fuente de información disponible.",
    subtitle: "Que lo desconocido no controle tu vida. Descubre, elige y diseña tu camino.",
    image: "/images/ASTROLOGÍA.jpg"
  },
  {
    id: 3,
    title: "TALENT ACTIVATION SYSTEM",
    description: "Es una experiencia holística integral, que permite incorporar recursos, desplegar habilidades, sentir mayor confianza y transformar los obstáculos para alcanzar un nivel superior.",
    subtitle: "A creative and systemic way to fast transformation",
    image: "/images/TAS.jpg"
  },
  {
    id: 4,
    title: "PROFESSIONAL TRAINING",
    description: "Programas de formación especializados para el desarrollo de competencias técnicas y habilidades blandas en entornos profesionales.",
    subtitle: "Entrenamientos que impactan. De la teoría a la acción!",
    image: "/images/PROFESSIONAL TRAINING.jpg"
  }
];

function InteractiveServices() {
  const [activeService, setActiveService] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleServiceClick = (index: number) => {
    if (activeService === index && isExpanded) {
      // Animación de salida simple: fade out rápido
      setShowContent(false);
      setIsExpanded(false);
      setTimeout(() => {
        setActiveService(-1);
      }, 500);
    } else {
      setActiveService(index);
      setIsExpanded(true);
      setTimeout(() => {
        setShowContent(true);
      }, 800);
    }
  };

  const handleClose = () => {
    setShowContent(false);
    setIsExpanded(false);
    setTimeout(() => {
      setActiveService(-1);
    }, 500);
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