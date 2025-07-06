import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container } from "./styles";

function ProfessionalTraining() {
  return (
    <Container>
      <Navbar />
      <Hero 
        image="/images/PROFESSIONAL TRAINING.jpg" 
      />
    </Container>
  );
}

export default ProfessionalTraining;