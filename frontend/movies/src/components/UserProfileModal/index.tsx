import React, { useState, useEffect } from "react";
import {
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  ModalContent,
  InputGroup,
  InputWrapper,
  Label,
  Input,
  Button,
  DangerButton,
  CloseButton,
  ButtonContainer,
} from "./styles";
import { useModalStore } from "../../store/modalStore"; // Store para gerenciar o estado do modal
import { useAuthStore } from "../../store/authStore"; // Importa a store de autenticação
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal"; // Importa o modal de confirmação de exclusão
import ConfirmationModal from "../../components/ConfirmationModal"; // Importa o modal de confirmação de salvamento

const UserProfileModal: React.FC = () => {
  const {
    closePerfilModal,
    openConfirmDeleteModal,
    closeConfirmDeleteModal,
    openConfirmSaveModal,
    closeConfirmSaveModal,
    isConfirmDeleteModalOpen,
    isConfirmSaveModalOpen,
  } = useModalStore();
  const { username, email, id, login, logout } = useAuthStore(); // Obtém o username, email e id da store
  const [firstName, setFirstName] = useState("");
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (username) {
      const nameParts = username.split(" ");
      setFirstName(nameParts[0]); // Define o primeiro nome
      setFullName(username); // Define o nome completo
    }
    if (email) {
      setUserEmail(email); // Define o email
    }
  }, [username, email]);

  const handleSaveChanges = async () => {
    try {
      let updatedUsername = username;

      if (fullName !== username) {
        updatedUsername = fullName; // Atualiza o nome de usuário completo se o input Nome completo foi alterado
      } else if (firstName !== username.split(" ")[0]) {
        const restOfName = username.split(" ").slice(1).join(" ");
        updatedUsername = `${firstName} ${restOfName}`.trim(); // Atualiza apenas o primeiro nome preservando o resto
      }

      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: updatedUsername,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Atualiza os dados na store do Zustand com as novas informações
        login({ id: data.id, username: data.username, email: data.email });

        console.log("Informações atualizadas com sucesso");
        closeConfirmSaveModal(); // Fecha o modal de confirmação de salvamento
        closePerfilModal(); // Fecha o modal de perfil
      } else {
        console.error("Erro ao atualizar as informações");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Conta deletada com sucesso");
        logout(); // Faz logout após a conta ser deletada
        closeConfirmDeleteModal(); // Fecha o modal de confirmação de exclusão
        closePerfilModal(); // Fecha o modal de perfil
      } else {
        console.error("Erro ao deletar a conta");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>Preferências da conta</ModalTitle>
          <CloseButton onClick={closePerfilModal}>✕</CloseButton>
        </ModalHeader>
        <ModalContent>
          <section>
            <h3>Usuário</h3>
            <p>Faça a edição do seu nome de usuário e de seu nome.</p>
            <InputGroup>
              <InputWrapper>
                <Label>Nome</Label>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Nome completo</Label>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </InputWrapper>
            </InputGroup>
          </section>
          <section>
            <h3>E-mail</h3>
            <p>O e-mail não pode ser editado, apenas visualizado.</p>
            <InputGroup>
              <InputWrapper narrow>
                <Label>E-mail</Label>
                <Input type="email" value={userEmail} readOnly disabled />
              </InputWrapper>
            </InputGroup>
          </section>
          <section>
            <h3>Encerramento da conta</h3>
            <p>
              Ao deletar sua conta, todos os seus dados serão permanentemente
              excluídos. Esta ação é irreversível.
            </p>
            <DangerButton onClick={openConfirmDeleteModal}>
              Deletar conta
            </DangerButton>
          </section>
          <ButtonContainer>
            <Button onClick={openConfirmSaveModal}>Salvar alterações</Button>
          </ButtonContainer>
        </ModalContent>
      </ModalWrapper>

      {isConfirmDeleteModalOpen && (
        <ConfirmDeleteModal
          onConfirm={handleDeleteAccount}
          onCancel={closeConfirmDeleteModal}
        />
      )}

      {isConfirmSaveModalOpen && (
        <ConfirmationModal
          onConfirm={handleSaveChanges}
          onCancel={closeConfirmSaveModal}
        />
      )}
    </>
  );
};

export default UserProfileModal;
