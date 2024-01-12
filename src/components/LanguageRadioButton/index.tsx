"use client";
import { useSelectLanguage } from "@/recoil/selectLanguage/atom";
import React from "react";
import { RadioInput, RadioItem, RadioLabel, RadioWrapper } from "./style";
import { useRecoilState } from "recoil";
import { editorDataAtom } from "@/recoil/editorData/atom";

export default function LanguageRadioButton() {
  const [selectLanguage, setSelectLanguage] = useSelectLanguage();
  const [editorData] = useRecoilState(editorDataAtom);

  return (
    <RadioWrapper>
      {editorData.map((item) => (
        <RadioItem
          key={item.id}
          onClick={() => {
            setSelectLanguage({ ...item });
          }}
          className={
            selectLanguage && selectLanguage.id === item.id ? "selected" : ""
          }
        >
          <RadioLabel htmlFor={`language-${item.id}`}>
            <RadioInput
              type="radio"
              id={`${item.id}`}
              value={item.title}
              checked={selectLanguage.id === item.id}
              onChange={() => {}}
            />
            <p>{item.title}</p>
          </RadioLabel>
        </RadioItem>
      ))}
    </RadioWrapper>
  );
}
