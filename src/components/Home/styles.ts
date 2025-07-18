import styled from 'styled-components';

export const Container = styled.div`
margin: 0;
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
height: auto;

overflow: hidden;

  /* Oculta scrollbar en Webkit (Chrome, Safari) */
&::-webkit-scrollbar {
    display: none;
  }

  /* Oculta scrollbar en Firefox */
scrollbar-width: none;

  /* Oculta scrollbar en Edge/IE (no siempre necesario) */
-ms-overflow-style: none;
`;