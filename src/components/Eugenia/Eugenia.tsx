import { Container, StyledEugenia, StyledMantra, TextContainer } from "./styles";

function Eugenia() {

  return (
    <Container>
        <StyledEugenia src="/images/Eugenia.png" alt="" />
        <StyledMantra src="/images/Mantra.svg" alt="" />
        <TextContainer>
          <h2>El valor de lo <strong>auténtico</strong>, inspira.</h2>
          <div>
            <h2>Tenés el <strong>poder de elegir.</strong></h2>
            <h2>Descubrí tu forma.</h2>
          </div>
          <h2>La vida es ahora!</h2>
          <button onClick={() => {document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}}>TE ACOMPAÑO</button>
        </TextContainer>
    </Container>
  );
}

export default Eugenia;