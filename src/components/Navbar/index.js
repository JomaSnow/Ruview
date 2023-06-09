/* eslint eqeqeq: "off" */
import React, { useRef, useState } from "react";
import Display from "./Display";
import { useSolidUpdate } from "../../hooks/SolidProvider";
import { solidLogin, solidLogout } from "../../api/functions/auth";

export default function Navbar({ currentPage = 0 }) {
  const [modalToggle, setModalToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [podUrl, setPodUrl] = useState("");
  const modalRef = useRef(null);
  const { setWebId } = useSolidUpdate();

  function handleModalToggle() {
    setModalToggle(!modalToggle);
  }

  async function handleLogIn() {
    setLoading(true);
    try {
      await solidLogin(setWebId, podUrl);
    } catch (e) {
      alert(e);
    }
    setLoading(false);
  }

  async function handleLogOut() {
    setLoading(true);
    await solidLogout();
    setLoading(false);
  }

  return (
    <Display
      currentPage={currentPage}
      handleModalToggle={handleModalToggle}
      modalToggle={modalToggle}
      loading={loading}
      modalRef={modalRef}
      podUrl={podUrl}
      setPodUrl={setPodUrl}
      handleLogIn={handleLogIn}
      handleLogOut={handleLogOut}
    />
  );
}
