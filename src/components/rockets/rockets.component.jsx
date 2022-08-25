import { useContext } from "react";
import { Container, CardsContainer, Title } from "./rockets.style";
import { RocketsContext } from "../../contexts/rockets.context";
import PreviewCard from "../preview-card/preview-card.component";

const Rockets = () => {
  const { rockets, images } = useContext(RocketsContext);

  console.log(rockets);

  return (
    <Container>
      <Title>Rockets</Title>
      <CardsContainer>
        {rockets
          ? rockets.map((rocket) => (
          <PreviewCard cardContent={rocket} images={images}/>
          ))
          : null}
      </CardsContainer>
    </Container>
  );
};

export default Rockets;
