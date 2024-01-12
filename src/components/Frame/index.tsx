import { editorDataAtom } from "@/recoil/editorData/atom";
import React, { useEffect, useRef } from "react";
import { FrameContextConsumer } from "react-frame-component";
import { useRecoilState } from "recoil";

export default function Frame() {
  const [editorData] = useRecoilState(editorDataAtom);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const newCode = `
    <html>
      <head>
        <style>${editorData[1].code}</style>
      </head>
      <body>
        ${editorData[0].code}
        <script defer>
            ${editorData[2].code}
        </script>
      </body>
    </html>
  `;
    const currentIframe = iframeRef.current;
    if (currentIframe) {
      currentIframe.src = `data:text/html;charset=utf-8,${encodeURIComponent(
        newCode
      )}`;
    }
  }, [editorData]);

  return (
    <FrameContextConsumer>
      {({ document, window }) => {
        return (
          <iframe
            ref={iframeRef}
            title="Result"
            sandbox="allow-scripts allow-modals"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        );
      }}
    </FrameContextConsumer>
  );
}
