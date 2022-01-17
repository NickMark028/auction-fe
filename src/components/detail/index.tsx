import React, { useEffect, useState } from 'react';
//import { render } from "react-dom";

import OwlCarousel from 'react-owl-carousel';
import Countdown from 'react-countdown';
import socket from 'utils/socket';

import { useHistory } from 'react-router-dom';
import { getProductDetailsTC } from 'redux/slices/product-details/getProductDetails';
import { selectProductDetails } from 'redux/selectors';
import { useAppDispatch, useAppSelector } from 'redux/store';
import axiosClient from 'utils/axiosClient';
import { Markup } from 'interweave';
import moment from 'moment';
import { TStatus } from 'models';
import RelatedProductsSection from 'components/top-product-showcase/RelatedProductsSection';
import { idText } from 'typescript';

interface AuctionLog {
  firstName: string;
  lastName: string;
  price: number;
  createdAt: string;
}

export const Detail: React.FC = () => {
  const dispatch = useAppDispatch();

  const history = useHistory();
  const productDetails = useAppSelector(selectProductDetails);
  const [auctionLogs, setAuctionLogs] = useState<AuctionLog[]>([]);
  const [topBidder, setTopBidder] = useState({
    firstName: '',
    lastName: '',
    price: 0,
  });
  const [price, setPrice] = useState<number>();
  const [buttonBid, setButtonBid] = useState('BID');
  const pathname = history.location.pathname;
  const id = pathname.slice(9);
  const [checkbid, setCheckBid] = useState(1);
  useEffect(() => {
    setTimeout(async () => {
      try {
        const data = await dispatch(getProductDetailsTC(id)).unwrap();

        const res = await axiosClient.get(`/api/auction/${data.id}`);
        const formattedData = (res.data as AuctionLog[]).map((log) => {
          return {
            ...log,
            createdAt: moment(log.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
          };
        });
        setAuctionLogs(formattedData.reverse());

        axiosClient
          .get(`/api/product/topbidder/${data.id}`)
          .then((res) => setTopBidder(res.data));

        // ----------------------------------------------------------------- //

        const check = await axiosClient.get(
          `api/bidder/accept-bid/${data.id}/${localStorage.getItem(
            'auction-user-id'
          )}`
        );
        console.log(check);
        setCheckBid(check.data?.status);
        if (
          Number(localStorage.getItem('auction-user-score')) !== 0 ||
          checkbid === 0
        ) {
          setButtonBid('BID');
        } else if (checkbid === 1) {
          setButtonBid('WAIT');
        } else {
          setButtonBid('Request to bid');
        }
        console.log(checkbid);
      } catch (error) {}
    });
  }, [history.location.pathname, checkbid]);

  socket.on(`updatebid_${id}`, async (c) => {
    setTopBidder({
      firstName: c.firstName,
      lastName: c.lastName,
      price: c.price,
    });
    //set auctionlog after listen form socket
    // console.log(auctionLogs);

    setAuctionLogs([
      {
        firstName: c.firstName,
        lastName: c.lastName,
        price: c.price,
        createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
      },
      ...auctionLogs,
    ]);
  });

  // ${productDetails.data?.section}

  // (new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format())
  //gửi một bid mới

  function send() {
    // khi bidder đã có điểm đánh giá
    if (
      Number(localStorage.getItem('auction-user-score')) > 8 ||
      checkbid === 0
    ) {
      socket.emit(`bid`, {
        id_product: productDetails.data?.id,
        firstName: localStorage.getItem('auction-first-name'),
        lastName: localStorage.getItem('auction-last-name'),
        price: price,
        bidAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
      });
      //call api luu auctionLog
      axiosClient.post('/api/auction', {
        bidderId: localStorage.getItem('auction-user-id'), //localStorage.getItem('Id');
        productId: productDetails.data?.id, //productDetails.data?.id;
        price: price,
      });
    }
    //hoặc chưa
    else {
      socket.emit(`request-bid`, {
        id_product: productDetails.data?.id,
        product_name: productDetails.data?.name,

        firstName: localStorage.getItem('auction-first-name'),
        lastName: localStorage.getItem('auction-last-name'),
        id: localStorage.getItem('auction-user-id'),
        bidAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
      });
      axiosClient.post('/api/bidder/request-bid', {
        bidderId: localStorage.getItem('auction-user-id'), //localStorage.getItem('Id');
        productId: productDetails.data?.id, //productDetails.data?.id;
      });
      setButtonBid('Waiting');
    }
  }
  socket.on(`updatebtn_${localStorage.getItem('auction-user-id')}`, (data) => {
    setCheckBid(data.status);
    setButtonBid('BID');
  });
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
                      src={productDetails.data?.coverImageUrl}
                      alt=""
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
                {productDetails.status === 'success' && (
                  <>
                    <div className="product__details__price">
                      {productDetails.data?.name}
                    </div>
                    <div className="product__details__price">
                      Curent Price: $
                      {topBidder.price || productDetails.data?.currentPrice}
                    </div>
                    <div className="product__details__price">
                      Price Step: ${productDetails.data.priceStep}
                    </div>
                    <div className="product__details__price">
                      Top bidder: {topBidder.firstName} {topBidder.lastName}
                    </div>
                    <div className="product__details__price">
                      {moment(productDetails.data.timeExpired).fromNow()}
                    </div>
                    <div className="product__details__price">
                      Create:{' '}
                      {moment(productDetails.data?.createdAt).format(
                        'MMMM Do YYYY, h:mm:ss a'
                      )}
                      {/* {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      }).format(Date.parse(productDetails.data.createdAt))} */}
                    </div>
                  </>
                )}
                <div className="product__details__quantity">
                  <label>BID Price:</label>
                  <div className="pro-qty">
                    {productDetails.status === 'success' && (
                      <input
                        id="price"
                        type="number"
                        defaultValue={
                          topBidder.price ?? productDetails.data?.currentPrice
                        }
                        step={Number(productDetails.data!.priceStep)}
                        min={
                          (topBidder?.price ??
                            productDetails.data?.currentPrice ??
                            0) + productDetails.data?.priceStep ?? 0
                        }
                        onChange={(e) => {
                          setPrice(Number(e.target.value));
                        }}
                      />
                    )}
                  </div>
                </div>
                <button type="button" className="primary-btn" onClick={send}>
                  {buttonBid}
                </button>
                <a href="#" className="heart-icon">
                  <span className="icon_heart_alt=" />
                </a>
                <ul>
                  <li>
                    <b>Bidder Count</b>{' '}
                    <span>{productDetails.data?.auctionLogCount}</span>
                  </li>
                  <li>
                    <b>seller: </b>{' '}
                    <span>
                      {productDetails.data?.seller.firstName}{' '}
                      {productDetails.data?.seller.lastName}
                    </span>
                  </li>
                  <li>
                    <b>Star: </b>{' '}
                    <span>
                      {Number(productDetails.data?.negativeCount) +
                        Number(productDetails.data?.positiveCount)}{' '}
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
                      className="product__details__tab__desc"
                      style={{ overflow: 'auto' }}
                    >
                      <table id="bidinfo" className="table table-hover">
                        <thead>
                          <tr>
                            <th>Bidder Name</th>
                            <th>Price</th>
                            <th>Bid At</th>
                          </tr>
                        </thead>
                        <tbody id="category-container">
                          {auctionLogs?.map((auctionLog, index) => (
                            <tr key={index}>
                              <td>
                                {auctionLog.firstName} {auctionLog.lastName}
                              </td>
                              <td> {auctionLog.price} </td>
                              <td>{auctionLog.createdAt}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <Markup content={productDetails.data?.description} />
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
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

      <RelatedProductsSection section={productDetails.data?.section} />
    </div>
  );
};
