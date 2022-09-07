import { useContext } from 'react';
import { MissionsContext } from '../../contexts/missions.context';
import PreviewPage from '../../pages/preview/preview.page';

const Missions = () => {
  const {
    missions,
    images,
    query,
    queryFields,
    setQueryFields,
    missionsQueryFields,
  } = useContext(MissionsContext);

  return (
    <>
      <PreviewPage
        data={missions}
        images={images}
        queryFields={queryFields}
        query={query}
        setQueryFields={setQueryFields}
        initialQueryFields={missionsQueryFields}
        title='Missions'
      />
    </>
  );
};

export default Missions;
