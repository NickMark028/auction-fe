import { PageURL } from 'enum/PageURL';
import { TProduct } from 'models';
import React, { MouseEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axiosClient from 'utils/axiosClient';
import { toggleWatchList } from './api';

interface Props extends TProduct { }

const ProductCover = (props: Props) => {
  const { id, coverImageUrl, currentPrice, topBidder, name, auctionLogCount } = props;
  const history = useHistory();

  function toggleFavorite(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) {
    e.preventDefault();
    toggleWatchList(id);
  }

  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="product__item">
        <Link to={PageURL.Detail.replace(':id', id.toString())}>
          <div
            className="product__item__pic set-bg"
            style={{
              backgroundImage: `url(${coverImageUrl})`,
              width: '100%',
            }}
          >
            <ul className="product__item__pic__hover">
              <li>
                <a onClick={toggleFavorite}>
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
        </Link>

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
