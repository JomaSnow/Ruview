import React, { useEffect, useRef } from "react";
// import { Input } from "./styles";

export default function Display({ value, setValue = () => {} }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!value) {
      inputRef.current.value = "";
    }
  }, [value]);

  return (
    <div>
      {value && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(value)}
          />
          <br />
          <button onClick={() => setValue(null)}>Remove</button>
        </div>
      )}
      <br />
      <br />

      <input
        ref={inputRef}
        type="file"
        name="myImage"
        onChange={(event) => {
          setValue(event.target.files[0]);
        }}
      />
    </div>
  );
}
