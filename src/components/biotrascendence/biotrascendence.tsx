import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container } from "./styles";

function Biotrascendence() {
  return (
    <Container>
      <Navbar />
      <FloatingTitle title="CONSULTORÍA EN BIOTRASCENDENCIA®" />
      <Hero 
        image="/images/BIOTRASCENDENCIA.jpg" 
      />
    </Container>
  );
}

export default Biotrascendence;