import { useContext } from 'react';
import { Title } from './missions.style';
import { MissionsContext } from '../../contexts/missions.context';
import PreviewPage from '../../pages/preview/preview.page';
import Filters from '../filters/filters.component';

const Missions = () => {
  const { missions, images, query, queryProperties, setQuery } =
    useContext(MissionsContext);

  return (
    <>
      <Title>Missions</Title>
      {/* <Filters
        queryProperties={queryProperties}
        query={query}
        setQuery={setQuery}
      /> */}
      <PreviewPage data={missions} images={images} title='Missions' />
    </>
  );
};

export default Missions;
