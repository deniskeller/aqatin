import {
  InfluencersDescription,
  InfluencersForm,
  InfluencersHeader,
} from 'components/pages/Influencers';
import React from 'react';

const Influencers = () => {
  return (
    <>
      <InfluencersHeader />
      <InfluencersDescription />
      <InfluencersForm />
    </>
  );
};

export default Influencers;
