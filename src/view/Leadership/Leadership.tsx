import {
  LeadershipAbout,
  LeadershipHeader,
  LeadershipJoin,
} from 'components/pages/Leadership';
import React from 'react';

const Leadership = () => {
  return (
    <>
      <LeadershipHeader />
      <LeadershipAbout />
      <LeadershipJoin />
    </>
  );
};

export default Leadership;
