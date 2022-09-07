import React from 'react';
import { Container, FiltersContainer, FilterSpan } from './filters.style';

const removeField = (fieldsArray, filtered) =>
  fieldsArray.filter((field) => field != filtered);

const Filters = ({ queryFields, setQueryFields, initialQueryFields }) => {
  const handleCheckboxChange = (e) => {
    const filtered = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      if (queryFields.includes(filtered)) return;
      setQueryFields([...queryFields, filtered]);
    } else {
      setQueryFields(removeField(queryFields, filtered));
    }
  };

  return (
    <Container>
      <FilterSpan>Filters:</FilterSpan>
      <FiltersContainer>
        {initialQueryFields
          ? initialQueryFields.map((filterValue, index) =>
              filterValue != 'id' && filterValue != 'name' ? (
                <div className='filter-value' key={index}>
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
              ) : null
            )
          : null}
      </FiltersContainer>
    </Container>
  );
};

export default Filters;
