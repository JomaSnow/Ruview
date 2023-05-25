import React from "react";
import Display from "./Display";

export default function TextInput({
  type,
  value,
  placeholder,
  setValue = () => {},
}) {
  return (
    <Display
      type={type}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
    />
  );
}
