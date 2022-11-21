import {
  Capabilities,
  PersonalAccountHeader,
} from 'components/pages/PersonalAccount';
import React from 'react';

const PersonalAccount = () => {
  return (
    <div className="Ul_Wrapper">
      <div className="Li_Wrapper">
        <PersonalAccountHeader />
      </div>
      <div className="Li_Wrapper">
        <Capabilities />
      </div>
    </div>
  );
};

export default PersonalAccount;
