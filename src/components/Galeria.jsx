import React from 'react';
import { GaleriaCard } from './GaleriaCard';
import styled from 'styled-components';
import VioletButton from '../styles/buttons';

export const Galeria = () => {
  return (
    <ContainerGaleria>
      <ContainerTitle>
        <h2>Galería</h2>
        <HeroH1>Bailemos</HeroH1>
      </ContainerTitle>
      <GridGaleria>
        <GaleriaCard />
        <GaleriaCard />
        <GaleriaCard />
        <GaleriaCard />
        <GaleriaCard />
        <GaleriaCard />
      </GridGaleria>
      <VioletButton>Ver Más</VioletButton>
    </ContainerGaleria>
  );
};

const ContainerTitle = styled.div``;

const ContainerGaleria = styled.section`
  margin: 10% 5%;
  text-align: center;
`;

const HeroH1 = styled.h1`
  font-size: 53px;
  color: #f8d906;
  padding-left: 20%;
  margin: 0;
`;

const GridGaleria = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 20px;
  padding: 5% 0;
`;
