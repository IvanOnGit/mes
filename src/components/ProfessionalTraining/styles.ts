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

  h2 {
    margin: 0;
    padding-bottom: 0.5rem;
    font-size: 1rem;
    border-bottom: 3px solid black;
  }

  p {
    margin-bottom: 1rem;
    font-size: 0.8rem;
    width: 20rem;
  }

  button {
    font-size: 1rem;
    color: white;
    background-color: black;
    padding: 0.5rem;
    margin-left: 10rem;
    margin-top: 1rem;
    margin-bottom: 3.5rem;
  }
`;

export const Paragraph = styled.p`
  border-bottom: 1px solid black;
  padding-bottom: 2rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ModalityContainer = styled.div<{ expanded?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1A1A1A;
  min-height: 20rem;
  height: ${props => props.expanded ? 'auto' : '20rem'};
  gap: 2rem;
  padding-bottom: ${props => props.expanded ? '3rem' : '0'};
  transition: all 0.4s ease-in-out;

  h2 {
    color: white;
    font-size: 3rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
  }
`;

export const ExpandableCapsulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CapsulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0;

  span {
    width: 2rem;
    height: 1px;
    background-color: white;
    margin-top: 1.5rem;
  }
`;

export const Capsule = styled.div<{ expanded?: boolean }>`
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
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  }

  ${props => props.expanded && `
    border-radius: 2rem 2rem 1rem 1rem;
    min-height: 8rem;
  `}

  h3 {
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-size: 1rem;
    width: 13.5rem;
    transition: all 0.3s ease;
    
    ${props => props.expanded && `
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    `}
  }
`;

export const CapsuleContent = styled.div<{ expanded: boolean }>`
  max-height: ${props => props.expanded ? '200px' : '0'};
  opacity: ${props => props.expanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  width: 100%;

  p {
    color: white;
    font-size: 0.75rem;
    margin: 0;
    padding: ${props => props.expanded ? '1rem 0.5rem 0.5rem' : '0'};
    line-height: 1.4;
    text-align: justify;
    transition: padding 0.4s ease-in-out;
  }
`;

export const FormativeSeminars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 30rem;
  background-color: white;
  gap: 2rem;

  h2 {
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  h3 {
    color: black;
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
    border: 1px solid black;
    padding: 0.7rem;
    border-radius: 1.5rem;
  }

  button {
    position: absolute;
    margin-left: 1rem;
    margin-top: 1rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 50%;
    padding: 0.2rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
`;

export const Seminars = styled.div`
  display: flex;
  gap: 2rem;
`;

export const IndividualSeminar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  h4 {
    margin: 0;
    padding: 1rem;
    font-size: 1.3rem;
    width: auto;
    max-width: 10rem;
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    display: flex;
    align-self: flex-start;
    text-align: right;
  }

  span {
    width: 3rem;
    height: 6px;
    background-color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }
`;