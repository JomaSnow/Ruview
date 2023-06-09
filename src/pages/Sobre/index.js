import { useEffect } from "react";
import Display from "./Display";

export default function SobrePage() {
  // muda nome da página
  useEffect(() => {
    document.title = "Ruview | Sobre";
  }, []);
  return <Display />;
}
