import React from "react";
import Display from "./Display";

export default function SelectInput({
  value,
  options = [],
  setValue = () => {},
}) {
  return <Display value={value} setValue={setValue} options={options} />;
}
