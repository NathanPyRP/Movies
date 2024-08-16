import React from "react";
import {
  ConfirmModalWrapper,
  ConfirmModalContent,
  ConfirmButton,
  CancelButton,
  ButtonGroup, // Novo componente para agrupar botões
} from "./styles"; 

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  title?: string; // Título opcional
  message?: string; // Mensagem opcional
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onConfirm, onCancel, title = "Confirmação", message = "Tem certeza?" }) => {
  return (
    <ConfirmModalWrapper>
      <ConfirmModalContent>
        <h3>{title}</h3>
        <p>{message}</p>
        <ButtonGroup>
          <CancelButton onClick={onCancel}>Cancelar</CancelButton>
          <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
        </ButtonGroup>
      </ConfirmModalContent>
    </ConfirmModalWrapper>
  );
};

export default ConfirmationModal;
