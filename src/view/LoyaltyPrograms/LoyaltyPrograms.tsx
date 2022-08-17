import {
  LoyaltyProgramsAbout,
  LoyaltyProgramsHeader,
  LoyaltyProgramsInfo,
} from 'components/pages/LoyaltyPrograms';
import React from 'react';

const LoyaltyPrograms = () => {
  return (
    <>
      <LoyaltyProgramsHeader />
      <LoyaltyProgramsInfo />
      <LoyaltyProgramsAbout />
    </>
  );
};

export default LoyaltyPrograms;
