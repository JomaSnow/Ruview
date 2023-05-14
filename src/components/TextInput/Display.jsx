import React from "react";
import { Input } from "./styles";

export default function Display({
  type,
  value,
  placeholder,
  setValue = () => {},
}) {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}
