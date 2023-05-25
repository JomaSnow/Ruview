import React from "react";
import { Button } from "./styles";

export default function Display({ text, disabled, type, onClick = () => {} }) {
  return (
    <Button onClick={onClick} type={type} disabled={disabled}>
      {text}
    </Button>
  );
}
