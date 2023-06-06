import {
  getDefaultSession,
  handleIncomingRedirect,
} from "@inrupt/solid-client-authn-browser";
import React, { createContext, useContext, useEffect, useState } from "react";

const SolidContext = createContext();
const SolidUpdateContext = createContext();

export function useSolid() {
  return useContext(SolidContext);
}

export function useSolidUpdate() {
  return useContext(SolidUpdateContext);
}

export function SolidProvider({ children }) {
  const [webId, setWebId] = useState();

  useEffect(() => {
    async function updateWebId() {
      await handleIncomingRedirect({ restorePreviousSession: true });
      const currentWebId = getDefaultSession().info.webId;
      if (currentWebId) {
        setWebId(currentWebId);
      }
    }
    updateWebId();
  }, [webId]);

  // modificar value pra trazer também a lista de pratos que user gosta (ou criar novo provider que traz a lista dele e dos amigos logo)
  return (
    <SolidContext.Provider value={webId}>
      <SolidUpdateContext.Provider value={setWebId}>
        {children}
      </SolidUpdateContext.Provider>
    </SolidContext.Provider>
  );
}
