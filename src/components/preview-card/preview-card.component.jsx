import {
  Container,
  Image,
  Title,
  Subtitle,
  Text,
  Content,
} from "./preview-card.style";

const PreviewCard = ({ cardContent, images }) => {
  const cardContentArray = Object.entries(cardContent);
  const cardImage = images[`${cardContent.id}`];

  return cardContent ? (
    <Container>
      <Image url={cardImage} />
      <Title>{cardContent.name}</Title>
      {cardContentArray.map((cardContentProps) => {
        if (cardContentProps[0] === "name" || cardContentProps[0] === "id")
          return;
        return (
          <Content>
            <Subtitle>{cardContentProps[0].toUpperCase()}</Subtitle>
            <Text>{cardContentProps[1]}</Text>
          </Content>
        );
      })}
    </Container>
  ) : null;
};

export default PreviewCard;
