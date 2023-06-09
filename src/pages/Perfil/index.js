import { useState } from "react";
import { usePodFriendsUpdate } from "../../hooks/PodFriendsProvider";
import { useSolid } from "../../hooks/SolidProvider";
import Display from "./Display";

export default function PerfilPage() {
  const { webId } = useSolid();
  const [friendValue, setFriendValue] = useState("");
  const { addFriend, removeFriend } = usePodFriendsUpdate();

  async function handleAddFriend() {
    await addFriend(friendValue);
  }

  async function handleRemoveFriend(friendID) {
    await removeFriend(friendID);
  }

  return (
    <>
      {!webId ? (
        <h1>403 não autorizado</h1>
      ) : (
        <Display
          handleAddFriend={handleAddFriend}
          handleRemoveFriend={handleRemoveFriend}
          friendValue={friendValue}
          setFriendValue={setFriendValue}
        />
      )}
    </>
  );
}
