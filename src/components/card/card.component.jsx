import { Container, Image, Title, Subtitle, Text, Content } from './card.style';

const Card = ({ cardContent, images }) => {
  const cardContentArray = Object.entries(cardContent);
  const cardImage = images[`${cardContent.id}`];

  return cardContent ? (
    <Container>
      <Image url={cardImage} />
      <Title>{cardContent.name}</Title>
      {cardContentArray.map((cardContentProps, index) => {
        if (cardContentProps[0] === 'name' || cardContentProps[0] === 'id')
          return null;
        return (
          <Content key={index}>
            <Subtitle>{cardContentProps[0].toUpperCase()}</Subtitle>
            <Text>{cardContentProps[1]}</Text>
          </Content>
        );
      })}
    </Container>
  ) : null;
};

export default Card;
