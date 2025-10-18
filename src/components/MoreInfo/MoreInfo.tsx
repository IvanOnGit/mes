import { Container, MandalaImage } from "./styles";

function MoreInfo() {

  return (
    <Container>
        <MandalaImage src="/images/Mandala.svg" alt="Mandala" />
        <div className='Subcontainer'>
            <h2>VIDA PLENA + IMPACTO<br /> en todos los ámbitos. <br /><strong>LÍDERES QUE TRASCIENDEN.</strong></h2>
        </div>
        <span></span>
        <div className='Subcontainer'>
            <h2>¡Acelera Tu Cambio <br />Empieza a Vivir Tu Meta!</h2>
            <button
            onClick={() => {
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Más Información
          </button>
        </div>
    </Container>
  );
}

export default MoreInfo;