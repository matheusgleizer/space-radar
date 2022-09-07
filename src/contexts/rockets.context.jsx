import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { rocketsImages } from '../assets/rockets/rocketsImages';
import { rocketsQueryFields } from '../assets/rockets/rocketsQueryFields';
import { queryConstructor } from '../utils/queryConstructor';
import { axiosConfig } from '../utils/axiosConfig';

const apiEndpoint = 'http://localhost:5050/getRockets';

const operation = 'rockets';

const headers = { 'Content-Type': 'application/json' };

export const RocketsContext = createContext({
  rockets: [],
});

export const RocketsProvider = ({ children }) => {
  const [rockets, setRockets] = useState([]);
  const [queryFields, setQueryFields] = useState(rocketsQueryFields);
  const [query, setQuery] = useState(queryConstructor(operation, queryFields));

  const images = rocketsImages;

  useEffect(() => {
    axios(axiosConfig(apiEndpoint, headers, query))
      .then((result) => setRockets(result.data.rockets))
      .catch((err) => console.log(err));
  }, [query]);

  useEffect(() => {
    setQuery(queryConstructor(operation, queryFields))
  }, [queryFields])

  const value = {
    rockets,
    images,
    query,
    queryFields,
    setQueryFields,
    rocketsQueryFields,
  };

  return (
    <RocketsContext.Provider value={value}>{children}</RocketsContext.Provider>
  );
};
