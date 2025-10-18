import FloatingTitle from "../FloatingTitle/FloatingTitle";
import FloatingDescription from "../FloatingDescription/FloatingDescription";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Capsule, CapsulesContainer, Container, ModalityContainer, TextContainer, ContentWrapper, TagsContainer, Tag, ImagesContainer } from "./styles";
import FloatingSubtitle from "../FloatingSubtitle/FloatingSubtitle";
import RequestInformation from "../RequestInformation/RequestInformation";
import Contact from "../Contact/Contact";

function Bio() {
  return (
    <Container>
      <Navbar />
      <FloatingTitle title="CONSULTORÍA EN BIOTRASCENDENCIA®" />
      <FloatingDescription description="Lideres que elijen una Vida Plena con Impacto" />
      <FloatingSubtitle subtitle="PRESENCIA · CONSCIENCIA · SENTIDO " />
      <Hero 
        image="/images/BIOTRASCENDENCIA.jpg" 
      />
      <TextContainer>
        <ContentWrapper>
          <div className="text-section">
            <h2>Facilitar la Evolución Consciente</h2>
            <p><strong>Biotrascendencia</strong> es un enfoque cuyo propósito es facilitar la <strong>evolución consciente</strong>, con el objetivo de alcanzar una <strong>vida plena</strong>, trascendiendo las limitaciones de lo conocido.</p>
            <p>El <strong>proceso de transformación personal y profesional</strong> logra que las personas se <strong>conecten con su esencia, su propósito</strong> y desarrollen la capacidad de <strong>liderazgo con sentido.</strong></p>

            <p>Además de fomentar un cambio profundo en uno mismo, este enfoque tiene un <strong>impacto directo</strong> en el entorno socioambiental, ya que permite generar un <strong>efecto positivo y regenerativo</strong> en el mundo, contribuyendo a la <strong>creación de un ecosistema virtuoso.</strong></p>
            <p className="italic-text">Descubre el revolucionario enfoque de Impacto 5.</p>
            <TagsContainer>
              <Tag>Económico</Tag>
              <Tag>Social</Tag>
              <Tag>Medioambiental</Tag>
              <Tag>Espiritual</Tag>
              <Tag>Emergente</Tag>
            </TagsContainer>
          </div>
          <ImagesContainer>
            <img src="/images/Evolution.svg" alt="Evolution" className="evolution-img" />
            <img src="/images/FiveImpacts.svg" alt="Evolution" className="evolution-img" />
          </ImagesContainer>
        </ContentWrapper>
      </TextContainer>
      <ModalityContainer>
        <h2>MODALIDADES</h2>
        <CapsulesContainer>
          <Capsule>
            <h3>Procesos Cortos</h3>
            <p>(3 Meses)</p>
          </Capsule>
          <span></span>
          <Capsule>
            <h3>Procesos Mediano Plazo</h3>
            <p>(Por Requerimiento)</p>
          </Capsule>
          <span></span>
          <Capsule>
            <h3>Procesos De <br />Transformación Conductual</h3>
          </Capsule>
        </CapsulesContainer>
      </ModalityContainer>
      <RequestInformation title="¡Que tu paso deje huellas, transfórmate en un Lider de impacto!" />
      <Contact />
    </Container>
  );
}

export default Bio;