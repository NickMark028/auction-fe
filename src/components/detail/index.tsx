import React, { useEffect, useState } from "react";
//import { render } from "react-dom";

import { instance } from 'Utils';
import OwlCarousel from 'react-owl-carousel';
import Countdown from 'react-countdown';
import socket from "utils/socket";

var i =0;

function send(){
   socket.emit("bid","bid cai cc"+ i)
   i++
    }
  

export const Detail: React.FC = () =>  {

 // const socket = io("localhost:40567")  

  
  const [product,setProduct] = useState({name:'',id :'',sellerId :'',
  description :'' ,
  reservedPrice :'' ,
  priceStep :'' ,
  instantPrice :'',
  isRenewal :'' ,
  coverImageURL:'',
  timeExpired : '',
  createdAt :'',
  updatedAt :'',
  topBidderId :'',
  currentPrice :'',
  auctionLogCount :'',
  bidderCount:''});
  
     //   instance.get(`/product/${id}`)  
     useEffect(()=>{ 
       const id = 1000001;
       instance.get(`/product/detailproduct/${id}`) 
      // console.log(products)
        .then(
          res => setProduct(res.data)
        );
     },[])
   
      

    
  return (

 <div>
  <section className="product-details spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="product__details__pic">
            <div className="product__details__pic__item">
              <img className="product__details__pic__item--large" src={product.coverImageURL} alt="" />
            </div>
     
     
          <OwlCarousel className="product__details__pic__slider " loop items={4} autoplay>
              <img  src="asset/img/product/details/thumb-1.jpg" alt="" />
              <img  src="asset/img/product/details/thumb-2.jpg" alt="" />
              <img  src="asset/img/product/details/thumb-3.jpg" alt="" />
              <img  src="asset/img/product/details/thumb-4.jpg" alt="" />
            </OwlCarousel>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="product__details__text">
      <h3>{product.name}</h3>
            <div className="product__details__rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
              <span>(18 reviews)</span>
            </div>
            <div className="product__details__price">Curent Price: {product.currentPrice}</div>
            <div className="product__details__price">Price Step: {product.priceStep}</div>
            <div className="product__details__price"><Countdown date={Date.now() + 10000} /></div>
            <div className="product__details__price">Create: {Number(Date.parse(product.timeExpired))/1000}</div>
            <div className="product__details__quantity">
              <div className="quantity">
                <div className="pro-qty"> bid Price
                  <input type="text" defaultValue={1} />
                </div>
              </div>
            </div>
            <button type="button" className="primary-btn" onClick={send}>BID</button>
            <a href="#" className="heart-icon"><span className="icon_heart_alt=" /></a>
            <ul>
             <li><b>Bidder Count</b> <span>{product.bidderCount}</span></li>
             <li><b>seller: </b> <span>{product.sellerId}</span></li>
             
              <li><b>Weight</b> <span>0.5 kg</span></li>
              <li><b>Share on</b>
                <div className="share">
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-instagram" /></a>
                  <a href="#"><i className="fa fa-pinterest" /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="product__details__tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">Information</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">Reviews <span>(1)</span></a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <div className="product__details__tab__desc">
                  <h6>Products Infomation</h6>
                  <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                    vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                    Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                    accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                    elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                    vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                  <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                    elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                    porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                    nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                    porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                    sed sit amet dui. Proin eget tortor risus.</p>
                </div>
              </div>
              <div className="tab-pane" id="tabs-2" role="tabpanel">
                <div className="product__details__tab__desc">
                  <h6>Products Infomation</h6>
                  <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                    Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                    sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                    eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                    sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                    diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                    Proin eget tortor risus.</p>
                  <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                    elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                    porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                    nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                </div>
              </div>
              <div className="tab-pane" id="tabs-3" role="tabpanel">
                <div className="product__details__tab__desc">
                  <h6>Products Infomation</h6>
                  <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                    Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                    sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                    eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                    sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                    diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                    Proin eget tortor risus.</p>
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
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div className="product__item__pic set-bg" style={{ backgroundImage:"url('asset/img/product/product-1.jpg')"}}>
              <ul className="product__item__pic__hover">
                <li><a href="#"><i className="fa fa-heart" /></a></li>
                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div className="product__item__pic set-bg" style={{ backgroundImage:"url('asset/img/product/product-2.jpg')"}}>
              <ul className="product__item__pic__hover">
                <li><a href="#"><i className="fa fa-heart" /></a></li>
                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div className="product__item__pic set-bg" style={{ backgroundImage:"url('asset/img/product/product-3.jpg')"}}>
              <ul className="product__item__pic__hover">
                <li><a href="#"><i className="fa fa-heart" /></a></li>
                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div className="product__item__pic set-bg" style={{ backgroundImage:"url('asset/img/product/product-7.jpg')"}}>
              <ul className="product__item__pic__hover">
                <li><a href="#"><i className="fa fa-heart" /></a></li>
                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div> 


  );
};
