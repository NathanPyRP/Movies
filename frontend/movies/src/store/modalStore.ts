// src/store/modalStore.ts
import { create } from 'zustand';

interface ModalState {
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  isPerfilModalOpen: boolean;
  isConfirmDeleteModalOpen: boolean;
  isConfirmSaveModalOpen: boolean; // Novo estado para o popup de confirmação de salvar

  openPerfilModal: () => void;
  closePerfilModal: () => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
  openConfirmDeleteModal: () => void;
  closeConfirmDeleteModal: () => void;
  openConfirmSaveModal: () => void; // Novo método para abrir o popup de confirmação de salvar
  closeConfirmSaveModal: () => void; // Novo método para fechar o popup de confirmação de salvar
}

export const useModalStore = create<ModalState>((set) => ({
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isPerfilModalOpen: false,
  isConfirmDeleteModalOpen: false,
  isConfirmSaveModalOpen: false,

  openPerfilModal: () => set({ isPerfilModalOpen: true }),
  closePerfilModal: () => set({ isPerfilModalOpen: false }),
  openLoginModal: () => set({ isLoginModalOpen: true, isRegisterModalOpen: false }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),
  openRegisterModal: () => set({ isRegisterModalOpen: true, isLoginModalOpen: false }),
  closeRegisterModal: () => set({ isRegisterModalOpen: false }),
  openConfirmDeleteModal: () => set({ isConfirmDeleteModalOpen: true }),
  closeConfirmDeleteModal: () => set({ isConfirmDeleteModalOpen: false }),
  openConfirmSaveModal: () => set({ isConfirmSaveModalOpen: true }), // Novo método
  closeConfirmSaveModal: () => set({ isConfirmSaveModalOpen: false }), // Novo método
}));
