import { create } from 'zustand'

interface FilterDropdownState {
  isFilterDropdownOpen: boolean;
  isLogoutDropdownOpen: boolean;
  openFilterDropdown: () => void;
  closeFilterDropdown: () => void;
  openLogoutDropdown: () => void;
  closeLogoutDropdown: () => void;
}

export const useFilterDropdownStore = create<FilterDropdownState>((set) => ({
  isFilterDropdownOpen: false,
  isLogoutDropdownOpen: false,
  openFilterDropdown: () => set({ isFilterDropdownOpen: true }),
  closeFilterDropdown: () => set({ isFilterDropdownOpen: false }),
  openLogoutDropdown: () => set({ isLogoutDropdownOpen: true }),
  closeLogoutDropdown: () => set({ isLogoutDropdownOpen: false }),
}));
