import { Container } from "./styles";

function Navbar() {

  return (
    <Container>
        <div className='Subcontainer'>
            <h2>VIVE ESTA EXPERIENCIA ALCANZA OTRO NIVEL DE <strong>EVOLUCIÓN</strong></h2>
        </div>
        <span></span>
        <div className='Subcontainer'>
            <h2>Consultorías <br /> <strong>Vida Plena + Impacto</strong></h2>
            <button>Más Información</button>
        </div>
    </Container>
  );
}

export default Navbar;