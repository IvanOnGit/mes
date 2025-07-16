import { Link } from "react-router-dom";
import { Container, ContainerLinks, Logo } from "./styles";

function Navbar() {

  return (
    <Container>
      <Logo src="/images/Logo.svg" alt="" />
      <ContainerLinks>
        <a>Inicio</a>
        <a>Servicios</a>
        <Link to={'/sobre-mi'}>
        <a>Sobre Mi</a>
        </Link>
        <a>Contacto</a>
      </ContainerLinks>
    </Container>
  );
}

export default Navbar;