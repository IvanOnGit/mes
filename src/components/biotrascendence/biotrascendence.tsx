import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container } from "./styles";

function Biotrascendence() {
  return (
    <Container>
      <Navbar />
      <Hero 
        image="/images/BIOTRASCENDENCIA.jpg" 
      />
    </Container>
  );
}

export default Biotrascendence;