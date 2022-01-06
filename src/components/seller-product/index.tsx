import React, { useEffect, useState } from 'react';
import axiosClient from 'utils/axiosClient';
import moment from 'moment';
export const SellerProduct: React.FC = () => {
  const [sellerProduct, setSellerProduct] = useState([]);
  const [checkrole, setCheckRole] = useState([]);
  useEffect(() => {
    setTimeout(async () => {
      axiosClient
        .get(
          `/api/seller/product-selling/${localStorage.getItem(
            'auction-user-id'
          )}`
        )
        .then((res) => setSellerProduct(res.data));

      async function role() {
        return await axiosClient.get(
          `/api/seller/checkrole/${localStorage.getItem('auction-user-id')}`
        );
      }

      role().then((res) => {
        setCheckRole(res.data);
      });
    });
  }, []);
  // console.log(checkrole);
  if (!checkrole) {
    return (
      <>
        <img src="./asset/img/hand-1200.png" alt="" width={'50%'} />
        <h2>You are not a seller!!Please become a seller! </h2>
      </>
    );
  } else {
    return (
      <>
        <div
          className="product__details__tab__desc"
          style={{ overflow: 'auto' }}
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Bidder Name</th>
                <th>Price</th>
                <th>Current Price</th>
                <th>Auction Log Count</th>
                <th>Bidder count</th>
                <th>Bid At</th>
              </tr>
            </thead>
            <tbody id="category-container">
              {sellerProduct?.map((auctionLog, index) => (
                <tr key={index}>
                  <td>{auctionLog.name}</td>
                  <td> {auctionLog.reservedPrice} </td>
                  <td> {auctionLog.currentPrice} </td>
                  <td>{auctionLog.auctionLogCount}</td>
                  <td>{auctionLog.bidderCount}</td>
                  <td>
                    {' '}
                    {moment(auctionLog.createdAt).format(
                      'MMMM Do YYYY, h:mm:ss a'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
};
