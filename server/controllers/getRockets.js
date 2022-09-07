const getRockets = async (req, res) => {
  res.status(200).json(req.data);
};

export default getRockets;
