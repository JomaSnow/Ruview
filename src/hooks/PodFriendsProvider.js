import React, { createContext, useContext, useEffect, useState } from "react";
import { useSolid } from "./SolidProvider";
import {
  addSolidFriend,
  getSolidFriends,
  removeSolidFriend,
} from "../api/functions/solid";

const PodFriendsContext = createContext();
const PodFriendsUpdateContext = createContext();

export function usePodFriends() {
  return useContext(PodFriendsContext);
}

export function usePodFriendsUpdate() {
  return useContext(PodFriendsUpdateContext);
}

export function PodFriendsProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [loadingFriends, setLoadingFriends] = useState(false);
  const [errorOcurred, setErrorOcurred] = useState(null);

  const webId = useSolid();

  useEffect(() => {
    if (webId) {
      setLoadingFriends(true);
      getSolidFriends()
        .then((res) => {
          setFriends(res);
        })
        .catch((e) => {
          setErrorOcurred(e);
        })
        .finally(() => {
          setLoadingFriends(false);
        });
    }
  }, [webId]);

  async function addFriend(friendWebId) {
    setLoadingFriends(true);

    try {
      await addSolidFriend(friendWebId);

      const newFriendsArr = await getSolidFriends();

      setFriends(newFriendsArr);
    } catch (error) {
      setErrorOcurred("Ocorreu um erro ao adicionar amigo.");

      console.error(error);
    }
    setLoadingFriends(false);
  }

  async function removeFriend(friendWebId) {
    setLoadingFriends(true);

    try {
      await removeSolidFriend(friendWebId);

      const newFriendsArr = await getSolidFriends();

      setFriends(newFriendsArr);
    } catch (error) {
      setErrorOcurred("Ocorreu um erro ao remover amigo.");

      console.error(error);
    }
    setLoadingFriends(false);
  }

  return (
    <PodFriendsContext.Provider
      value={{
        friends,
        loadingFriends,
        error: errorOcurred,
      }}
    >
      <PodFriendsUpdateContext.Provider value={{ addFriend, removeFriend }}>
        {children}
      </PodFriendsUpdateContext.Provider>
    </PodFriendsContext.Provider>
  );
}
