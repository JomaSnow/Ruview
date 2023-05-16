import React, { useEffect, useRef } from "react";
import { Input, Text, Wrapper } from "./styles";

export default function Display({ label, value, setValue = () => {} }) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current.checked) {
      if (value === false) {
        inputRef.current.checked = false;
      }
    }
  }, [value]);
  return (
    <Wrapper>
      <Input
        ref={inputRef}
        type="checkbox"
        value={value}
        onChange={() => {
          setValue(!value);
        }}
      />
      <Text htmlFor={inputRef}>{label}</Text>
    </Wrapper>
  );
}
