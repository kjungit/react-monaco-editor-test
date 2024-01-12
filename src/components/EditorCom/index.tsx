"use client";
import { useSelectMode } from "@/recoil/selectMode/atom";
import React, { useEffect } from "react";
import LanguageRadioButton from "../LanguageRadioButton";
import Frame from "../Frame";
import { monaco } from "react-monaco-editor";
import nightOwlTheme from "monaco-themes/themes/Night Owl.json";
import { useRecoilState } from "recoil";
import { selectLanguageAtom } from "@/recoil/selectLanguage/atom";
import { EditorComponent } from "../Editor/Editor";
import { EditorWrapper, FrameWrapper, Wrapper } from "./style";

export default function EditorCom() {
  const [selectMode] = useSelectMode();
  const [selectLanguage] = useRecoilState(selectLanguageAtom);

  useEffect(() => {
    const handleResize = () => {
      const editor = monaco.editor.getEditors()[0];
      const containerWidth = editor.getContainerDomNode().offsetWidth;
      editor.layout({ width: containerWidth, height: 800 });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!monaco) return;
    monaco.editor.defineTheme(
      "nightOwl",
      nightOwlTheme as monaco.editor.IStandaloneThemeData
    );
    monaco.editor.setTheme("nightOwl");
  }, []);

  useEffect(() => {
    if (selectMode.mode !== "nightOwl") {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  }, [selectMode]);
  const SelectedEditor = EditorComponent[selectLanguage.language];

  return (
    <Wrapper style={{ display: "flex", width: "100%" }}>
      <EditorWrapper style={{ width: "50%" }}>
        <LanguageRadioButton />
        <SelectedEditor />
      </EditorWrapper>
      <FrameWrapper style={{ width: "50%" }}>
        <Frame />
      </FrameWrapper>
    </Wrapper>
  );
}
