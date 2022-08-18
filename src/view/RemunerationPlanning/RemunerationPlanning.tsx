import {
  RemunerationPlanningAbout,
  RemunerationPlanningHeader,
  RemunerationPlanningJoin,
} from 'components/pages/RemunerationPlanning';
import React from 'react';

const RemunerationPlanning = () => {
  return (
    <>
      <RemunerationPlanningHeader />
      <RemunerationPlanningAbout />
      <RemunerationPlanningJoin />
    </>
  );
};

export default RemunerationPlanning;
