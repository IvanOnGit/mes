import { Container, LeftSide, RightSide } from "./styles";

function Contact() {

  return (
    <Container>
      <LeftSide>
        <h1>Estás a una decisión de transformar tu vida.</h1>
        <div className="button-container">
            <p><strong>¿EMPEZAMOS?</strong></p>
            <button>Contacto</button>
        </div>
      </LeftSide>
      <span></span>
      <RightSide>
         <form>
            <input type="text" placeholder="Nombre y Apellido" />
            <input type="tel" placeholder="Celular" />
            <input type="email" placeholder="Correo" />
            <textarea placeholder="¿Cómo te ayudo?" />
            <button type="submit">ENVIAR</button>
        </form>
      </RightSide>
    </Container>
  );
}

export default Contact;