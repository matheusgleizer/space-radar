import { createApi } from "unsplash-js";
import nodeFetch from "node-fetch";
import axios from "axios";

const unsplash = createApi({
  accessKey: "rHLePCM7xxBWtdnZmiTwtvirjZhlDfWyuil6RpC0NyA",
  fetch: nodeFetch,
  headers: { "X-Custom-Header": "foo" },
});

const unsplashEndpoint = (query) =>
  `https://api.unsplash.com/search/photos?page=1&query=rocket`

const getImage = async (rocket) => {
  await unsplash.search
    .getPhotos({
      query: rocket.name,
      page: 1,
      perPage: 1,
      orientation: "portrait",
    })
    .then((result) => {
      switch (result.type) {
        case "error":
          console.log("error occurred: ", result.errors[0]);
        case "success":
          rocket.image = result.response;
          console.log(result.response.results, 'photo');
      }
    });

  // return await axios
  //   .get(unsplashEndpoint(rocket.name))
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err.message));
};

const unsplashMiddleware = (req, res, next) => {
  console.log(req.data);
  const rockets = [...req.data];

  rockets.map(async (rocket) => {
    await getImage(rocket).then((res) =>
      console.log(res, "resposta em unsplashMiddleware")
    );
  });

  next();
};

export default unsplashMiddleware;
