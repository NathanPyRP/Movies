import React from "react";
import {
  ConfirmModalWrapper,
  ConfirmModalContent,
  ConfirmButton,
  CancelButton,
  ButtonGroup, // Novo componente para agrupar botões
} from "./styles"; 
import { useAuthStore } from "../../store/authStore"; // Importa a store de autenticação
import { useModalStore } from "../../store/modalStore"; // Importa a store de controle dos modais

interface ConfirmDeleteModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ onConfirm, onCancel }) => {
  const { id, logout } = useAuthStore(); // Obtém o ID do usuário logado e a função de logout
  const { closePerfilModal, closeConfirmDeleteModal } = useModalStore(); // Obtém a função para fechar o modal de perfil

  const handleDelete = async () => {
    if (id) {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          console.log("Conta deletada com sucesso");
          logout(); // Executa o logout após a deleção da conta
          closePerfilModal(); // Fecha o modal de perfil
          onConfirm(); // Fecha o modal de confirmação
          closeConfirmDeleteModal();
        } else {
          console.error("Erro ao deletar a conta");
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }
  };

  return (
    <ConfirmModalWrapper>
      <ConfirmModalContent>
        <h3>Encerramento da conta</h3>
        <p>
          Tem certeza de que deseja deletar sua conta? Esta ação é irreversível e
          todos os seus dados serão permanentemente excluídos.
        </p>
        <ButtonGroup>
          <CancelButton onClick={onCancel}>Cancelar</CancelButton>
          <ConfirmButton onClick={handleDelete}>Confirmar</ConfirmButton>
        </ButtonGroup>
      </ConfirmModalContent>
    </ConfirmModalWrapper>
  );
};

export default ConfirmDeleteModal;
