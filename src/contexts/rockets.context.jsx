import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { rocketsImages } from "../assets/rockets/rocketsImages";

const apiEndpoint = "http://localhost:5050/getRockets";

const apiConfig = {
  method: "Get",
  headers: {
    "Content-Type": "application/json",
  },
};

export const RocketsContext = createContext({
  rockets: [],
});

export const RocketsProvider = ({ children }) => {
  const [rockets, setRockets] = useState([]);
  const [images, setImages] = useState(rocketsImages);

  useEffect(() => {
    axios
      .get(apiEndpoint + "?q=rockets", apiConfig)
      .then((result) => setRockets(result.data))
      .catch((err) => console.log(err));
  }, []);

  const value = { rockets, images };

  return (
    <RocketsContext.Provider value={value}>{children}</RocketsContext.Provider>
  );
};
