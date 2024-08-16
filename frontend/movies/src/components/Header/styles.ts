import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #0d0d0d;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 641px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin: 0;
  font-family: 'Arial', sans-serif;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Ocupa toda a largura disponível */
  margin-top: 10px; /* Espaçamento superior entre o input e a logo/botão */

  @media (min-width: 641px) {
    margin-top: 0;
    margin-left: 20px;
    margin-right: 20px;
    width: auto;
    flex: 2;
  }
`;

export const ButtonDesktop = styled.button`
  background-color: #333;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 640px) {
    display: none; /* Esconde o botão em telas pequenas */
  }

  svg {
    margin-left: 8px; /* Espaço entre o texto e o ícone */
  }
`;

export const ButtonMobile = styled.button`
  background-color: #333;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  display: none;

  @media (max-width: 640px) {
    display: inline-block; /* Exibe o botão em telas pequenas */
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1a1a1a;
  padding: 40px;
  border-radius: 12px;
  z-index: 1000;
  max-width: 400px;
  width: 90%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  min-width: 160px;
  overflow: hidden;
  padding: 8px 0;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }

  svg {
    margin-right: 8px; /* Espaço entre o ícone e o texto */
  }
`;
