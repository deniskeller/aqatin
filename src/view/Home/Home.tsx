import {
  AboutProfile,
  Benefits,
  ChooseProfile,
  Company,
  GoodFor,
  Header,
  OurServices,
} from 'components/pages';
import React from 'react';

const Home = () => {
  return (
    <>
      <Header />
      <OurServices />
      <Benefits />
      <Company />
      <GoodFor />
      <ChooseProfile />
      <AboutProfile />
    </>
  );
};

export default Home;
