import { useSolid } from "../../hooks/SolidProvider";
import Display from "./Display";

export default function PerfilPage() {
  const webId = useSolid();

  return <>{!webId ? <h1>403 não autorizado</h1> : <Display />}</>;
}
