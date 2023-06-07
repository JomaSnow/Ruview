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
} from "@inrupt/solid-client";
import { fetch, getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { FOAF } from "@inrupt/vocab-common-rdf";

export async function getLikedMeals() {
  const webId = getDefaultSession().info.webId;
  const myPods = await getPodUrlAll(webId);
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

  fileArr.push({ id: meal.id, tipo_refeicao: meal.tipo_refeicao });

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

export async function getDislikedMeals() {
  const webId = getDefaultSession().info.webId;
  const myPods = await getPodUrlAll(webId);
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

  fileArr.push({ id: meal.id, tipo_refeicao: meal.tipo_refeicao });

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

export async function addFriend(friendWebID) {
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
