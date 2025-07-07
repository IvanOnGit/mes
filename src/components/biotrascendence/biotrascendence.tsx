import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container, TextContainer } from "./styles";

function Biotrascendence() {
  return (
    <Container>
      <Navbar />
      <FloatingTitle title="CONSULTORÍA EN BIOTRASCENDENCIA®" />
      <Hero 
        image="/images/BIOTRASCENDENCIA.jpg" 
      />
      <TextContainer>
        <img src="/images/Evolution.svg" alt="" />
        <div>
          <h2>Facilitar la Evolución Consciente</h2>
          <p><strong>Biotrascendencia</strong> es un enfoque cuyo propósito es facilitar la <strong>evolución consciente</strong>, con el objetivo de alcanzar una <strong>vida plena</strong>, trascendiendo las limitaciones de lo conocido.</p>
          <p>El <strong>proceso de transformación personal y profesional</strong> logra que las personas se <strong>conecten con su escencia, su propósito</strong> y desarrollen la capacidad de <strong>liderazgo con sentido.</strong></p>
        </div>
        <div>
          <p>La consultoría le brinda a los Líderes las <strong>herramientas necesarias para alcanzar sus metas profesionales</strong> y prosperar en entornos complejos, dinámicos y cambiantes.</p>
          <p>Adempas de fomentar un cambio profundo en uno mismo, este enfoque tiene un <strong>impacto directo</strong> en el entorno socioambiental, ya que permite generar un <strong>efecto positivo y regenerativo</strong> en el mundo, contribuyendo a la <strong>creación de un ecosistema virtuoso.</strong></p>
        </div>
        <img src="/images/Fiveimpacts.png" alt="" />
      </TextContainer>
    </Container>
  );
}

export default Biotrascendence;