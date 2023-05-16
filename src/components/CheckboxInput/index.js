import React from "react";
import Display from "./Display";

export default function CheckboxInput({
  value,
  setValue = () => {},
  label = "Opção",
}) {
  return <Display label={label} value={value} setValue={setValue} />;
}
