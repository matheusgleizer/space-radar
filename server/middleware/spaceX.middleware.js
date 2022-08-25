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

const rockets = `{
    rockets {
      name
      country
      company
      description
      id
    }
}`;

const missions = `{
  missions {
    name
    id
    description
  }
}`


const spaceXMiddleware = async (req, res, next) => {
  console.log(req.query, "aqui");
  const query = req.query.q;
  try {
    if (query === "rockets") {
      await axios(spaceXApiEndpoint, apiConfig(rockets)).then(
        (res) => (req.data = res.data.data.rockets)
      );
    }
    if (query === "missions") {
      await axios(spaceXApiEndpoint, apiConfig(missions)).then(
        (res) => (req.data = res.data.data.missions)
      );
    }
  } catch (err) {
    res.err(err);
    console.log(err.message, "spaceXMiddleware");
  }
  next();
};

export default spaceXMiddleware;
