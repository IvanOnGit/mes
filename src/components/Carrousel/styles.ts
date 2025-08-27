import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 630px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  overflow: hidden;
  margin-top: 2rem;
`;

export const SlidesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  position: relative;
`;

interface SlideProps {
  position: "left" | "center" | "right";
}

export const Slide = styled.div<SlideProps>`
  position: absolute;
  transition: all 1s ease-in-out;
  overflow: hidden;
  
  ${({ position }) => {
    switch (position) {
      case "center":
        return `
          width: 55%;
          height: 100%;
          z-index: 3;
          transform: translateX(0);
          opacity: 1;
          filter: brightness(1);
        `;
      case "left":
        return `
          width: 25%;
          height: 85%;
          z-index: 2;
          transform: translateX(-180%);
          opacity: 0.7;
          filter: brightness(0.6);
        `;
      case "right":
        return `
          width: 25%;
          height: 85%;
          z-index: 2;
          transform: translateX(180%);
          opacity: 0.7;
          filter: brightness(0.6);
        `;
      default:
        return `
          width: 25%;
          height: 70%;
          z-index: 1;
          opacity: 0;
        `;
    }
  }}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  z-index: 10;
  justify-content: center;
  align-items: center;
`;

export const ArrowButton = styled.button`
  background: transparent;
  color: #575757;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

// ========== ESTILOS PARA MOBILE ==========

export const MobileCarousel = styled.div`
  width: 100%;
  height: 47rem;
  position: relative;
  overflow: hidden;
  background-color: #000;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileSlideContainer = styled.div`
  display: flex;
  width: 1000%; /* 4 slides * 2 = 8 para el loop infinito */
  height: 100%;
  animation: infiniteSlide 20s linear infinite; /* 20s = 5s por imagen * 4 imágenes */
  
  @keyframes infiniteSlide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); /* Se mueve la mitad porque duplicamos las imágenes */
    }
  }
  
  &:hover {
    animation-play-state: paused; /* Opcional: pausar en hover */
  }
`;

export const MobileSlide = styled.div`
  flex: 0 0 12.5%; /* 100% / 8 slides = 12.5% cada una */
  height: 100%;
  position: relative;
`;

export const MobileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;