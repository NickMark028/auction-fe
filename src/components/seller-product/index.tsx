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
              <th>Bid At</th>
            </tr>
          </thead>
          <tbody id="category-container">
            {sellerProduct
              .slice(0)
              .reverse()
              .map((c, index) => (
                <tr key={index}>
                  <td> c.Name </td>
                  <td> {c.price} </td>
                  <td>
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    }).format(Number(Date.parse(c.createdAt)))}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
