import React, { useState, useEffect, useRef } from "react";
import {
  CarouselContainer,
  Slide,
  Image,
  ArrowButton,
  SlidesWrapper,
  ArrowsContainer
} from "./styles";

interface SlideData {
  src: string;
  text: string;
}

const slides: SlideData[] = [
  {
    src: "/images/Imagen 1.jpg",
    text: "Quien se atreve a mirar la oscuridad"
  },
  {
    src: "/images/Imagen 2.jpeg",
    text: "Tiene el poder de transformarla"
  },
  {
    src: "/images/Imagen 3.jpeg",
    text: "En nuevos recursos, nuevas posibilidades, nuevos escenarios"
  },
  {
    src: "/images/Imagen 4.jpg",
    text: "Es otro nivel, lo que requiere este contexto, de adentro hacia afuera"
  }
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleManualNavigation = (navigationFn: () => void) => {
    // Pausar autoplay temporalmente cuando el usuario navega manualmente
    setIsAutoPlaying(false);
    navigationFn();
    
    // Reanudar autoplay después de 5 segundos
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 4000);
  };

  // Efecto para el autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pausar autoplay cuando el usuario hace hover sobre el carousel
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const getSlidePosition = (index: number) => {
    const totalSlides = slides.length;
    let diff = (index - currentIndex + totalSlides) % totalSlides;
    
    // Ajustar para que los slides se muestren correctamente en bucle
    if (diff > totalSlides / 2) {
      diff = diff - totalSlides;
    }
    
    if (diff === 0) return "center";
    if (diff === -1) return "left";
    if (diff === 1) return "right";
    return "hidden";
  };

  return (
    <CarouselContainer 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SlidesWrapper>
        {slides.map((slide, index) => {
          const position = getSlidePosition(index);
          if (position === "hidden") return null;
          
          return (
            <Slide key={index} position={position}>
              <Image src={slide.src} alt={`slide-${index}`} />
            </Slide>
          );
        })}
      </SlidesWrapper>
      
      <ArrowsContainer>
        <ArrowButton onClick={() => handleManualNavigation(prevSlide)}>
          ←
        </ArrowButton>
        <ArrowButton onClick={() => handleManualNavigation(nextSlide)}>
          →
        </ArrowButton>
      </ArrowsContainer>
    </CarouselContainer>
  );
};

export default Carousel;