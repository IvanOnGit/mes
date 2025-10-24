import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media (min-width: 1025px) {
    gap: 40rem;
    padding: 0;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const Logo = styled.img`
  width: 21rem;

  @media (max-width: 1024px) {
    width: 15rem;
  }

  @media (min-width: 1025px) {
    margin-left: 6.81rem;
  }

  @media (max-width: 768px) {
    width: 17.5rem;
    font-weight: bolder;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  gap: 3rem;
  width: 30rem;

  a, 
  a[href] {
    color: white;
    text-decoration: none;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) {
    margin-right: 1rem;
  }
`;

export const HamburgerMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;

  @media (max-width: 1024px) {
    display: flex;
  }

  /* Animation for hamburger to X transformation */
  ${({ $isOpen }) => $isOpen && `
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  `}
`;

export const HamburgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: 0.3s;
  transform-origin: center;
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  z-index: 1000;
  transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1024px) {
    display: flex;
  }

  a,
  a[href] {
    color: white;
    text-decoration: none;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem;
    
    &:hover {
      color: #ccc;
    }
  }
`;