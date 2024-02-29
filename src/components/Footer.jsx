import React from 'react';
import styled from 'styled-components';
import violetaLogo from '../assets/web-assets/logo-violeta-firma-email.png';

export const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <img src={violetaLogo} alt='Logo Violeta' />
      </div>
      <MenuFooter>
        <li>Home</li>
        <li>Acerca</li>
        <li>Clases</li>
        <li>Horario</li>
        <li>Precios</li>
        <li>Profesores</li>
        <li>Contactanos</li>
      </MenuFooter>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  padding: 0;
  background-color: #161922;
`;

const MenuFooter = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 70%;
  gap: 3%;
  text-transform: uppercase;
  padding: 3% 0;
  border-top: 3px solid gray;
  border-bottom: 3px solid gray;
`;
