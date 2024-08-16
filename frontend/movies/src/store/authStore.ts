// src/store/authStore.ts
import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  id: number | null;
  username: string | null;
  email: string | null;
  login: (userData: { id: number; username: string; email: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  id: null,
  username: null,
  email: null,
  login: ({ id, username, email }) => set({ isAuthenticated: true, id, username, email }),
  logout: () => set({ isAuthenticated: false, id: null, username: null, email: null }),
}));
