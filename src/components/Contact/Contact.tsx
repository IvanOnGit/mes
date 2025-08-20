import { useState } from "react";
import { Container, LeftSide, RightSide } from "./styles";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      alert(data.message || "Gracias por tu mensaje. Nos ponemos en contacto a la brevedad.");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el mensaje ❌");
    }
  };

  return (
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
  );
}

export default Contact;
