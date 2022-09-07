import axios from 'axios';

const spaceXApiEndpoint = 'https://api.spacex.land/graphql/';

const apiConfigConstructor = (query) => ({
  method: 'Post',
  headers: {
    'Content-Type': 'application/json',
  },
  data: JSON.stringify({
    query: query,
  }),
});

const spaceXMiddleware = async (req, res, next) => {
  console.log(req.body.query);
  const query = req.body.query;
  try {
    await axios(spaceXApiEndpoint, apiConfigConstructor(query)).then(
      (res) => (req.data = res.data.data)
    );
  } catch (err) {
    res.status(404).json(err.message);
    console.log(err.message, 'spaceXMiddleware');
  }
  next();
};

export default spaceXMiddleware;
