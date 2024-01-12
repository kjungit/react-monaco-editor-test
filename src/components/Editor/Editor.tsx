"use client";
import HtmlEditor from "./HtmlEditor";
import CssEditor from "./CssEditor";
import JavascriptEditor from "./JavascriptEditor";

interface EditorComponents {
  [key: string]: () => JSX.Element;
}

export const EditorComponent: EditorComponents = {
  html: () => <HtmlEditor />,
  css: () => <CssEditor />,
  javascript: () => <JavascriptEditor />,
};
