import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const TextContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 background-color: white;
 height: 20rem;
 gap: 2rem;
 padding: 1rem;
 overflow: hidden;

 img {
  width: 26rem;
  height: 15rem;
 }

 h2 {
  margin: 0;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  font-size: 1rem;
  border-bottom: 3px solid black;
 }

 p {
  margin-bottom: 1rem;
  font-size: 0.8rem;
  width: 20rem;
 }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 1rem;

    p {
      text-align: justify;
    }

    img {
      width: 20.2rem;
    }
  }
`;

export const StagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1A1A1A;
  height: 20rem; // ✅ Mantener para desktop
  gap: 2rem;
  overflow: hidden;

  h2 {
    color: white;
    font-size: 3rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    height: auto; // ✅ Mobile necesita crecer
    padding: 2rem 0;
  }
`;

export const CapsulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; // ✅ Horizontal por defecto (desktop)
  flex-wrap: nowrap;
  overflow: visible;

  span {
    width: 2rem;
    height: 1px;
    background-color: white;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column; // ✅ Vertical para mobile
    gap: 0; // ✅ Eliminar espacio para que los spans toquen las cápsulas

    span {
      width: 1px;
      height: 1rem;
      margin: 0;
    }
  }
`;


export const Capsule = styled.div`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 2rem;
  width: 17rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-size: 1rem;
  }

  p {
    color: white;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
  }
`;