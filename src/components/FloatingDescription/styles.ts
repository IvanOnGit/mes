import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: absolute;
    margin-top: 25rem;
    margin-left: 48rem;

    p {
        color: white;
        font-size: 2rem;
        font-weight: 200;
        margin-bottom: 2rem;
        width: 13.7rem;
        z-index: 999;
        margin: 0;
        padding: 0;
        font-family: 'Oooh Baby', cursive;
    }

    @media (max-width: 768px) {
        margin-top: 22rem;
        margin-left: 14rem;

        p {
            font-size: 1.5rem;
            width: 10rem;
        }
    }
`;