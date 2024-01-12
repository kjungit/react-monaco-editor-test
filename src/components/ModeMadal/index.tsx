"use client";
import React, { useState } from "react";
import {
  ButtonWrapper,
  CloseButton,
  Modal,
  ModalButton,
  ModalTitle,
  TopWrapper,
} from "./style";
import VariableIcon, { IconName } from "../Icon";
import { useSelectMode } from "@/recoil/selectMode/atom";

interface ButtonData {
  id: number;
  text: string;
  icon: IconName;
  mode: string;
}

const buttonData: ButtonData[] = [
  { id: 1, text: "Dark", icon: "dark", mode: "nightOwl" },
  { id: 2, text: "Light", icon: "light", mode: "light" },
];

export default function ModeModal({
  setState,
}: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const onClickOpen = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
  };
  const [selectMode, setSelectMode] = useSelectMode();
  const [selectedButtonId, setSelectedButtonId] = useState<number>(
    selectMode.id
  );
  const handleButtonClick = (buttonId: number) => {
    setSelectedButtonId(buttonId);
  };

  return (
    <Modal onClick={onClickOpen}>
      <TopWrapper>
        <ModalTitle>설정</ModalTitle>
        <CloseButton onClick={() => setState(false)}>
          <VariableIcon name="close" />
        </CloseButton>
      </TopWrapper>
      <ButtonWrapper>
        {buttonData.map((item) => (
          <ModalButton
            key={item.id}
            onClick={() => {
              handleButtonClick(item.id);
              setSelectMode(item);
            }}
            isSelected={selectedButtonId === item.id}
          >
            <VariableIcon name={item.icon} />
            <span>{item.text}</span>
          </ModalButton>
        ))}
      </ButtonWrapper>
    </Modal>
  );
}
