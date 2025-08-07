import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, ContainerLinks, Logo, HamburgerMenu, HamburgerLine, MobileMenu } from "./styles";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Logo src="/images/Logo.svg" alt="" />
      
      {/* Desktop Menu */}
      <ContainerLinks>
        <a>Inicio</a>
        <a>Servicios</a>
        <Link to={'/sobre-mi'}>Sobre Mi</Link>
        <a>Contacto</a>
      </ContainerLinks>

      {/* Hamburger Menu Button */}
      <HamburgerMenu onClick={toggleMenu} $isOpen={isMenuOpen}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerMenu>

      {/* Mobile Menu */}
      <MobileMenu $isOpen={isMenuOpen}>
        <a onClick={() => setIsMenuOpen(false)}>Inicio</a>
        <a onClick={() => setIsMenuOpen(false)}>Servicios</a>
        <Link to={'/sobre-mi'} onClick={() => setIsMenuOpen(false)}>Sobre Mi</Link>
        <a onClick={() => setIsMenuOpen(false)}>Contacto</a>
      </MobileMenu>
    </Container>
  );
}

export default Navbar;