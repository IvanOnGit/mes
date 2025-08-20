import { useState } from "react";
import { Container, LeftSide, RightSide, ModalOverlay, ModalContent, ModalHeader, IconContainer, SuccessIcon, ErrorIcon, ModalTitle, ModalMessage, ModalButton } from "./styles";

// Componente Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: 'success' | 'error';
}

const Modal = ({ isOpen, onClose, title, message, type }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <IconContainer>
            {type === 'success' ? (
              <SuccessIcon>✓</SuccessIcon>
            ) : (
              <ErrorIcon>✕</ErrorIcon>
            )}
          </IconContainer>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalMessage>{message}</ModalMessage>
        <ModalButton 
          onClick={onClose}
          $type={type}
        >
          Cerrar
        </ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
};

// Los estilos ahora están en styles.ts

// Agregar estilos de animación (puedes agregar esto a tu CSS global)
const globalStyles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'success' as 'success' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showModal = (title: string, message: string, type: 'success' | 'error') => {
    setModal({
      isOpen: true,
      title,
      message,
      type
    });
  };

  const closeModal = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
    
    // Si el envío fue exitoso, limpiar el formulario
    if (modal.type === 'success') {
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://mes-backend-it48.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      showModal(
        '¡Mensaje enviado!',
        data.message || "Gracias por tu mensaje. Nos ponemos en contacto a la brevedad.",
        'success'
      );
      
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      showModal(
        'Error al enviar',
        'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
        'error'
      );
    }
  };

  return (
    <>
      <style>{globalStyles}</style>
      <Container id="contacto">
        <LeftSide>
          <h1>Estás a una decisión de transformar tu vida.</h1>
          <div className="button-container">
            <p><strong>¿EMPEZAMOS?</strong></p>
            <button>Contacto</button>
          </div>
        </LeftSide>
        <span></span>
        <RightSide>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y Apellido"
              value={formData.nombre}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Celular"
              value={formData.telefono}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="mensaje"
              placeholder="¿Cómo te ayudo?"
              value={formData.mensaje}
              onChange={handleChange}
            />
            <button type="submit">ENVIAR</button>
          </form>
        </RightSide>
      </Container>

      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </>
  );
}

export default Contact;