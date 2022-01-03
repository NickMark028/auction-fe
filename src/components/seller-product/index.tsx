import React, { useEffect, useState } from 'react';
import axiosClient from 'utils/axiosClient';

export const SellerProduct: React.FC = () => {
  const [sellerProduct, setSellerProduct] = useState([]);
  useEffect(() => {
    setTimeout(async () => {
      axiosClient
        .get(`/api/seller/product-selling/${localStorage.getItem('id')}`)
        .then((res) => setSellerProduct(res.data));
    });
  }, []);
  return (
    <>
      <div className="product__details__tab__desc" style={{ overflow: 'auto' }}>
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
                <td>{auctionLog.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
