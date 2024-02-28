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
      <div>
        <LogoNav src={logoVioleta} alt='logoVioleta' />
      </div>
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

const NavBarC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5%;
`;
const NavList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-weight: 500;
      text-transform: uppercase;
      justify-items: center;
      text-align: center;
      text-decoration: none;
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogoNav = styled.img`
  max-width: 250px;
  height: auto;
`;

const Icons = styled.img`
  width: 40px;
  height: auto;
  padding: 0 5px;
  cursor: pointer;
`;
