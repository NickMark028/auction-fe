import React from 'react';

interface Props {}

const TopProductsShowcase = (props: Props) => {
  return (
    <div className="row">
      {relatedProduct.map((item) => (
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              style={{
                backgroundImage: `url(${item.coverImageURL})`,
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
                <a href="#">{item.name}</a>
              </h6>
              <h6>Bid Price: {item.currentPrice}</h6>
              <h6>
                Top bidder: {item.bidderFirst} {item.bidderLast}
              </h6>
              <h6>Count: {item.auctionLogCount}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopProductsShowcase;
