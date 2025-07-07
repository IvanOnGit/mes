import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container } from "./styles";

function AstroConsulting() {
  return (
    <Container>
      <Navbar />
      <FloatingTitle title="CONSULTORÍA ASTROLÓGICA"/>
      <Hero 
        image="/images/ASTROLOGÍA.jpg" 
      />
    </Container>
  );
}

export default AstroConsulting;