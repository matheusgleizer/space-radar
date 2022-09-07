import React from 'react';
import { Container } from './filters.style';
import * as gql from 'gql-query-builder';
import { useState, useEffect } from 'react';

const queryConstructor = (operation, fields) =>
  gql.query({
    operation: operation,
    fields: fields,
  });

const removeField = (fieldsArray, target) =>
  fieldsArray.filter((field) => field != target);


const Filters = ({ queryProperties, query, setQuery }) => {
  console.log(`queryProps: ${queryProperties} \nquery: ${query}`);
  const [queryFields, setQueryFields] = useState([]);

  const handleCheckboxChange = (e) => {
    const queryField = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      if (queryFields.includes(queryField)) return;
      setQueryFields([...queryFields, queryField]);
    } else {
      setQueryFields(removeField(queryFields, queryField));
    }
  };

  useEffect(() => {
    setQuery(queryConstructor(query, queryFields))
    console.log(query)
  }, [queryFields])
  

  return (
    <Container>
      {queryProperties
        ? queryProperties.map((filterValue) => (
            <div>
              <span>{filterValue}:</span>
              <input
                type='checkbox'
                name={filterValue}
                defaultChecked={true}
                id={filterValue}
                value={filterValue}
                onChange={handleCheckboxChange}
              />
            </div>
          ))
        : null}
    </Container>
  );
};

export default Filters;
