import styled from "styled-components";

export const ConfirmModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 12px;
  z-index: 1001;
  max-width: 450px;
  width: 100%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  color: #fff;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    left: 0;
    transform: none;
    width: 100%;
    border-radius: 12px 12px 0 0;
  }
`;

export const ConfirmModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #ccc;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  flex: 1;
  font-weight: bold;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const CancelButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  flex: 1;
  font-weight: bold;

  &:hover {
    background-color: #444;
  }
`;
