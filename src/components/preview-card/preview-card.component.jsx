import {
  Container,
  Image,
  Title,
  Subtitle,
  Text,
  Content,
} from "./preview-card.style";

const PreviewCard = ({ cardContent, images }) => {
  console.log(images);
  return cardContent ? (
    <Container>
      <Image url={images[`${cardContent.id}`]} />
      <Title>{cardContent.name}</Title>
      {Object.entries(cardContent).map((cardContentProps) => {
        if (cardContentProps[0] === "name" || cardContentProps[0] === "id")
          return;
        return (
          <Content>
            <Subtitle>{cardContentProps[0].toUpperCase()}</Subtitle>
            <Text>{cardContentProps[1].toUpperCase()}</Text>
          </Content>
        );
      })}
    </Container>
  ) : null;
};

export default PreviewCard;
