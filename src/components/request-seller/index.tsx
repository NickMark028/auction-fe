<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

import axiosClient from 'utils/axiosClient';
export const RequestToSeller: React.FC = () => {
  return (
    <>
      <h5>Do you want to become seller? </h5>
      <button
        onClick={() => {
          axiosClient.post(
            `/api/bidder/changeRole/${localStorage.getItem('auction-user-id')}`
          );
          window.alert('WELCOM NEW SELLER!!');
        }}
      >
        YES
      </button>
    </>
  );
};
=======
import React, { useEffect, useState } from 'react';

import axiosClient from 'utils/axiosClient';
export const RequestToSeller: React.FC = () => {
  return (
    <div>
      <h5>Do you want to become seller? </h5>
      <button
        onClick={() => {
          axiosClient.post(
            `/api/bidder/changeRole/${localStorage.getItem('id')}`
          );
          window.alert('Wait for admin check!!');
        }}
      >
        YES
      </button>
    </div>
  );
};
>>>>>>> thanh_FE
