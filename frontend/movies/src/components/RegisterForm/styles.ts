import styled from 'styled-components';

export const FormWrapper = styled.div`
  background-color: #1a1a1a;
  padding: 40px 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

export const FormSubtitle = styled.p`
  color: #b1b1b1;
  font-size: 14px;
  margin-bottom: 30px;
  text-align: center;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  background-color: #333;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 14px;

  &::placeholder {
    color: #b1b1b1;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #6a0dad;
  }
`;

export const IconButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #b1b1b1;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #333;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #444;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #6a0dad;
  }
`;

export const LinkText = styled.p`
  color: #b1b1b1;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: #F22C3D;
  font-size: 12px;
  margin-top: 5px;
`;
