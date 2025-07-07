import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Container } from "./styles";

function SystemicConsulting() {
  return (
    <Container>
      <Navbar />
      <FloatingTitle title="CONSULTORÍA SISTÉMICA"/>
      <Hero 
        image="/images/CONSULTORÍA SISTÉMICA.jpg" 
      />
    </Container>
  );
}

export default SystemicConsulting;