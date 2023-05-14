import React, { useEffect, useState } from "react";
import Display from "./LoginForm";
import { ADMIN_SESSION_KEY, logIn, logOut } from "../../api/functions/auth";
import Dashboard from "./Dashboard";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const user = sessionStorage.getItem(ADMIN_SESSION_KEY);
    if (user) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const handleSubmit = async () => {
    setErrorMessage("");
    setLoading(true);
    const res = await logIn(email, password);
    setLoading(false);
    if (res === true) {
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
    } else {
      setErrorMessage(res);
    }
  };

  const handleLogout = async () => {
    const res = await logOut();
    console.log(res);
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <Dashboard handleLogOut={handleLogout} />
  ) : (
    <Display
      loading={loading}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
    />
  );
}
