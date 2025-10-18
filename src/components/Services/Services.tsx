import { useCallback, useState } from 'react';
import { 
  Container, 
  InnerContainer, 
  Titles, 
  TitleItem, 
  ExpandedDescription,
  Images, 
  ImageItem,
  MobileServiceItem
} from "./styles";
import { Link } from 'react-router-dom';

const services = [
  {
    id: 0,
    title: "LÍDERES - BIOTRASCENDENCIA",
    description: "La consultoría le brinda a los Líderes las herramientas necesarias para alcanzar sus metas profesionales y prosperar en entornos complejos, dinámicos y cambiantes.",
    subtitle: "PRESENCIA · CONSCIENCIA · SENTIDO ",
    image: "/images/BIOTRASCENDENCIA.jpg",
    route: "/biotrascendencia"
  },
  {
    id: 1,
    title: "CONSULTORÍA SISTÉMICA",
    description: "Cada persona está interconectada con los demás miembros de los sistemas a los que pertenece, y estas relaciones operan más allá de su voluntad o conocimiento, influyendo profundamente en su comportamiento y experiencia.",
    subtitle: "Fluir y avanzar",
    image: "/images/CONSULTORÍA SISTÉMICA.jpg",
    route: "/consultoria-sistemica"
  },
  {
    id: 2,
    title: "CONSULTORÍA ASTROLÓGICA",
    description: "La carta astral es el mapa energético que sirve como guía y es una potente fuente de información disponible.",
    subtitle: "Que lo desconocido no controle tu vida. Descubre, elige y diseña tu camino.",
    image: "/images/ASTROLOGÍA.jpg",
    route: "/consultoria-astrologica"
  },
  {
    id: 3,
    title: "TALENT ACTIVATION SYSTEM",
    description: "Esta mirada holística integral permite incorporar recursos, desplegar los dones y habilidades, sentir mayor confianza y transformar los obstáculos para alcanzar un nivel superior.",
    subtitle: "A creative and systemic way to fast transformation",
    image: "/images/TAS.jpg",
    route: "/talent-activation-system"
  },
  {
    id: 4,
    title: "PROFESSIONAL TRAINING",
    description: "A través de Programas de Formación y de Talleres de Capacitación y Entrenamiento se combinan conocimientos teóricos, actividades prácticas y experiencias vivenciales.",
    subtitle: "Entrenamientos que impactan. De la teoría a la acción!",
    image: "/images/PROFESSIONAL TRAINING.jpg",
    route: "/professional-training"
  }
];

function InteractiveServices() {
  const [activeService, setActiveService] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleServiceClick = useCallback((index: number) => {
    return (event: React.MouseEvent) =>{
      event.stopPropagation();
      if (activeService === index && isExpanded) {
      setShowContent(false);
      setIsExpanded(false);
      setTimeout(() => {
        setActiveService(-1);
      }, 200);
    } else {
      setActiveService(index);
      setIsExpanded(true);
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }
    }
  },[activeService, isExpanded]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowContent(false);
    setTimeout(() => {
      setIsExpanded(false);
      setActiveService(-1);
    }, 300);
  };

  return (
    <Container id='servicios'>
      <h1>SERVICIOS</h1>
      
      {/* Desktop Version */}
      <InnerContainer className={`desktop-view ${isExpanded ? 'expanded' : ''}`}>
        <Titles className={isExpanded ? 'expanded' : ''}>
          {services.map((service, index) => (
            <TitleItem 
              key={service.id}
              className={`
                ${activeService === index ? 'active' : ''}
                ${isExpanded && activeService !== index ? 'hidden' : ''}
                ${isExpanded && activeService === index ? 'expanded' : ''}
                ${showContent && activeService === index ? 'show-content' : ''}
                ${index === services.length - 1 ? 'last-item' : ''}
              `}
              onClick={handleServiceClick(index)}
            >
              <h2>+ {service.title}</h2>
              {isExpanded && activeService === index && (
                <ExpandedDescription className={showContent ? 'show' : ''}>
                  <p className="service-description">
                    {service.description}
                  </p>
                  <h3>{service.subtitle}</h3>
                  <div className="action-buttons">
                    <Link to={service.route}>
                      <button className="btn-primary">Ver más</button>
                    </Link>
                    <button className="btn-secondary">Contactar</button>
                  </div>
                </ExpandedDescription>
              )}
            </TitleItem>
          ))}
        </Titles>

        <Images className={isExpanded ? 'expanded' : ''}>
          {services.map((service, index) => {
            return (
            <ImageItem 
              key={service.id}
              className={`
                ${activeService === index ? 'active' : ''}
                ${isExpanded && activeService !== index ? 'hidden' : ''}
                ${isExpanded && activeService === index ? 'expanded' : ''}
                ${showContent && activeService === index ? 'show-content' : ''}
              `}
              onClick={handleServiceClick(index)}
            >
              <img src={service.image} alt={service.title} />
              <div className="plus-icon">+</div>
              {isExpanded && activeService === index && (
                <div className="close-icon" onClick={handleClose}>×</div>
              )}
            </ImageItem>
          )
          })}
        </Images>
      </InnerContainer>

      {/* Mobile Version */}
      <div className="mobile-view">
        {services.map((service, index) => (
          <MobileServiceItem 
            key={service.id}
            className={`
              ${activeService === index ? 'active' : ''}
              ${isExpanded && activeService === index ? 'expanded' : ''}
              ${showContent && activeService === index ? 'show-content' : ''}
              ${index === services.length - 1 ? 'last-item' : ''}
            `}
            onClick={handleServiceClick(index)}
          >
            <div className="mobile-title">
              <h2>+ {service.title}</h2>
            </div>
            <div className="mobile-image-container">
              <img src={service.image} alt={service.title} />
              <div className="plus-icon">+</div>
              {isExpanded && activeService === index && (
                <div className="close-icon" onClick={handleClose}>×</div>
              )}
            </div>
            {isExpanded && activeService === index && (
              <ExpandedDescription className={`mobile ${showContent ? 'show' : ''}`}>
                <p className="service-description">
                  {service.description}
                </p>
                <h3>{service.subtitle}</h3>
                <div className="action-buttons">
                  <Link to={service.route}>
                    <button className="btn-primary">Ver más</button>
                  </Link>
                  <button className="btn-secondary">Contactar</button>
                </div>
              </ExpandedDescription>
            )}
          </MobileServiceItem>
        ))}
      </div>
    </Container>
  );
}

export default InteractiveServices;