import Contact from "../Contact/Contact";
import FloatingDescription from "../FloatingDescription/FloatingDescription";
import FloatingSubtitle from "../FloatingSubtitle/FloatingSubtitle";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import DynamicImages from "../ImagesContainer/ImagesContainer";
import Navbar from "../Navbar/Navbar";
import RequestInformation from "../RequestInformation/RequestInformation";
import { Container, IconsContainer, ModalityContainer, Paragraph, TextContainer } from "./styles";

const myImages = [
    "/images/Systemic 1.svg",
    "/images/Systemic 2.svg",
    "/images/Systemic 3.svg",
    "/images/Systemic 4.svg",
  ];

function SystemicConsulting() {
  return (
    <Container>
      <Navbar />
      <FloatingTitle title="CONSULTORÍA SISTÉMICA" />
      <FloatingDescription description="El Poder de ocupar tu lugar para avanzar en la vida" />
      <FloatingSubtitle subtitle="· RESIGNIFICAR Y AVANZAR ·" />
      <Hero 
        image="/images/CONSULTORÍA SISTÉMICA.jpg" 
      />
      <TextContainer>
              <img src="/images/Teamwork.svg" alt="" />
              <div>
                <h2>Poderosa Herramienta De Impacto</h2>
                <p>Este enfoque permite comprender y analizar los fenómenos dentro de los sistemas, observando las interacciones entre sus partes, y llevar a cabo <strong>intervenciones que generen los cambios</strong> necesarios, <strong>orientados al progreso y al bienestar.</strong></p>
                <p>Cada persona está interconectada con los demás miembros de los sistemas a los que pertenece, y estas relaciones operan mas allá de su voluntad o conocimiento, influyendo profundamente en su comportamiento y experiencia.</p>
              </div>
              <div>
                <p><strong>Bart Hellinger, creador de las Constelaciones Familiares, descubrió las leyes universales que rigen la vida.</strong> Los principios escenciales para el progreso se basan en el orden, el equilibrio y la integración, y afectan a todos los ámbitos del ser, incluyendo la salud física, mental, emocional y espiritual.</p>
                <p><strong>La filosofia sistémica facilita el flujo de la energía vital, la prosperidad y la mejora continua en todos los aspectos de la vida de las personas y de las organizaciones</strong></p>
              </div>
              <div>
                <Paragraph>Es una <strong>poderosa herramienta</strong> de impacto para la <strong>transformación, reparación y alivio</strong> de cualquier dificultad o síntoma en lo personal y en lo profesional. También es un valioso aporte para ampliar la mirada, la <strong>toma de decisiones y la evaluación de escenarios futuros.</strong></Paragraph>
                <button>Solicitá Información</button>
              </div>
      </TextContainer>
      <ModalityContainer>
        <h2>MODALIDADES</h2>
        <IconsContainer>
          <div>
            <img src="/images/Icono 1.svg" alt="" />
          </div>
          <div>
            <img src="/images/Icono 2.svg" alt="" />
          </div>
          <div>
            <img src="/images/Icono 3.svg" alt="" />
          </div>
          <div>
            <img src="/images/Icono 4.svg" alt="" />
          </div>
          <div>
            <img src="/images/Icono 5.svg" alt="" />
          </div>
          <div>
            <img src="/images/Icono 6.svg" alt="" />
          </div>
          <div>
            <img src="/images/Icono 7.svg" alt="" />
          </div>
        </IconsContainer>
      </ModalityContainer>
      <RequestInformation title="¡El Cambio Empieza en Vos!" />
      <DynamicImages images={myImages} />
      <Contact />
    </Container>
  );
}

export default SystemicConsulting;