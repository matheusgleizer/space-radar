import React from 'react';
import Card from '../../components/card/card.component';
import { Container, Title, CardsContainer } from './preview.style';
import Filters from '../../components/filters/filters.component';

const PreviewPage = ({ data, images, title, queryFields, query, setQueryFields, initialQueryFields}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Filters
        queryFields={queryFields}
        query={query}
        setQueryFields={setQueryFields}
        initialQueryFields={initialQueryFields}
      />
      <CardsContainer>
        {data
          ? data.map((element, index) => (
              <Card
                cardContent={element}
                images={images}
                key={index}
              />
            ))
          : null}
      </CardsContainer>
    </Container>
  );
};

export default PreviewPage;
