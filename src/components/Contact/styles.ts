import styled from "styled-components";

// Estilos existentes del Container, LeftSide y RightSide...

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
  width: 100%;
  gap: 10rem;

  span {
    width: 1px;
    height: 25rem;
    background-color: white;
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    height: 40rem;
    padding: 1rem;
    width: 80%;
    span {
      display: none;
    }
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;

  h1 {
    color: white;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  .button-container {
    display: flex;
    gap: 1rem;

    p {
      color: white;
      font-size: 1.5rem;
      margin: 0;
      padding: 0;
    }

    button {
      color: white;
      background-color: transparent;
      border: 1px solid white;
      padding: 1rem;
      display: flex;
      align-self: center;
      align-items: center;
      height: 1rem;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    input, textarea {
      background-color: #1a1a1a;
      color: white !important; // Fuerza el color
      border: none;
      border-bottom: 4px solid white;
      padding: 0.8rem;
      font-size: 1rem;
      resize: none;
      outline: none;
      
      // Estilos adicionales para asegurar el color
      &::placeholder {
        color: #888 !important;
      }
      
      // Para prevenir estilos de autocomplete
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #1a1a1a inset !important;
        -webkit-text-fill-color: white !important;
      }
    }

    textarea {
      height: 120px;
    }

    button {
      background-color: white;
      color: black;
      border: none;
      padding: 0.8rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #ddd;
      }
    }
  }
`;

// Opción 2: Alternativa usando CSS más específico
export const RightSideAlternative = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    input, textarea {
      background-color: #1a1a1a !important;
      color: white !important;
      border: none;
      border-bottom: 4px solid white;
      padding: 0.8rem;
      font-size: 1rem;
      resize: none;
      outline: none;
      font-family: inherit !important;
      
      &::placeholder {
        color: rgba(255, 255, 255, 0.5) !important;
        opacity: 1 !important;
      }
      
      &:focus {
        color: white !important;
      }
      
      // Estilos específicos para diferentes navegadores
      &:-moz-placeholder { color: rgba(255, 255, 255, 0.5) !important; }
      &::-moz-placeholder { color: rgba(255, 255, 255, 0.5) !important; }
      &:-ms-input-placeholder { color: rgba(255, 255, 255, 0.5) !important; }
      &::-webkit-input-placeholder { color: rgba(255, 255, 255, 0.5) !important; }
    }

    // Si quieres un color diferente (ejemplo: rojo)
    input.red-text, textarea.red-text {
      color: red !important;
      
      &:-webkit-autofill {
        -webkit-text-fill-color: red !important;
      }
    }

    textarea {
      height: 120px;
    }

    button {
      background-color: white;
      color: black;
      border: none;
      padding: 0.8rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #ddd;
      }
    }
  }
`;

// Nuevos estilos para el modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
  padding: 1rem; // Espacio en mobile

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 32px;
  min-width: 400px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: slideIn 0.3s ease-out;
  text-align: center;

  @media (max-width: 768px) {
    min-width: unset;
    max-width: unset;
    margin: 1rem; // Espacio adicional en mobile
    padding: 24px;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  margin-bottom: 16px;
`;

export const SuccessIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #dcfce7;
  color: #16a34a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 28px;
  }
`;

export const ErrorIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #fef2f2;
  color: #dc2626;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 28px;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ModalMessage = styled.p`
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const ModalButton = styled.button<{ $type: 'success' | 'error' }>`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 120px;
  background-color: ${props => props.$type === 'success' ? '#10b981' : '#ef4444'};

  &:hover {
    background-color: ${props => props.$type === 'success' ? '#059669' : '#dc2626'};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
    min-width: 100px;
  }
`;