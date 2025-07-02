import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  overflow: hidden;
`;

export const SlidesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

interface SlideProps {
  position: "left" | "center" | "right";
}

export const Slide = styled.div<SlideProps>`
  position: absolute;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  
  ${({ position }) => {
    switch (position) {
      case "center":
        return `
          width: 50%;
          height: 80%;
          z-index: 3;
          transform: translateX(0);
          opacity: 1;
          filter: brightness(1);
        `;
      case "left":
        return `
          width: 30%;
          height: 60%;
          z-index: 2;
          transform: translateX(-80%);
          opacity: 0.7;
          filter: brightness(0.6);
        `;
      case "right":
        return `
          width: 30%;
          height: 60%;
          z-index: 2;
          transform: translateX(80%);
          opacity: 0.7;
          filter: brightness(0.6);
        `;
      default:
        return `
          width: 30%;
          height: 60%;
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

interface TextOverlayProps {
  position: "left" | "center" | "right";
}

export const TextOverlay = styled.div<TextOverlayProps>`
  position: absolute;
  bottom: 10rem;
  right: 0rem;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 200;
  backdrop-filter: blur(10px);
  width: 200px;
`;

export const ArrowButton = styled.button`
  position: absolute;
  background: transparent;
  color: white;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:first-child {
    left: 2rem;
  }

  &:last-child {
    right: 2rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;