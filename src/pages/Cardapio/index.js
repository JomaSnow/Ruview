import { useEffect } from "react";
import Display from "./Display";

export default function CardapioPage() {
  // muda nome da página
  useEffect(() => {
    document.title = "Ruview | Cardápio";
  }, []);
  return <Display />;
}
