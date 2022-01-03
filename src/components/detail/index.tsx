import React, { useEffect, useState } from 'react';
//import { render } from "react-dom";

import { instance } from 'utils/utils';
import OwlCarousel from 'react-owl-carousel';
import Countdown from 'react-countdown';
import socket from 'utils/socket';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProductDetailsTC } from 'redux/slices/product-details/getProductDetails';
import { selectProductDetails } from 'redux/selectors';
import { useAppDispatch, useAppSelector } from 'redux/store';
import axiosClient from 'utils/axiosClient';
import { Container } from 'react-bootstrap';

export const Detail: React.FC = () => {
  const dispatch = useAppDispatch();

  const history = useHistory();
  const productDetails = useAppSelector(selectProductDetails);
  const [relatedProduct, SetrelatedProduct] = useState([]);
  const [bid, setBid] = useState([]);
  const [price, setPrice] = useState<Number>();

  useEffect(() => {
    setTimeout(async () => {
      // console.log(history.location.pathname);
      const pathname = history.location.pathname;
      const id = pathname.slice(9);

      const data = await dispatch(getProductDetailsTC(id)).unwrap();

      axiosClient
        .get(`/api/product/related/${data.section}`)
        .then((res) => SetrelatedProduct(res.data));
      axiosClient
        .get(`/api/auction/${data.id}`)
        .then((res) => setBid(res.data));
    });
  }, []);

  useEffect(() => {
    socket.on('updatebid', async (c) => {
      // setUpdate(data);
      setBid([...bid, c]);
    });
  }, []);

  // ${productDetails.data?.section}

  //gửi một bid mới

  function send() {
    socket.emit('bid', {
      bidderName:
        localStorage.getItem('firstName') + localStorage.getItem('lastName'),
      price: price,
      bidAt: new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(Date.now()),
    });
    //call api luu auctionLog
  }
  //lắng nghe và in ra
  //const[update,setUpdate] = useState([]);

  return (
    <div>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  {productDetails.status === 'success' && (
                    <img
                      className="product__details__pic__item--large"
                      src={productDetails.data?.coverImageURL}
                    />
                  )}
                </div>

                <OwlCarousel
                  className="product__details__pic__slider "
                  loop
                  items={4}
                  autoplay
                >
                  {productDetails.status === 'success' && (
                    <>
                      <img src={productDetails.data?.urls[0]} alt="" />
                      <img src={productDetails.data?.urls[1]} alt="" />
                      <img src={productDetails.data?.urls[2]} alt="" />
                    </>
                  )}
                </OwlCarousel>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{}</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                  <span>(18 reviews)</span>
                </div>
                {productDetails.status == 'success' && (
                  <>
                    <div className="product__details__price">
                      Curent Price: {productDetails.data.currentPrice}
                    </div>
                    <div className="product__details__price">
                      Price Step: {productDetails.data.priceStep}
                    </div>
                    <div className="product__details__price">
                      <Countdown
                        date={
                          Date.now() +
                          Number(Date.parse(productDetails.data.timeExpired)) /
                            1000
                        }
                      />
                    </div>
                    <div className="product__details__price">
                      Create:{' '}
                      {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      }).format(Date.parse(productDetails.data.createdAt))}
                    </div>
                  </>
                )}
                <div className="product__details__quantity">
                  <label>BID Price:</label>
                  <div className="pro-qty">
                    <input
                      id="price"
                      type="number"
                      defaultValue={1000}
                      step={Number(productDetails.data?.priceStep)}
                      onChange={(e) => {
                        setPrice(Number(e.target.value));
                      }}
                    />
                    {/* add price + step */}
                  </div>
                </div>
                <button type="button" className="primary-btn" onClick={send}>
                  BID
                </button>
                <a href="#" className="heart-icon">
                  <span className="icon_heart_alt=" />
                </a>
                <ul>
                  <li>
                    <b>Bidder Count</b>{' '}
                    <span>{productDetails.data?.bidderCount}</span>
                  </li>
                  <li>
                    <b>seller: </b>{' '}
                    <span>
                      {productDetails.data?.seller.firstName}{' '}
                      {productDetails.data?.seller.lastName}
                    </span>
                  </li>
                  <li>
                    <b>Evaluate: </b>{' '}
                    <span>
                      {Number(productDetails.data?.negativeCount)} +{' '}
                      {Number(productDetails.data?.positiveCount)}{' '}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Bid History
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-selected="false"
                    >
                      Reviews{' '}
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div
                      id="bidinfo"
                      className="product__details__tab__desc"
                      style={{ overflow: 'auto' }}
                    >
                      <h6>Bid History</h6>
                      {bid.map((c) => (
                        <tr>
                          <td>Bidder: {c.bidderId} </td>
                          <td>Price: {c.price} </td>
                          <td>Bid At: {c.createdAt}</td>
                        </tr>
                      ))}
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>{productDetails.data?.description}</p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Review</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>

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
                    <h6>Bid Count: {item.auctionLogCount}</h6>
                  </div>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
