import React, { useEffect, useState } from 'react';
import axiosClient from 'utils/axiosClient';
import moment from 'moment';
export const BidderProduct: React.FC = () => {
  const [bidderProduct, setbidderProduct] = useState([]);
  useEffect(() => {
    setTimeout(async () => {
      axiosClient
        .get(`/api/bidder/product-bidded/${localStorage.getItem('id')}`)
        .then((res) => setbidderProduct(res.data));
    });
  }, []);
  return (
    <div className="App">
      <div className="product__details__tab__desc" style={{ overflow: 'auto' }}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price Bid</th>
              <th>Current Price</th>
              <th>Time Exprired</th>

              <th>Auction log count</th>
              <th>Bid At</th>
            </tr>
          </thead>
          <tbody id="category-container">
            {bidderProduct?.map((bidderP, index) => (
              <tr key={index}>
                <td>{bidderP.name}</td>
                <td> {bidderP.price} </td>
                <td> {bidderP.currentPrice} </td>
                <td>{moment(bidderP.timeExpired).fromNow()}</td>

                <td>{bidderP.auctionLogCount}</td>

                <td>
                  {moment(bidderP.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
