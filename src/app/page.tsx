import { Inter } from "next/font/google";
import GuideLineCom from "../components/GuideLineCom";
import EditorCom from "../components/EditorCom";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 0;

export default function Home() {
  return (
    <main className={inter.className}>
      <GuideLineCom />
      <EditorCom />
    </main>
  );
}
