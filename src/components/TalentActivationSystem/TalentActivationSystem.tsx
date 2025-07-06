import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container } from "./styles";

function TalentActivationSystem() {
  return (
    <Container>
      <Navbar />
      <Hero 
        image="/images/TAS.jpg" 
      />
    </Container>
  );
}

export default TalentActivationSystem;