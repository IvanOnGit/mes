import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container, ContainerLinks, Logo, HamburgerMenu, HamburgerLine, MobileMenu } from "./styles";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleServiciosClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      // Si no estamos en la página inicial, navegar primero
      navigate('/');
      // Esperar a que la navegación complete y luego hacer scroll
      setTimeout(() => {
        document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Si ya estamos en la página inicial, solo hacer scroll
      document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <Logo src="/images/Logo.svg" alt="" />
      
      {/* Desktop Menu */}
      <ContainerLinks>
        <Link to={'/'}>Inicio</Link>
        <a href="#servicios" onClick={handleServiciosClick}>Servicios</a>
        <Link to={'/sobre-mi'}>Sobre Mí</Link>
        <a href="#contacto" onClick={handleContactoClick}>Contacto</a>
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
        <a href="#servicios" onClick={handleServiciosClick}>Servicios</a>
        <Link to={'/sobre-mi'} onClick={() => setIsMenuOpen(false)}>Sobre Mi</Link>
        <a href="#contacto" onClick={handleContactoClick}>Contacto</a>
      </MobileMenu>
    </Container>
  );
}

export default Navbar;