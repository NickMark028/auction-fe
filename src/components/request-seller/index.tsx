import React, { useEffect, useState } from 'react';

import axiosClient from 'utils/axiosClient';
export const RequestToSeller: React.FC = () => {
  return (
    <>
      <h5>Do you want to become seller? </h5>
      <button
        onClick={() => {
          axiosClient.post(
            `/api/bidder/changeRole/${localStorage.getItem('id')}`
          );
          window.alert('WELCOM NEW SELLER!!');
        }}
      >
        YES
      </button>
    </>
  );
};
