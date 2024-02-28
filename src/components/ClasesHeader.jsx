import React from 'react';
import VioletButton from '../styles/buttons';
import styled from 'styled-components';

export const ClasesHeader = () => {
  return (
    <ContainerHeader>
      <div>
        <h2>Nuestras Clases</h2>
        <HeroH1>Elige tu estilo de baile</HeroH1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          voluptates similique officia non quibusdam beatae.
        </p>
      </div>
      <div>
        <VioletButton>Ver todas las clases</VioletButton>
      </div>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 2% 5%;
`;

const HeroH1 = styled.h1`
  font-size: 53px;
  text-align: left;
  color: #f8d906;
  padding-left: 5%;
  margin: 0;
`;
