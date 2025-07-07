import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container } from "./styles";

function TalentActivationSystem() {
  return (
    <Container>
      <Navbar />
      <FloatingTitle title="TALENT ACTIVATION SYSTEM®" />
      <Hero 
        image="/images/TAS.jpg" 
      />
    </Container>
  );
}

export default TalentActivationSystem;