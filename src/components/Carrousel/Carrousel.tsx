import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  CarouselContainer,
  Slide,
  Image,
  ArrowButton,
  SlidesWrapper,
  ArrowsContainer,
  MobileCarousel,
  MobileSlideContainer,
  MobileSlide,
  MobileImage
} from "./styles";

interface SlideData {
  src: string;
  mobileSrc?: string; // Nueva propiedad para imágenes mobile
  text: string;
}

const slides: SlideData[] = [
  {
    src: "/images/Imagen 1.jpg",
    mobileSrc: "/images/Imagen 1 mobile.jpg",
    text: "Quien se atreve a mirar la oscuridad"
  },
  {
    src: "/images/Imagen 2.jpg",
    mobileSrc: "/images/Imagen 2 mobile.jpg",
    text: "Tiene el poder de transformarla"
  },
  {
    src: "/images/Imagen 3.jpeg",
    mobileSrc: "/images/Imagen 3 mobile.jpg",
    text: "En nuevos recursos, nuevas posibilidades, nuevos escenarios"
  },
  {
    src: "/images/Imagen 4.jpg",
    text: "En nuevos recursos, nuevas posibilidades, nuevos escenarios"
  },
  {
    src: "/images/Foto 4 carrusel.jpg",
    mobileSrc: "/images/Imagen 4 mobile.jpg",
    text: "Es otro nivel, lo que requiere este contexto, de adentro hacia afuera"
  }
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Filtrar slides que tienen mobileSrc para mobile
  const mobileSlides = slides.filter(slide => slide.mobileSrc);

  // Detectar si es mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  },[]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  },[]);

  const handleManualNavigation = useCallback((navigationFn: () => void) => {
    return ()=>{
      // Pausar autoplay temporalmente cuando el usuario navega manualmente
      setIsAutoPlaying(false);
      navigationFn();
      
      // Reanudar autoplay después de 4 segundos
      setTimeout(() => {
        setIsAutoPlaying(true);
      }, 4000);
    }
  },[]);

  // Efecto para el autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      // En mobile, hacer el cambio más lento (5 segundos)
      const interval = isMobile ? 5000 : 7000;
      
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, interval);
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
  }, [isAutoPlaying, nextSlide, isMobile]);

  const getSlidePosition = useCallback((index: number) => {
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
  },[currentIndex]);

  // Renderizar versión mobile
  if (isMobile) {
    return (
      <MobileCarousel>
        <MobileSlideContainer>
          {/* Primera serie de imágenes mobile - solo las que tienen mobileSrc */}
          {mobileSlides.map((slide, index) => (
            <MobileSlide key={`first-${index}`}>
              <MobileImage src={slide.mobileSrc!} alt={slide.text} />
            </MobileSlide>
          ))}
          {/* Segunda serie de imágenes mobile (para el loop infinito) */}
          {mobileSlides.map((slide, index) => (
            <MobileSlide key={`second-${index}`}>
              <MobileImage src={slide.mobileSrc!} alt={slide.text} />
            </MobileSlide>
          ))}
        </MobileSlideContainer>
      </MobileCarousel>
    );
  }

  // Renderizar versión desktop (original)
  return (
    <CarouselContainer>
      <SlidesWrapper>
        {slides.map((slide, index) => {
          const position = getSlidePosition(index);
          if (position === "hidden") return null;
          
          return (
            <Slide key={slide.src} position={position}>
              <Image src={slide.src} alt={slide.text} />
            </Slide>
          );
        })}
      </SlidesWrapper>
      
      <ArrowsContainer>
        <ArrowButton onClick={handleManualNavigation(prevSlide)}>
          ←
        </ArrowButton>
        <ArrowButton onClick={handleManualNavigation(nextSlide)}>
          →
        </ArrowButton>
      </ArrowsContainer>
    </CarouselContainer>
  );
};

export default Carousel;