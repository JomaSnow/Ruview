import React from "react";
import Display from "./Display";

export default function Button({
  text = "Enviar",
  disabled = false,
  type = "button",
  onClick = () => {},
}) {
  return (
    <Display text={text} disabled={disabled} type={type} onClick={onClick} />
  );
}
