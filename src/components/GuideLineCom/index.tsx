"use client";
import React, { useState } from "react";
import {
  ContentWrapper,
  Discription,
  FirstTitle,
  SecondTitle,
  SetButton,
  TextWrapper,
  ThirdTitle,
  TopBar,
  TopBarText,
  Wrapper,
} from "./style";
import { CiSettings } from "react-icons/ci";
import ModalPortal from "../ModalPortal";
import { ModeMadalWrapper } from "../ModeMadal/style";
import ModeModal from "../ModeMadal";

export default function GuideLineCom() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpen = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <TopBar>
        <TopBarText>가이드라인</TopBarText>
        <SetButton onClick={onClickOpen}>
          <CiSettings />
        </SetButton>
      </TopBar>

      <ContentWrapper>
        <TextWrapper>
          <FirstTitle>
            <span>&lt;img&gt;</span>
            태그
          </FirstTitle>
          <Discription>
            img 태그는 웹 페이지에 이미지를 삽입할 때 사용하는 태그예요.
          </Discription>
        </TextWrapper>
        <TextWrapper>
          <SecondTitle>주요 속성</SecondTitle>
          <p>img 태그의 핵심 속성으로 src, alt, width, height가 있어요.</p>
        </TextWrapper>
        <TextWrapper>
          <ThirdTitle>
            <span>src</span>
          </ThirdTitle>
          <Discription>
            이미지의 주소(URL)를 지정하는 필수 속성이에요. URL은 동일한 웹
            사이트 내 다른 이미지를 가리키거나, 외부 웹 사이트에 호스팅된
            이미지를 가리킬 수 있어요. 이 속성 없이 <span>&lt;img&gt;</span>
            태그를 사용하면 이미지가 표시되지 않아요.
          </Discription>
        </TextWrapper>
      </ContentWrapper>
      {isOpen && (
        <ModalPortal>
          <ModeMadalWrapper onClick={onClickOpen}>
            <ModeModal setState={setIsOpen} />
          </ModeMadalWrapper>
        </ModalPortal>
      )}
    </Wrapper>
  );
}
