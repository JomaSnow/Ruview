import React from "react";
import Display from "./Display";

export default function Navbar({ currentPage = 0 }) {
  return <Display currentPage={currentPage} />;
}
