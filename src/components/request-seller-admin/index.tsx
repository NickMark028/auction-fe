import { resolve4 } from 'dns';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axiosClient from 'utils/axiosClient';
export const RequestToSellerAdmin: React.FC = () => {
  const [listReq, setListReq] = useState([]);
  useEffect(() => {
    setTimeout(async () => {
      try {
        await axiosClient
          .get('/api/admin/change-role-view')
          .then((res) => setListReq(res.data));
      } catch (error) {}
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">Bidder Id</th>
                <th scope="col">Create At</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {listReq?.map((c, item) => (
                <tr key={item}>
                  <td>{c.id}</td>
                  <td>
                    {' '}
                    {moment(c.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                  </td>
                  <td>{c.message}</td>

                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className="btn-group"
                        style={{ marginBottom: '20px' }}
                      >
                        <button type="button" onClick={() => {}}>
                          {' '}
                          Approve
                        </button>
                        <button type="button" onClick={() => {}}>
                          Deline
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};