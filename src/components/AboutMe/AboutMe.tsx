import Eugenia from "../Eugenia/Eugenia";
import Navbar from "../Navbar/Navbar";
import { AboutMeContainer, Container } from "./styles";

function AboutMe() {

  return (
    <Container>
        <Navbar />
        <Eugenia />
        <AboutMeContainer>
          <h1>Sobre mi</h1>
        </AboutMeContainer>
    </Container>
  );
}

export default AboutMe;