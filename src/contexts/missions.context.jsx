import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { missionsImages } from '../assets/missions/missionsImages';
import { missionsQueryFields } from '../assets/missions/missionsQueryFields';
import { queryConstructor } from '../utils/queryConstructor';
import { axiosConfig } from '../utils/axiosConfig';

const apiEndpoint = 'http://localhost:5050/getMissions';

export const MissionsContext = createContext({
  missions: [],
});

const headers = { 'Content-Type': 'application/json' };

const operation = 'missions';

export const MissionsProvider = ({ children }) => {
  const [missions, setMissions] = useState([]);
  const [queryFields, setQueryFields] = useState(missionsQueryFields);
  const [query, setQuery] = useState(queryConstructor(operation, queryFields));

  const images = missionsImages;

  useEffect(() => {
    axios(axiosConfig(apiEndpoint, headers, query))
      .then((result) => setMissions(result.data.missions))
      .catch((err) => console.log(err));
  }, [query]);

  useEffect(() => {
    setQuery(queryConstructor(operation, queryFields));
  }, [queryFields]);

  const value = {
    missions,
    images,
    query,
    queryFields,
    setQueryFields,
    missionsQueryFields,
  };

  return (
    <MissionsContext.Provider value={value}>
      {children}
    </MissionsContext.Provider>
  );
};
