/* eslint eqeqeq: "off" */
import {
  getPodUrlAll,
  overwriteFile,
  getFile,
  getSolidDataset,
  getThing,
  getUrlAll,
  buildThing,
  setThing,
  saveSolidDatasetAt,
  getLiteral,
} from "@inrupt/solid-client";
import { fetch, getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { FOAF } from "@inrupt/vocab-common-rdf";

export async function getLikedMeals(webId) {
  let id = webId;

  if (!webId) {
    id = getDefaultSession().info.webId;
  }

  const myPods = await getPodUrlAll(id);

  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/ruview/likedMeals.json";

  try {
    const likedMeals = await getFile(targetFileURL, { fetch: fetch });

    const blob = await new Response(likedMeals).text();

    const json = JSON.parse(blob);

    return json;
  } catch (e) {
    if (e.message.includes("404")) {
      return [];
    }
    console.error("Ocorreu um erro no getLikedMeals.");
    console.error(e);
    throw new Error(e);
  }
}

export async function addLikedMeal(meal) {
  const webId = getDefaultSession().info.webId;
  const myPods = await getPodUrlAll(webId);
  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/ruview/likedMeals.json";

  const fileArr = await getLikedMeals();

  fileArr.push({
    id: meal.id,
    tipo_refeicao: meal.tipo_refeicao,
    nome: meal.nome,
  });

  try {
    await overwriteFile(
      targetFileURL, // URL for the file.
      JSON.stringify(fileArr), // File
      { contentType: "application/json", fetch: fetch } // mimetype if known, fetch from the authenticated session
    );
  } catch (error) {
    if (error.message.includes("Cannot assign to read only")) {
      console.warn(error);
    } else {
      console.error(error);
    }
  }
}

export async function getDislikedMeals(webId) {
  let id = webId;

  if (!webId) {
    id = getDefaultSession().info.webId;
  }

  const myPods = await getPodUrlAll(id);

  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/ruview/dislikedMeals.json";

  try {
    const likedMeals = await getFile(targetFileURL, { fetch: fetch });

    const blob = await new Response(likedMeals).text();

    const json = JSON.parse(blob);

    return json;
  } catch (e) {
    if (e.message.includes("404")) {
      return [];
    }
    console.error("Ocorreu um erro no getDislikedMeals.");
    console.error(e);
    throw new Error(e);
  }
}

export async function addDislikedMeal(meal) {
  const webId = getDefaultSession().info.webId;
  const myPods = await getPodUrlAll(webId);
  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/ruview/dislikedMeals.json";

  const fileArr = await getDislikedMeals();

  fileArr.push({
    id: meal.id,
    tipo_refeicao: meal.tipo_refeicao,
    nome: meal.nome,
  });

  try {
    await overwriteFile(
      targetFileURL, // URL for the file.
      JSON.stringify(fileArr), // File
      { contentType: "application/json", fetch: fetch } // mimetype if known, fetch from the authenticated session
    );
  } catch (error) {
    if (error.message.includes("Cannot assign to read only")) {
      console.warn(error);
    } else {
      console.error(error);
    }
  }
}

export async function undoLike(meal) {
  const webId = getDefaultSession().info.webId;
  const myPods = await getPodUrlAll(webId);
  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/ruview/likedMeals.json";

  try {
    const likedMeals = await getLikedMeals();

    const fileArr = likedMeals.filter((m) => {
      return m.id != meal.id;
    });

    await overwriteFile(
      targetFileURL, // URL for the file.
      JSON.stringify(fileArr), // File
      { contentType: "application/json", fetch: fetch } // mimetype if known, fetch from the authenticated session
    );
  } catch (e) {
    if (e.message.includes("Cannot assign to read only")) {
      console.warn(e);
    } else {
      console.error(e);
    }
  }
}

export async function undoDislike(meal) {
  const webId = getDefaultSession().info.webId;
  const myPods = await getPodUrlAll(webId);
  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/ruview/dislikedMeals.json";

  try {
    const dislikedMeals = await getDislikedMeals();

    const fileArr = dislikedMeals.filter((m) => {
      return m.id != meal.id;
    });

    await overwriteFile(
      targetFileURL, // URL for the file.
      JSON.stringify(fileArr), // File
      { contentType: "application/json", fetch: fetch } // mimetype if known, fetch from the authenticated session
    );
  } catch (e) {
    if (e.message.includes("Cannot assign to read only")) {
      console.warn(e);
    } else {
      console.error(e);
    }
  }
}

export async function getSolidFriends() {
  const webId = getDefaultSession().info.webId;
  const dataSet = await getSolidDataset(webId, { fetch: fetch }); // dataset card

  const thing = getThing(dataSet, webId); // :me thing ()

  const friendsObjArr = [];

  try {
    const currentFriendsUrl = getUrlAll(thing, FOAF.knows);

    for (const url of currentFriendsUrl) {
      const friendDataSet = await getSolidDataset(url, { fetch: fetch });

      const friendThing = getThing(friendDataSet, url);

      const nome = getLiteral(friendThing, FOAF.name).value;
      const friendWebId = url;
      const likedMeals = await getLikedMeals(url);
      const dislikedMeals = await getDislikedMeals(url);

      const friendObj = { nome, friendWebId, likedMeals, dislikedMeals };

      friendsObjArr.push(friendObj);
    }

    return friendsObjArr;
  } catch (error) {
    console.error(error);
    throw new Error("Ocorreu um erro");
  }
}

export async function addSolidFriend(friendWebID) {
  const webId = getDefaultSession().info.webId;
  let dataSet = await getSolidDataset(webId, { fetch: fetch }); // dataset card

  let thing = getThing(dataSet, webId); // :me thing ()

  try {
    let currentFriendsUrl = getUrlAll(thing, FOAF.knows);
    if (currentFriendsUrl.some((url) => url === friendWebID)) {
      return "Vocês já são amigos";
    } else {
      // Friend as thing
      let newFriend = buildThing(thing).addUrl(FOAF.knows, friendWebID).build();

      // insert friend in dataset
      dataSet = setThing(dataSet, newFriend);
      dataSet = await saveSolidDatasetAt(webId, dataSet, { fetch: fetch });
      return null;
    }
  } catch (error) {
    return "Ocorreu um erro";
  }
}

export async function removeSolidFriend(friendWebID) {
  const webId = getDefaultSession().info.webId;
  let dataSet = await getSolidDataset(webId, { fetch: fetch }); // dataset card

  let thing = getThing(dataSet, webId); // :me thing ()

  try {
    let currentFriendsUrl = getUrlAll(thing, FOAF.knows);
    if (currentFriendsUrl.every((url) => url !== friendWebID)) {
      return "Amigo não encontrado";
    } else {
      // Friend to remove
      let newFriendsAfterRemoval = buildThing(thing)
        .removeUrl(FOAF.knows, friendWebID)
        .build();

      // insert new friends in dataset
      dataSet = setThing(dataSet, newFriendsAfterRemoval);

      dataSet = await saveSolidDatasetAt(webId, dataSet, { fetch: fetch });
      return null;
    }
  } catch (error) {
    console.error(error);
    return "Ocorreu um erro";
  }
}
