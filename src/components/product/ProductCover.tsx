import { PageURL } from 'enum/PageURL';
import { TProduct } from 'models';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

interface Props extends TProduct {}

const ProductCover = (props: Props) => {
  const { id, coverImageUrl, currentPrice, topBidder, name, auctionLogCount } =
    props;

  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="product__item">
        <div
          className="product__item__pic set-bg"
          style={{
            backgroundImage: `url(${coverImageUrl})`,
            width: '100%',
          }}
        >
          <ul className="product__item__pic__hover">
            <li>
              <a href="#">
                <i className="fa fa-heart" />
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-gavel" />
              </a>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6>
            <a href="#">{name}</a>
          </h6>
          <h6>Bid Price: {currentPrice}</h6>
          <h6>
            Top bidder: {topBidder?.firstName} {topBidder?.lastName}
          </h6>
          <h6>Count: {auctionLogCount}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCover;