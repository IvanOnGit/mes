import React, { useState } from "react";
import {
  CarouselContainer,
  Slide,
  Image,
  ArrowButton,
  SlidesWrapper,
  TextOverlay
} from "./styles";

interface SlideData {
  src: string;
  text: string;
}

const slides: SlideData[] = [
  {
    src: "/images/Imagen 1.svg",
    text: "Quien se atreve a mirar la oscuridad"
  },
  {
    src: "/images/Imagen 2.svg",
    text: "Tiene el poder de transformarla"
  },
  {
    src: "/images/Imagen 3.svg",
    text: "En nuevos recursos, nuevas posibilidades, nuevos escenarios"
  },
  {
    src: "/images/Imagen 4.svg",
    text: "Es otro nivel, lo que requiere este contexto, de adentro hacia afuera"
  }
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
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
    <CarouselContainer>
      <ArrowButton onClick={prevSlide}>
        ←
      </ArrowButton>
      
      <SlidesWrapper>
        {slides.map((slide, index) => {
          const position = getSlidePosition(index);
          if (position === "hidden") return null;
          
          return (
            <Slide key={index} position={position}>
              <Image src={slide.src} alt={`slide-${index}`} />
              {position === "center" && (
                <TextOverlay position={position}>
                  {slide.text}
                </TextOverlay>
              )}
            </Slide>
          );
        })}
      </SlidesWrapper>
      
      <ArrowButton onClick={nextSlide}>
        →
      </ArrowButton>
    </CarouselContainer>
  );
};

export default Carousel;