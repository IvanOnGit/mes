import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  background-image: url('/images/Textura fondo.svg');
  background-size: cover;
  background-position: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  font-family: "Inter", sans-serif;

  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 2.2rem;
      letter-spacing: 0.3rem;
    }
  }

  /* Mobile/Desktop View Toggle */
  .desktop-view {
    display: flex;
    
    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile-view {
    display: none;
    
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      gap: 1rem;
    }
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 5rem;
  transition: all 0.8s ease;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  
  &.expanded {
    gap: 0;
    align-items: stretch;
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.8s ease;
  
  &.expanded {
    flex: 1;
    justify-content: center;
    padding: 2rem;
  }
`;

export const TitleItem = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  padding: 1rem 0;
  border-radius: 8px;
  
  &.last-item h2 {
    border-bottom: none;
  }

  &.last-item:hover h2 {
    border-bottom-color: transparent;
  }

  &.last-item.active h2 {
    border-bottom-color: transparent;
  }

  &.hidden {
    opacity: 0;
    transform: translateY(-20px);
    max-height: 0;
    padding: 0;
    margin: 0;
  }

  /* Nueva clase para ocultar títulos durante las transiciones */
  &.hide-titles {
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateX(10px);
  }

  /* Prevenir hover effects cuando se están ocultando */
  &.hide-titles:hover {
    background-color: transparent;
    transform: translateY(-20px);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(0);
  }
  
  &.active.expanded {
    background-color: transparent;
    transform: translateX(0);
    padding: 0;
    transition: all 0.5s ease;
  }

  h2 {
    color: white;
    font-size: 1.2rem;
    font-weight: 200;
    border-bottom: 1px solid white;
    padding-bottom: 1rem;
    margin: 0;
    transition: all 0.5s ease;
  }
  
  &.active.expanded h2 {
    font-size: 2rem;
    font-weight: 300;
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 1.5rem;
    opacity: 1;
    transition: all 0.5s ease;
  }

  /* Ocultar el título cuando se muestra el contenido */
  &.show-content h2 {
    opacity: 0;
    transform: translateY(-20px);
    margin-bottom: 0;
    transition: all 0.3s ease;
  }

  &:hover h2 {
    color: white;
    border-bottom-color: white;
  }

  &.active h2 {
    color: white;
    border-bottom-color: white;
    font-weight: 300;
  }

  /* Ocultar títulos durante transiciones */
  &.hide-titles h2 {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const ExpandedDescription = styled.div`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  transform: translateY(20px);
  
  &.show {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
  
  /* Mobile styles */
  &.mobile {
    margin-top: 1rem;
    padding: 0 1rem;
    transition: all 0.3s ease;
    
    &.show {
      max-height: 600px;
    }
  }
  
  .service-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  }

  h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
    }
  }

  .action-buttons {
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.8rem;
    }

    button {
      padding: 0.6rem 3rem;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;

      @media (max-width: 768px) {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
      }

      &.btn-primary {
        background-color: white;
        color: black;

        @media (max-width: 768px) {
          width: 100%;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
        }
      }

      &.btn-secondary {
        background-color: transparent;
        color: white;
        border: 2px solid white;

        &:hover {
          background-color: white;
          color: black;
          transform: translateY(-2px);
        }
      }
    }
  }
`;

export const Images = styled.div`
  display: flex;
  gap: 1.5rem;
  transition: all 0.8s ease;
  margin-top: 1rem;
 
  &.expanded {
    flex: 1;
    gap: 0;
    margin-top: 0;
  }
`;

export const ImageItem = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 5rem 0 0;
  overflow: hidden;
  width: 7rem;
  height: 22rem;
  
  &.hidden {
    opacity: 0;
    transform: scale(0.8);
    width: 0;
    margin: 0;
    height: 0;
    min-height: 0;
  }

  &:hover {
    transform: scale(1.05) translateY(-10px);
  }

  &.active {
    transform: scale(1.1) translateY(-15px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.2);
  }
  
  &.active.expanded {
    transform: scale(1);
    box-shadow: none;
    flex: 1;
    height: 400px;
    width: auto;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 5rem;
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  &.active.expanded img {
    border-radius: 0;
    filter: brightness(1.1);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover img {
    filter: brightness(1.2);
  }

  &.active img {
    filter: brightness(1.3) saturate(1.1);
  }

  .plus-icon {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: black;
    transition: all 0.5s ease;
    transform: scale(0);
  }
  
  &.active.expanded .plus-icon {
    transform: scale(0);
    transition: all 0.3s ease;
  }

  &:hover .plus-icon {
    transform: scale(1);
  }

  &.active .plus-icon {
    transform: scale(1.2);
    background-color: white;
  }
  
  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(0);
  }
  
  &.active.expanded .close-icon {
    transform: scale(1);
    transition: all 0.3s ease;
  }
  
  &.active.expanded .close-icon:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
  }
`;

/* NEW: Mobile Service Item Component */
export const MobileServiceItem = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  padding: 1rem;

  &.last-item .mobile-title h2 {
    border-bottom: none;
  }
  
  &.last-item.active .mobile-title h2 {
    border-bottom: none;
  }
  
  &.last-item.expanded .mobile-title h2 {
    border-bottom: none;
  }
  
  &.expanded {
    margin-bottom: 2rem;
  }

  .mobile-title {
    background-color: transparent;
    padding: 0 0 0.8rem 0;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
    
    h2 {
      color: white;
      font-size: 1rem;
      font-weight: 300;
      margin: 0;
      border-bottom: 1px solid white;
      padding-bottom: 0.5rem;
      transition: all 0.3s ease;
    }
  }
  
  &.active .mobile-title {
    h2 {
      font-size: 1.1rem;
      font-weight: 400;
      border-bottom-color: white;
    }
  }
  
  &.expanded .mobile-title {
    margin-bottom: 1rem;
    
    h2 {
      font-size: 1.2rem;
      font-weight: 300;
      border-bottom: 2px solid white;
      padding-bottom: 0.8rem;
    }
  }

  .mobile-image-container {
    position: relative;
    border-radius: 0 3rem 0 0;
    overflow: hidden;
    height: 120px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: all 0.3s ease;
    }
    
    .plus-icon {
      position: absolute;
      bottom: 15px;
      right: 15px;
      width: 35px;
      height: 35px;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
      color: black;
      transition: all 0.2s ease;
      transform: scale(0.8);
    }
    
    .close-icon {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 35px;
      height: 35px;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
      transition: all 0.2s ease;
      transform: scale(0);
      z-index: 3;
    }
  }
  
  &.active .mobile-image-container {
    .plus-icon {
      transform: scale(1);
      background-color: white;
    }
    
    img {
      filter: brightness(1.1) saturate(1.1);
    }
  }
  
  &.expanded .mobile-image-container {
    height: 250px;
    border-radius: 15px;
    
    .plus-icon {
      transform: scale(0);
    }
    
    .close-icon {
      transform: scale(1);
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.9);
        color: black;
      }
    }
    
    img {
      filter: brightness(1.2);
    }
  }
`;