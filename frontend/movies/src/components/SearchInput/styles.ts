import styled from "styled-components";
import { FaSearch, FaSlidersH } from "react-icons/fa";

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #1b1b1b; /* Cor de fundo do input */
  border-radius: 20px; /* Bordas arredondadas ajustadas */
  padding: 2px 6px; /* Espaçamento interno reduzido */
  border: 1px solid transparent; /* Borda */
  box-shadow: 0 0 0 2px #6a0dad; /* Sombra ao redor */
  width: 100%; /* Largura total */
  max-width: 250px; /* Largura máxima ainda mais reduzida */
  position: relative; /* Para posicionamento absoluto do botão */

  @media (min-width: 641px) {
    margin-right: 560px;
  }

  @media (max-width: 1430px) {
    margin-right: 50px;
  }
`;

export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  color: #b1b1b1; /* Cor do texto */
  font-size: 12px; /* Tamanho do texto ainda mais reduzido */
  padding-left: 36px; /* Ajusta o espaço para o botão da lupa */
  padding-right: 10px; /* Ajusta o espaço para o botão de filtro */
  outline: none;

  &::placeholder {
    color: #b1b1b1; /* Cor do placeholder */
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  left: 5px; /* Posiciona o botão da lupa dentro do input */
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333333; /* Cor de fundo cinza mais claro para o botão */
  border: none;
  border-radius: 50%;
  width: 18px; /* Tamanho proporcional do botão */
  height: 18px;
  cursor: pointer;
`;

export const SearchIcon = styled(FaSearch)`
  color: #b1b1b1; /* Cor do ícone */
  font-size: 13px; /* Tamanho do ícone proporcional ao botão */
`;

export const FilterButtonWrapper = styled.div`
  position: absolute;
  right: -35px; /* Aumenta a posição do botão para fora do input */
  top: 50%;
  transform: translateY(-50%);
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b1b1b; /* Cor de fundo do botão */
  border: none;
  border-radius: 50%;
  width: 28px; /* Tamanho proporcional do botão */
  height: 28px;
  cursor: pointer;
  margin-left: 12px; /* Aumenta o espaço entre o botão e o input */
  box-shadow: 0 0 0 2px #6a0dad; /* Sombra ao redor do botão */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333; /* Cor ao passar o mouse */
  }

  &:active {
    background-color: #000; /* Cor ao clicar */
  }
`;

export const FilterIcon = styled(FaSlidersH)`
  color: #b1b1b1; /* Cor do ícone de filtros */
  font-size: 14px; /* Tamanho do ícone proporcional ao botão */
`;

export const FilterDropdown = styled.div`
  position: absolute;
  top: 40px; /* Ajusta essa altura para logo abaixo do input */
  left: 0;  /* Alinha o dropdown ao lado esquerdo do input */
  width: 350px;
  background-color: #1b1b1b;
  border-radius: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 100;
`;


export const FilterSection = styled.div`
  margin-bottom: 20px;
`;

export const FilterTitle = styled.h4`
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const FilterOption = styled.button`
  background-color: #333;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }

  &:active {
    background-color: #555;
  }
`;

export const DatePicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centraliza verticalmente os itens */
  gap: 10px;

  input {
    width: 100%;
    padding: 10px;
    background-color: #1b1b1b; /* Ajuste para cor de fundo mais escura */
    color: #ffffff;
    border: none;
    border-radius: 10px; /* Ajuste para bordas arredondadas */
    font-size: 14px;
    box-shadow: 0 0 0 2px #6a0dad; /* Sombra ao redor semelhante à primeira imagem */

    &::placeholder {
      color: #333333; /* Tom de cinza escuro para o placeholder */
    }

    &:focus {
      outline: none;
      box-shadow: 0px 0px 10px 2px #6a0dad; /* Realce ao focar */
    }

    /* Ajustes para o ícone do calendário */
    &::-webkit-calendar-picker-indicator {
      filter: invert(1); /* Inverte a cor para ícone ficar branco */
    }
  }

  span {
    color: #ffffff; /* Cor branca para a letra "a" */
    font-size: 14px; /* Ajusta o tamanho da fonte */
    margin: 0 10px; /* Espaçamento ao redor da letra */
    text-align: center; /* Centraliza o texto */
  }
`;



