import React from 'react';
import styled from 'styled-components';
import VioletButton from '../styles/buttons';
import { Card } from './Card';
import { ClasesHeader } from './ClasesHeader';

const listaClases = [
  {
    id: 1,
    nombre: 'Matemáticas',
    infoClase: 'Clase de matemáticas avanzadas',
  },
  {
    id: 2,
    nombre: 'Historia',
    infoClase: 'Clase de historia antigua',
  },
  {
    id: 3,
    nombre: 'Biología',
    infoClase: 'Clase de biología celular',
  },
  {
    id: 4,
    nombre: 'Inglés',
    infoClase: 'Clase de inglés intermedio',
  },
  {
    id: 5,
    nombre: 'Programación',
    infoClase: 'Clase de programación orientada a objetos',
  },
  {
    id: 6,
    nombre: 'Física',
    infoClase: 'Clase de física cuántica',
  },
  {
    id: 7,
    nombre: 'Literatura',
    infoClase: 'Clase de literatura contemporánea',
  },
  {
    id: 8,
    nombre: 'Química',
    infoClase: 'Clase de química orgánica',
  },
  {
    id: 9,
    nombre: 'Arte',
    infoClase: 'Clase de arte moderno',
  },
  {
    id: 10,
    nombre: 'Economía',
    infoClase: 'Clase de economía global',
  },
  {
    id: 11,
    nombre: 'Danza',
    infoClase: 'Clase de danza global',
  },
  {
    id: 12,
    nombre: 'Lorem',
    infoClase: 'Clase de Lorem',
  },
];
// console.log(listaClases);
export const ClasesCards = () => {
  return (
    <>
      <ClasesHeader />
      <GridContainer>
        <GridCards>
          {listaClases.map((clase) => (
            <Card clase={clase} />
          ))}
        </GridCards>
      </GridContainer>
    </>
  );
};

const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const GridContainer = styled.section`
  margin: 0 20%;
`;
