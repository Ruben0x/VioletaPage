import React from 'react';
import yellowHodie from '../assets/web-assets/hero_img@2x.png';
import styled from 'styled-components';

export const GaleriaCard = () => {
  return (
    <CardCointainer>
      <img src={yellowHodie} alt='' />
    </CardCointainer>
  );
};

const CardCointainer = styled.div`
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensure the image does not exceed the card */
  border: 3px solid #ff43e6;
  padding: 5%;
  img {
    width: 90%; /* Make the image fill the card horizontally */
    height: auto; /* Maintain the aspect ratio of the image */
    display: block; /* Remove any extra space below the image */
  }
`;
