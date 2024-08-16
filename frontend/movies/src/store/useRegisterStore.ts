// src/store/registerStore.ts
import { create } from 'zustand';
import { useAuthStore } from './authStore';

interface RegisterState {
  isRegistering: boolean;
  register: (username: string, email: string, password: string) => Promise<void>;
}

export const useRegisterStore = create<RegisterState>((set) => ({
  isRegistering: false,
  
  register: async (username: string, email: string, password: string) => {
    set({ isRegistering: true });

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar. Por favor, tente novamente.');
      }

      const data = await response.json();

      // Se o cadastro foi bem-sucedido, faça login automaticamente
      const authStore = useAuthStore.getState();
      authStore.login({ id: data.id, username: data.username, email: data.email });
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert("Erro ao cadastrar");
    } finally {
      set({ isRegistering: false });
    }
  },
}));
