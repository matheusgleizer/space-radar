import { createContext, useEffect, useState } from "react";
import axios from "axios";

const apiEndpoint = "http://localhost:5050/getRockets";

const apiConfig = {
  method: "Get",
  headers: {
    "Content-Type": "application/json",
  },
};

export const RocketsContext = createContext({
  rockets: [],
  setSelectedRocket: () => {},
});

export const rocketImages = {
  falcon1:
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Falcon_1_Flight_4_liftoff.jpg",
  falcon9:
    "https://www.fromspacewithlove.com/wp-content/uploads/2018/05/falcon-9.png",
  falconheavy: "https://space.nss.org/wp-content/uploads/falcon-heavy.jpg",
  starship:
    "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg",
};

export const RocketsProvider = ({ children }) => {
  const [rockets, setRockets] = useState([]);
  const [selectedRocket, setSelectedRocket] = useState("");
  const [images, setImages] = useState(rocketImages);

  useEffect(() => {
    axios
      .get(apiEndpoint + "?q=rockets", apiConfig)
      .then((result) => setRockets(result.data))
      .catch((err) => console.log(err));
  }, []);

  const value = { rockets, setSelectedRocket, images };

  return (
    <RocketsContext.Provider value={value}>{children}</RocketsContext.Provider>
  );
};
