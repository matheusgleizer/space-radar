import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { missionsImages } from "../assets/missions/missionsImages";

const apiEndpoint = "http://localhost:5050/getMissions";

const apiConfig = {
  method: "Get",
  headers: {
    "Content-Type": "application/json",
  },
};

export const MissionsContext = createContext({
  missions: [],
});

export const MissionsProvider = ({ children }) => {
  const [missions, setMissions] = useState([]);
  const [query, setQuery] = useState("");
  const queryProperties = [
    "description",
    "id",
    "manufacturers",
    "name",
    "twitter",
    "website",
    "wikipedia",
  ];
  const images = missionsImages;

  useEffect(() => {
    axios(apiEndpoint + "?q=missions", apiConfig)
      .then((result) => setMissions(result.data))
      .catch((err) => console.log(err));
  }, []);

  const value = { missions, images, query, setQuery, queryProperties };

  return (
    <MissionsContext.Provider value={value}>
      {children}
    </MissionsContext.Provider>
  );
};
