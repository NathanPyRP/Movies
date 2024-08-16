import React, { useState, useEffect } from 'react';
import { FormWrapper, FormTitle, FormSubtitle, InputGroup, Input, Label, Button, LinkText, IconButton, ErrorMessage } from './styles';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useModalStore } from '../../store/modalStore';
import { useRegisterStore } from '../../store/useRegisterStore';

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const { openLoginModal, closeRegisterModal } = useModalStore();
  const { register, isRegistering } = useRegisterStore();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateEmail = (email: string) => {
    // Regex simples para validação de e-mail
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    let valid = true;
    
    if (!username) {
      setUsernameError('Campo obrigatório');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!email) {
      setEmailError('Campo obrigatório');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('E-mail inválido');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 8) {
      setPasswordError('Mínimo 8 caracteres');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Senhas diferentes');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    setIsFormValid(valid);
  };

  useEffect(() => {
    validateForm();
  }, [username, email, password, confirmPassword]);

  const handleLoginClick = () => {
    closeRegisterModal();
    openLoginModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid) {
      await register(username, email, password);
      closeRegisterModal();
    }
  };

  return (
    <FormWrapper>
      <FormTitle>Crie sua conta</FormTitle>
      <FormSubtitle>Insira seus dados para completar o cadastro.</FormSubtitle>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Nome completo*</Label>
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {usernameError && <ErrorMessage>{usernameError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>E-mail*</Label>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>Senha*</Label>
          <div style={{ position: 'relative' }}>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <IconButton type="button" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </IconButton>
          </div>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>Confirmar senha*</Label>
          <div style={{ position: 'relative' }}>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <IconButton type="button" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </IconButton>
          </div>
          {confirmPasswordError && <ErrorMessage>{confirmPasswordError}</ErrorMessage>}
        </InputGroup>
        <Button type="submit" disabled={isRegistering || !isFormValid}>Cadastrar</Button>
      </form>
      <LinkText>Já tem uma conta? <a href="#" onClick={handleLoginClick}>Fazer login</a></LinkText>
    </FormWrapper>
  );
};

export default RegisterForm;
