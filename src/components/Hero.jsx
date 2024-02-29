import React from 'react';
import yellowHodie from '../assets/web-assets/hero_img@2x.png';
import styled from 'styled-components';
import VioletButton from '../styles/buttons';

export const Hero = () => {
  return (
    <Container>
      <ContainerTexto>
        <HeroH1>Lorem ipsum dolor sit amet.</HeroH1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          facere aliquid quae et dolor at dolores ea natus odit tempore.
        </p>
        <VioletButton>Inscribete</VioletButton>
      </ContainerTexto>
      <ContainerImg>
        <img src={yellowHodie} alt='' />
      </ContainerImg>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  button {
    align-self: center;
    text-transform: uppercase;
  }
`;

const ContainerImg = styled.div`
  width: 50%;
  text-align: right;
  img {
    height: auto;
    width: 80%;
  }
`;

const HeroH1 = styled.h1`
  font-size: 53px;
  text-align: left;
  color: #f8d906;
  margin: 0;
`;
