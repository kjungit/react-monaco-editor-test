"use client";
import styled, { css } from "styled-components";

export const ModeMadalWrapper = styled.div`
  position: fixed;
  z-index: 40;
  transform: translateX(-50%) translateY(-50%);
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 320px;
  height: 136px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TopWrapper = styled.div`
  width: 100%;
`;
export const ModalTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  align-self: flex-start;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #efa59d;
  font-size: 24px;
  cursor: pointer;
  :hover {
    color: #d15858;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
type ModalButtonProps = {
  isSelected: boolean;
};

export const ModalButton = styled.button<ModalButtonProps>`
  width: 130px;
  max-width: 300px;
  height: 50px;
  border-radius: 10px;
  background: #fff;
  border: 2px solid #58c9be;
  color: #58c9be;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  ${(props) =>
    props.isSelected &&
    css`
      background: #58c9be;
      color: #fff;
    `}

  svg {
    font-size: 20px;
  }
`;
