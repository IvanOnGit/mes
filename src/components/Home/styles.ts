import styled from 'styled-components';

export const Container = styled.div`
margin: 0;
padding: 1rem;
background-color: black;
display: flex;
align-items: center;
height: 44rem;

overflow: auto;

  /* Oculta scrollbar en Webkit (Chrome, Safari) */
&::-webkit-scrollbar {
    display: none;
  }

  /* Oculta scrollbar en Firefox */
scrollbar-width: none;

  /* Oculta scrollbar en Edge/IE (no siempre necesario) */
-ms-overflow-style: none;
`;