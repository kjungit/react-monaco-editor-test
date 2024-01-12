import styled from "styled-components";

export const RadioWrapper = styled.div`
  display: flex;
  width: auto;
  :hover {
    background-color: #3a4875;
  }
`;

export const RadioItem = styled.div`
  &.selected {
    background-color: #233056;
    color: #fff;
  }
  color: #8f9aae;
  background-color: #011627;
  width: 100%;
  height: 36px;
  min-width: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;

export const RadioLabel = styled.label`
  display: block;
`;
