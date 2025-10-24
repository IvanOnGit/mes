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
        <Link to={'/'}>Inicio</Link>
        <a href="#servicios">Servicios</a>
        <Link to={'/sobre-mi'}>Sobre Mí</Link>
        <a href="#contacto">Contacto</a>
      </ContainerLinks>

      {/* Hamburger Menu Button */}
      <HamburgerMenu onClick={toggleMenu} $isOpen={isMenuOpen}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerMenu>

      {/* Mobile Menu */}
      <MobileMenu $isOpen={isMenuOpen}>
        <Link to={'/'} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
        <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
        <Link to={'/sobre-mi'} onClick={() => setIsMenuOpen(false)}>Sobre Mi</Link>
        <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
      </MobileMenu>
    </Container>
  );
}

export default Navbar;