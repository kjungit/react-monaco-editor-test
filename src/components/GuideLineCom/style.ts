"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 30%;
  border-radius: 14px;
  border: 1px solid #233056;
`;

export const TopBar = styled.div`
  border-radius: 14px 14px 0 0;
  height: 36px;
  background-color: #233056;
  color: #b5b9c1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const TopBarText = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const SetButton = styled.button`
  width: 20px;
  height: 20px;

  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  font-size: 14px;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FirstTitle = styled.h4`
  color: #27faff;
  span {
    padding: 0 4px;
    border: 1px solid #fff;
    border-radius: 4px;
    margin-right: 4px;
  }
`;

export const Discription = styled.p`
  span {
    padding: 0 4px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;

export const SecondTitle = styled.h4`
  color: #cafc45;
`;
export const ThirdTitle = styled.h4`
  span {
    padding: 0 4px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;
