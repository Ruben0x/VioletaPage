import React from 'react';
import styled from 'styled-components';
import logoVioleta from '../assets/web-assets/logo-violeta@2x.png';
import cartIcon from '../assets/web-assets/iconos/ico-cart@2x.png';
import searchIcon from '../assets/web-assets/iconos/ico-search@2x.png';
import cameraIcon from '../assets/web-assets/iconos/ico-view@2x.png';
import VioletButton from '../styles/buttons';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <LogoNav src={logoVioleta} alt='logoVioleta' />
      </LogoContainer>
      <NavList>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Acerca</a>
          </li>
          <li>
            <a>Clases</a>
          </li>
          <li>
            <a>Horario</a>
          </li>
          <li>
            <a>Precios</a>
          </li>
          <li>
            <a>Profesores</a>
          </li>
          <li>
            <a>Contactanos</a>
          </li>
        </ul>
      </NavList>
      <NavBarC>
        <IconsContainer>
          <Icons src={cameraIcon} alt='logoCamara' />
          <Icons src={searchIcon} alt='logoBuscar' />
          <Icons src={cartIcon} alt='carrito' />
        </IconsContainer>

        <VioletButton>Registra tu clase</VioletButton>
      </NavBarC>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0;
  width: auto;
`;

const NavList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    gap: 1%;

    li {
      font-size: 1.3vw;
      font-weight: 500;
      text-decoration: none;
      margin: 0;
      cursor: pointer;
    }
  }
`;

const LogoNav = styled.img`
  max-width: 100%;
  height: auto;
`;

const LogoContainer = styled.div`
  width: 15%;
  margin: 0;
  display: flex;
  align-items: center;
`;

const NavBarC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5%;
  width: 25%;

  button {
    width: 50%;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

const Icons = styled.img`
  width: 33%;
  height: auto;
  padding: 0 1%;
  cursor: pointer;
`;
