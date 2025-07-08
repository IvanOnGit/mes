import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 10rem;
    margin-right: 60rem;
    gap: 0.5rem;

    h1 {
        color: white;
        font-size: 1.5rem;
        font-weight: 200;
        margin-bottom: 2rem;
        width: 20rem;
        z-index: 999;
        margin: 0;
        padding: 0;
    }

    span {
        width: 2.5rem;
        height: 5px;
        background-color: white;
        z-index: 999;
    }
`;