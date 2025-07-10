import FloatingDescription from "../FloatingDescription/FloatingDescription";
import FloatingSubtitle from "../FloatingSubtitle/FloatingSubtitle";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import RequestInformation from "../RequestInformation/RequestInformation";
import { Capsule, CapsulesContainer, Container, FirstContainer, TypesOfLecturesContainer, SecondContainer, TextContainer, ModalityContainer, IconsContainer } from "./styles";

function AstroConsulting() {
  return (
    <Container>
      <Navbar />
      <FloatingTitle title="CONSULTORÍA ASTROLÓGICA" />
      <FloatingDescription description="Que lo desconocido no controle tu Vida Descubre, elige y diseña tu Camino" />
      <FloatingSubtitle subtitle="· TU MAPA ENERGÉTICO ·" />
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
      <TypesOfLecturesContainer>
              <h2>TIPOS DE LECTURA</h2>
              <CapsulesContainer>
                <Capsule>
                  <h3>Carta Natal</h3>
                </Capsule>
                <Capsule>
                  <h3>Carta Dacrónica</h3>
                </Capsule>
                <Capsule>
                  <h3>Sinastría</h3>
                </Capsule>
                <Capsule>
                  <h3>Revolución Solar</h3>
                </Capsule>
                <Capsule>
                  <h3>Predicciones</h3>
                </Capsule>
                <Capsule>
                  <h3>Carta Vocacional</h3>
                </Capsule>
        </CapsulesContainer>
                <Capsule className="last">
                  <h3>Carta Astral - Eventos, Proyectos, Empresas, Momento</h3>
                </Capsule>
      </TypesOfLecturesContainer>
      <ModalityContainer>
              <h2>MODALIDADES</h2>
              <IconsContainer>
                <div>
                  <img src="/images/Icono 9.svg" alt="" />
                </div>
                <div>
                  <img src="/images/Icono 10.svg" alt="" />
                </div>
                <div>
                  <img src="/images/Icono 8.svg" alt="" />
                </div>
                <div>
                  <img src="/images/Icono 11.svg" alt="" />
                </div>
              </IconsContainer>
      </ModalityContainer>
      <RequestInformation title="¡Deja el Piloto Automático y Comanda tu Vida!"/>
    </Container>
  );
}

export default AstroConsulting;