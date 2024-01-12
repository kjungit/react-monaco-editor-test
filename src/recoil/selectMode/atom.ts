import * as React from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "selectModeAtom",
  storage: localStorage,
});

export const selectModeAtom = atom({
  key: "selectModeAtom",
  default: { id: 1, text: "Dark", icon: "dark", mode: "nightOwl" },
  effects_UNSTABLE: [persistAtom],
});

export function useSelectMode() {
  const [isInitial, setIsInitial] = React.useState(true);
  const [selectModeStored, setSelectModeStored] =
    useRecoilState(selectModeAtom);

  React.useEffect(() => {
    setIsInitial(false);
  }, []);

  return [
    isInitial === true
      ? { id: 1, text: "Dark", icon: "dark", mode: "nightOwl" }
      : selectModeStored,
    setSelectModeStored,
  ] as const;
}
