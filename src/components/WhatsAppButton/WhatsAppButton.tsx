import { FloatingButton } from "./styles";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Reemplaza este número con el número de WhatsApp de tu negocio
    const phoneNumber = "5491234567890"; // Formato: código de país + número sin espacios
    const message = "Hola, me gustaría obtener más información"; // Mensaje opcional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <FloatingButton onClick={handleClick} aria-label="Contactar por WhatsApp">
      <img src="/images/whatsapp-icon.svg" alt="WhatsApp" />
    </FloatingButton>
  );
};

export default WhatsAppButton;