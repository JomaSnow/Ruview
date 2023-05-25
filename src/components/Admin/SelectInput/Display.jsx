import React from "react";
import { Select } from "./styles";

export default function Display({ value, options = [], setValue = () => {} }) {
  return (
    <Select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value={-1}>Selecione...</option>
      {options.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        );
      })}
    </Select>
  );
}
