import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1a1a1a;
  padding: 20px; /* Mantém o padding compacto */
  border-radius: 12px;
  z-index: 1000;
  max-width: 800px; /* Aumenta a largura máxima */
  width: 90%; /* Faz o modal ocupar 90% da largura disponível */
  max-height: 70vh; /* Define uma altura máxima reduzida */
  overflow-y: auto; /* Adiciona scroll caso o conteúdo exceda a altura máxima */
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  color: #fff;

  @media (max-width: 540px) {
    padding: 20px;
    max-width: 90%;
    max-height: 80vh; /* Ajusta a altura máxima para telas pequenas */
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.div`
  h3 {
    font-size: 16px;
    margin-bottom: 8px;
    margin-top: 10px;
  }

  p {
    font-size: 14px;
    color: #b1b1b1;
    margin-bottom: 5px;
  }

  section {
    margin-bottom: 0px; /* Reduz a margem inferior das seções */
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 540px) {
    flex-direction: row;
  }
`;

export const InputWrapper = styled.div<{ narrow?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: ${(props) => (props.narrow ? "0 0 50%" : "1")}; /* Reduz a largura para 50% se narrow for verdadeiro */
  
  @media (min-width: 540px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #ccc;
  
  /* Estilo para o asterisco */
  &::after {
    content: '*';
    color: red; /* Define a cor vermelha para o asterisco */
    margin-left: 2px; /* Espaço entre o texto e o asterisco */
  }
`;


export const Input = styled.input<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#2f2f2f' : '#4a4a4a')};  /* Cor de fundo mais escura para o input desabilitado */
  border: none;
  border-radius: 8px;
  padding: 12px;
  color: #fff;
  font-size: 16px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? '0.3' : '1')};  /* Aplica opacidade de 30% se o input estiver desabilitado */
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #888;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  max-width: 160px;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const DangerButton = styled(Button)`
  background-color: rgba(192, 0, 0, 0.3);
  color: #c00;
  max-width: 160px;
  text-align: center;
  margin-top: 5px;

  &:hover {
    background-color: #c00;
    color: #fff;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #f1f1f1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Distribui os botões nas extremidades */
  align-items: center;
  margin-top: 8px; /* Reduz a margem superior */
`;
