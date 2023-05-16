import React from "react";
import Display from "./Display";

export default function ImageInput({ value, setValue = () => {} }) {
  return <Display value={value} setValue={setValue} />;
}
