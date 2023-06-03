/* eslint eqeqeq: "off" */
import React, { useRef, useState } from "react";
import Display from "./Display";
import {
  getDefaultSession,
  handleIncomingRedirect,
  login,
} from "@inrupt/solid-client-authn-browser";

export default function Navbar({ currentPage = 0 }) {
  const [modalToggle, setModalToggle] = useState(false);
  const [podUrl, setPodUrl] = useState("");
  const modalRef = useRef(null);

  function handleModalToggle() {
    setModalToggle(!modalToggle);
  }

  async function loginAndFetch() {
    await handleIncomingRedirect();

    if (!getDefaultSession().info.isLoggedIn) {
      await login({
        oidcIssuer: podUrl,
        redirectUrl: window.location.href,
        clientName: "Ruview",
      });
    } else {
      console.log(getDefaultSession().info.webId);
    }
  }

  function handleLogIn() {
    loginAndFetch();
  }

  return (
    <Display
      currentPage={currentPage}
      handleModalToggle={handleModalToggle}
      modalToggle={modalToggle}
      modalRef={modalRef}
      podUrl={podUrl}
      setPodUrl={setPodUrl}
      handleLogIn={handleLogIn}
    />
  );
}
