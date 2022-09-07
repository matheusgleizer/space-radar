import { useContext } from 'react';
import { RocketsContext } from '../../contexts/rockets.context';
import PreviewPage from '../../pages/preview/preview.page';
import { Title } from '../missions/missions.style';

const Rockets = () => {
  const { rockets, images } = useContext(RocketsContext);

  return (
    <>
      <Title>Rockets</Title>
      <PreviewPage data={rockets} images={images} title='Rockets' />
    </>
  );
};

export default Rockets;
