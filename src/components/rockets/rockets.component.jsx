import { useContext } from 'react';
import { RocketsContext } from '../../contexts/rockets.context';
import PreviewPage from '../../pages/preview/preview.page';

const Rockets = () => {
  const {
    rockets,
    images,
    query,
    queryFields,
    setQueryFields,
    rocketsQueryFields,
  } = useContext(RocketsContext);

  return (
    <>
      <PreviewPage
        data={rockets}
        images={images}
        title='Rockets'
        queryFields={queryFields}
        query={query}
        setQueryFields={setQueryFields}
        initialQueryFields={rocketsQueryFields}
      />
    </>
  );
};

export default Rockets;
