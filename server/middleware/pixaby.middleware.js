import axios from "axios";

const apiKey = "29418977-3393174d5af060dc76d2348c2";
const pixabyApi = `https://pixabay.com/api`;

const pixabyMiddleware = async (req, res, next) => {
  const rockets = [...req.data];

  await Promise.all(
    rockets.map(async (rocket) => {
      await axios
        .get(
          `${pixabyApi}/?key=${apiKey}&q=${rocket.name.replace(
            " ",
            "+"
          )}+rocket`
        )
        .then((res) => (rocket.image = res.data.hits[0].largeImageURL))
        .catch((err) => console.log(err.message, "pixaby"));
    })
  );

  req.data = [...rockets];

  next();
};

export default pixabyMiddleware;
