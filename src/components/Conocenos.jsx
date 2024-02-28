import React from 'react';
import yellowHodie from '../assets/web-assets/hero_img@2x.png';
import styled from 'styled-components';

export const Conocenos = () => {
  return (
    <Container>
      <div>
        <img src={yellowHodie} alt='' />
      </div>
      <ContainerTexto>
        <h2>Bailemos</h2>
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          excepturi aspernatur velit. Explicabo libero eum magnam ea dolores eos
          rerum ad sit, molestiae, obcaecati temporibus omnis consectetur quae
          numquam tempora.
        </p>
        <button>Saber más...</button>
      </ContainerTexto>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  justify-content: center;
  gap: 5%;
`;
const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  button {
    align-self: center;
    width: 20%;
  }
`;
