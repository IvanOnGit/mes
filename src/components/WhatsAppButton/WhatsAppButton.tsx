import { FloatingButton } from "./styles";

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = "5491164141177"; // Formato: código de país + número sin espacios ni guiones
    const message = "Hola, me gustaría obtener más información"; // Mensaje opcional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <FloatingButton onClick={handleClick} aria-label="Contactar por WhatsApp">
      <img src="/images/whatsapp-icon.png" alt="WhatsApp" />
    </FloatingButton>
  );
};

export default WhatsAppButton;