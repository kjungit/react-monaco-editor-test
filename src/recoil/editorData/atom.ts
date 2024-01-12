import {
  cssCodeConstant,
  htmlCodeConstant,
  jsCodeConstant,
} from "@/constants/code";
import { atom } from "recoil";

export const editorDataAtom = atom({
  key: "editorData",
  default: [
    { id: 1, title: "HTML", language: "html", code: htmlCodeConstant },
    { id: 2, title: "CSS", language: "css", code: cssCodeConstant },
    { id: 3, title: "JS", language: "javascript", code: jsCodeConstant },
  ],
});
