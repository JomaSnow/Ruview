import {
  // getContentType,
  getFile,
  getPodUrlAll,
  // getSourceUrl,
  // isRawData,
} from "@inrupt/solid-client";
import { useEffect, useState } from "react";

export default function Name() {
  const [myPod, setMyPod] = useState();
  const [likedMealsJson, setLikedMealsJson] = useState();
  const [likedMeals, setLikedMeals] = useState();
  const webId = "https://jomasnow.inrupt.net/profile/card#me";

  useEffect(() => {
    async function getPods() {
      const mypods = await getPodUrlAll(webId, { fetch: fetch });
      setMyPod(mypods[0]);
    }
    getPods();
  }, []);

  useEffect(() => {
    async function readFileFromPod(fileURL) {
      try {
        // file is a Blob (see https://developer.mozilla.org/docs/Web/API/Blob)
        const file = await getFile(
          fileURL // File in Pod to Read
          // { fetch: fetch } // fetch from authenticated session
        );

        // console.log(
        //   `Fetched a ${getContentType(file)} file from ${getSourceUrl(file)}.`
        // );
        // console.log(`The file is ${isRawData(file) ? "not " : ""}a dataset.`);
        setLikedMealsJson(file);
      } catch (err) {
        console.log(err);
      }
    }
    readFileFromPod(`${myPod}/public/publicTest.json`);
  }, [myPod]);

  useEffect(() => {
    console.log(likedMealsJson);
    async function setMeal() {
      const text = await new Response(likedMealsJson).text();
      setLikedMeals(text);
    }
    setMeal();
  }, [likedMealsJson]);

  return <span>{likedMeals}</span>;
}
