import { Container, ContainerLinks, Logo } from "./styles";

function Navbar() {

  return (
    <Container>
      <Logo src="/images/Logo.svg" alt="" />
      <ContainerLinks>
        <a>Inicio</a>
        <a>Servicios</a>
        <a>Sobre Mi</a>
        <a>Contacto</a>
      </ContainerLinks>
    </Container>
  );
}

export default Navbar;