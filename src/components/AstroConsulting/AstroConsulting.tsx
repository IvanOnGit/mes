import FloatingDescription from "../FloatingDescription/FloatingDescription";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container, FirstContainer, SecondContainer, TextContainer } from "./styles";

function AstroConsulting() {
  return (
    <Container>
      <Navbar />
      <FloatingTitle title="CONSULTORÍA ASTROLÓGICA" />
      <FloatingDescription description="Que lo desconocido no controle tu Vida Descubre, elige y diseña tu Camino" />
      <Hero 
        image="/images/ASTROLOGÍA.jpg" 
      />
      <TextContainer>
        <FirstContainer>
          <img src="/images/InPeople.svg" alt="" />
          <div>
            <h2>EN LAS PERSONAS</h2>
            <span></span>
            <p>
              La carta astral es el mapa energético que sirve como guía y es la fuente de información disponible para autoconocerse
              ampliar la comprensión y tomar mejores decisiones.
            </p>
            <button>Ver más</button>
          </div>
        </FirstContainer>
        <SecondContainer>
          <img src="/images/InBusiness.svg" alt="" />
          <div>
            <h2>EN LAS EMPRESAS</h2>
            <span></span>
            <p>La Astrología en las organizaciones es una herramienta potente que brinda soluciones inmediatas, especialmente en las relaciones y en el desarrollo de talentos.</p>
            <button>Ver más</button>
          </div>
        </SecondContainer>
      </TextContainer>
    </Container>
  );
}

export default AstroConsulting;