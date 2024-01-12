import { useRecoilState } from "recoil";
import { editorDataAtom } from "../recoil/editorData/atom";

export default function useChangeValue(type: string) {
  const [editorData, setEditorData] = useRecoilState(editorDataAtom);

  const handleChange = (newValue: string) => {
    const updatedEditorData = editorData.map((item) => {
      if (item.language === type) {
        return { ...item, code: newValue };
      }
      return item;
    });
    setEditorData(updatedEditorData);
  };

  return { handleChange };
}
