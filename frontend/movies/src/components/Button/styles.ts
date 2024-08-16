import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background-color: #1b1b1b;  /* Cor de fundo do botão */
  color: #b1b1b1;  /* Cor do texto */
  border: none;
  border-radius: 10px;  /* Bordas arredondadas */
  padding: 10px 20px;  /* Espaçamento interno */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;  /* Cor de fundo ao passar o mouse */
  }

  &:active {
    background-color: #000;  /* Cor de fundo ao clicar */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #6a0dad;  /* Sombra ao redor ao focar */
  }

  

  @media (min-width: 1430px) {
    margin-right: 100px;
  }
`;
