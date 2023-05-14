import { auth } from "../database-test-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const ADMIN_SESSION_KEY = "aUser";

export const logIn = async (email, password) => {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem(ADMIN_SESSION_KEY, userCred.user.uid);
    return true;
  } catch (e) {
    switch (e.code) {
      case "auth/wrong-password":
        return "E-mail ou senha incorretos.";
      case "auth/user-not-found":
        return "E-mail ou senha incorretos.";
      case "auth/invalid-email":
        return "E-mail inválido.";
      default:
        return `Ocorreu um erro. (${e.code})`;
    }
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    return true;
  } catch (e) {
    return `Ocorreu um erro. (${e})`;
  }
};
