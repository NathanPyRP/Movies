import React, { useState } from 'react';
import { FormWrapper, FormTitle, FormSubtitle, InputGroup, Input, Label, Button, LinkText, IconButton, ErrorMessage } from './styles';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useModalStore } from '../../store/modalStore';
import { useAuthStore } from '../../store/authStore';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(''); // Estado para mensagem de erro de email
  const [passwordError, setPasswordError] = useState(''); // Estado para mensagem de erro de senha
  const { openRegisterModal, closeLoginModal } = useModalStore();
  const { login, logout } = useAuthStore();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    closeLoginModal();
    openRegisterModal();
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(''); // Reseta as mensagens de erro antes da requisição
    setPasswordError('');

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login({ id: data.id, username: data.username, email: data.email });
        closeLoginModal(); // Fecha o modal de login apenas se o login for bem-sucedido
      } else {
        // Aqui tratamos os casos de erro baseado no código de status
        if (response.status === 401) {
          // Credenciais inválidas
          setEmailError('E-mail não cadastrado');
          setPasswordError('Senha incorreta');
        } else {
          // Outros erros, como 500 (erro no servidor)
          setEmailError('Erro ao tentar logar. Tente novamente mais tarde.');
        }
        logout(); // Executa o logout se houver erro de credenciais para limpar qualquer estado de autenticação
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setEmailError('Erro de conexão, tente novamente');
    }
  };

  return (
    <FormWrapper>
      <FormTitle>Acesse sua conta</FormTitle>
      <FormSubtitle>Bem vindo de volta! Entre com seus dados.</FormSubtitle>
      <form onSubmit={handleLogin}>
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
        <Button type="submit">Fazer login</Button>
      </form>
      <LinkText>Não tem uma conta ainda? <a href="#" onClick={handleRegisterClick}>Criar conta</a></LinkText>
    </FormWrapper>
  );
};

export default LoginForm;
