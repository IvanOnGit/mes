import { Container, StyledEugenia, StyledMantra, TextContainer } from "./styles";

function Eugenia() {

  return (
    <Container>
        <StyledEugenia src="/images/Eugenia.svg" alt="" />
        <StyledMantra src="/images/Mantra.svg" alt="" />
        <TextContainer>
          <h1>Estás a una decisión de transformar tu vida.</h1>
          <h2>¿EMPEZAMOS?</h2>
          <button>Solicitá Información</button>
        </TextContainer>
    </Container>
  );
}

export default Eugenia;