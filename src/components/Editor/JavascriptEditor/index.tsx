"use client";
import { useSelectLanguage } from "@/recoil/selectLanguage/atom";
import React from "react";
import MonacoEditor from "react-monaco-editor";
import { useSelectMode } from "@/recoil/selectMode/atom";
import useChangeValue from "@/hooks/useChangeValue";

export default function JavascriptEditor() {
  const [selectLanguage] = useSelectLanguage();
  const [selectMode] = useSelectMode();
  const { handleChange } = useChangeValue("javascript");

  return (
    <MonacoEditor
      width="100%"
      height="800"
      language={selectLanguage.language}
      theme={selectMode.mode}
      value={selectLanguage.code}
      options={{ selectOnLineNumbers: true }}
      onChange={(newValue) => handleChange(newValue)}
    />
  );
}
