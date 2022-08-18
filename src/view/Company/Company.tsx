import {
  CompanyAbout,
  ChooseProfile,
  CompanyHeader,
} from 'components/pages/Company';
import React from 'react';

const Company = () => {
  return (
    <>
      <CompanyHeader />
      <CompanyAbout />
      <ChooseProfile />
    </>
  );
};

export default Company;
