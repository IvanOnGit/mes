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
  border-radius: 12px;
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
  border-radius: 12px;
`;

interface TextOverlayProps {
  position: "left" | "center" | "right";
}

export const TextOverlay = styled.div<TextOverlayProps>`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-size: ${({ position }) => position === "center" ? "1.1rem" : "0.9rem"};
  font-weight: ${({ position }) => position === "center" ? "600" : "400"};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ArrowButton = styled.button`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 1rem;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

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