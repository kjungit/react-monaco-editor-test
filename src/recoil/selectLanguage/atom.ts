"use client";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { htmlCodeConstant } from "@/constants/code";
import { useEffect, useState } from "react";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "selectLanguageAtom",
  storage: localStorage,
});

export const selectLanguageAtom = atom({
  key: "selectLanguageAtom",
  default: { id: 1, title: "HTML", language: "html", code: htmlCodeConstant },
  effects_UNSTABLE: [persistAtom],
});

export function useSelectLanguage() {
  const [isInitial, setIsInitial] = useState(true);
  const [selectLanguageStored, setSelectLanguageStored] =
    useRecoilState(selectLanguageAtom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [
    isInitial === true
      ? { id: 1, title: "HTML", language: "html", code: htmlCodeConstant }
      : selectLanguageStored,
    setSelectLanguageStored,
  ] as const;
}
