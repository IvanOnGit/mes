import { Container } from "./styles";

function MoreInfo() {
  return (
    <Container>
      <div className="Row">
        <h2>VIDA PLENA + IMPACTO<br />en todos los ámbitos.</h2>
        <h2>¡Acelera Tu Cambio <br /><strong>Empieza a Vivir Tu Meta!</strong></h2>
      </div>

      <div className="Row">
        <h3><strong>LÍDERES QUE TRASCIENDEN.</strong></h3>
        <button
          onClick={() => {
            document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Quiero mi Cambio
        </button>
      </div>
    </Container>
  );
}

export default MoreInfo;
