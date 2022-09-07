import React from 'react'
import PreviewCard from '../../components/preview-card/preview-card.component';
import { Container, Title, CardsContainer } from './preview.style';

const PreviewPage = ({data, images}) => {
  return (
    <Container>
    <CardsContainer>
      {data
        ? data.map((element) => (
            <PreviewCard cardContent={element} images={images} />
          ))
        : null}
    </CardsContainer>
  </Container>
  )
}

export default PreviewPage;
