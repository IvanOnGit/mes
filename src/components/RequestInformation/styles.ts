import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/images/Textura fondo.svg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 18rem;
    gap: 1rem;

    h1 {
        color: white;
        font-size: 2rem;
        font-weight: 200;
        margin: 0;
        padding: 0;
    }

    h2 {
        color: white;
        font-size: 1.5rem;
        font-weight: 200;
        margin: 0;
        padding: 0;
    }

    button {
        font-size: 1rem;
        padding: 0.5rem;
        border: none;
        cursor: pointer;
    }
`;