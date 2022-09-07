import axios from "axios";

const spaceXApiEndpoint = "https://api.spacex.land/graphql/";

const apiConfig = (query) => ({
  method: "Post",
  headers: {
    "Content-Type": "application/json",
  },
  data: JSON.stringify({
    query: query,
  }),
});

const rocketsQuery = `{
    rockets {
      name
      country
      company
      description
      id
    }
}`;

const missionsQuery = `{
  missions {
    name
    id
    description
    manufacturers
  }
}`


const spaceXMiddleware = async (req, res, next) => {
  const query = req.query.q;
  try {
    if (query === "rockets") {
      await axios(spaceXApiEndpoint, apiConfig(rocketsQuery)).then(
        (res) => (req.data = res.data.data.rockets)
      );
    }
    if (query === "missions") {
      await axios(spaceXApiEndpoint, apiConfig(missionsQuery)).then(
        (res) => (req.data = res.data.data.missions)
      );
    }
  } catch (err) {
    res.status(404)(err.message);
    console.log(err.message, "spaceXMiddleware");
  }
  next();
};

export default spaceXMiddleware;
