// src/components/Header/Header.tsx
import React from 'react';
import { FaUser, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { HeaderWrapper, Logo, HeaderTop, SearchContainer, ButtonDesktop, ButtonMobile, Overlay, ModalWrapper, DropdownContainer, DropdownItem } from './styles';
import SearchInput from '../SearchInput';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import UserProfileModal from '../UserProfileModal';
import { useModalStore } from '../../store/modalStore'; // Importa a store do Zustand
import { useAuthStore } from '../../store/authStore'; // Importa a store de autenticação do Zustand
import { useFilterDropdownStore } from '../../store/filterDropdownStore'; // Importa a store de controle do dropdown

const Header: React.FC = () => {
  const { isLoginModalOpen, isRegisterModalOpen, isPerfilModalOpen, closeRegisterModal, openLoginModal, closeLoginModal, openPerfilModal } = useModalStore();
  const { isAuthenticated, username, logout } = useAuthStore(); // Usa a store de autenticação do Zustand
  const { isLogoutDropdownOpen, openLogoutDropdown, closeLogoutDropdown } = useFilterDropdownStore(); // Usa a store para controlar os dropdowns

  const handleLogoutDropdownToggle = () => {
    if (isLogoutDropdownOpen) {
      closeLogoutDropdown();
    } else {
      openLogoutDropdown();
    }
  };

  const handleLogoutClick = () => {
    logout();
    closeLogoutDropdown();
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderTop>
          <Logo>RATER</Logo>
          <ButtonMobile onClick={openLoginModal}>Login</ButtonMobile>
        </HeaderTop>
        <SearchContainer>
          <SearchInput />
        </SearchContainer>
        {isAuthenticated ? (
          <div style={{ position: 'relative' }}>
            <ButtonDesktop onClick={handleLogoutDropdownToggle}>
              {username} <FaChevronDown />
            </ButtonDesktop>
            {isLogoutDropdownOpen && (
              <DropdownContainer>
                <DropdownItem onClick={openPerfilModal}>
                  <FaUser style={{ marginRight: '8px' }} />
                  Perfil
                </DropdownItem>
                <DropdownItem onClick={handleLogoutClick}>
                  <FaSignOutAlt style={{ marginRight: '8px' }} />
                  Desconectar
                </DropdownItem>
              </DropdownContainer>
            )}
          </div>
        ) : (
          <ButtonDesktop onClick={openLoginModal}>Login</ButtonDesktop>
        )}
      </HeaderWrapper>

      {isLoginModalOpen && (
        <>
          <Overlay onClick={closeLoginModal} />
          <ModalWrapper>
            <LoginForm />
          </ModalWrapper>
        </>
      )}

      {isPerfilModalOpen && (
        <>
          <Overlay onClick={closeLoginModal} />
            <UserProfileModal />
        </>
      )}

      {isRegisterModalOpen && (
        <>
          <Overlay onClick={closeRegisterModal} />
          <ModalWrapper>
            <RegisterForm />
          </ModalWrapper>
        </>
      )}
    </>
  );
};

export default Header;
