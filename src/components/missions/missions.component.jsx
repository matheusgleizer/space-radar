import { useContext } from "react";
import { Container, Title, CardsContainer } from "./missions.style";
import { MissionsContext } from "../../contexts/missions.context";
import PreviewCard from "../preview-card/preview-card.component";

const Missions = () => {
  const { missions, images } = useContext(MissionsContext);
  console.log(missions);

  return (
    <Container>
      <Title>Missions</Title>
      <CardsContainer>
        {missions
          ? missions.map((mission) => (
              <PreviewCard cardContent={mission} images={images} />
            ))
          : null}
      </CardsContainer>
    </Container>
  );
};

export default Missions;
