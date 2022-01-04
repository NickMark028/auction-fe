import React, { useEffect, useState } from 'react';

import axiosClient from 'utils/axiosClient';

export const RequestToSeller: React.FC = () => {
  const [checkrole, setRole] = useState([]);
  useEffect(() => {
    setTimeout(async () => {
      async function role() {
        return await axiosClient.get(
          `/api/seller/checkrole/${localStorage.getItem('auction-user-id')}`
        );
      }
      role().then((res) => {
        setRole(res.data);
      });
    });
  }, []);

  if (checkrole) {
    return <h5>You are a seller </h5>;
  } else
    return (
      <>
        <h5>Do you want to become seller? </h5>
        <button
          onClick={() => {
            axiosClient.post(
              `/api/bidder/changeRole/${localStorage.getItem(
                'auction-user-id'
              )}`
            );
            window.alert('WAIT admin approve!!');
            window.location.reload();
          }}
        >
          YES
        </button>
      </>
    );
};
