import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container } from "./styles";

function SystemicConsulting() {
  return (
    <Container>
      <Navbar />
      <Hero 
        image="/images/CONSULTORÍA SISTÉMICA.jpg" 
      />
    </Container>
  );
}

export default SystemicConsulting;