/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

import 'react-toggle/style.css';
import { selectCategoryList } from 'redux/selectors';
import { getCategoryListTC } from 'redux/slices/category-list/getCategoryList';
import { useAppDispatch, useAppSelector } from 'redux/store';
import {
  PriciestProductsShowcase,
  TopAutionLogProductsShowcase,
  TopClosingProductsShowcase,
} from 'components/products-section';
import DropDown from 'react-multilevel-dropdown';
import { useHistory } from 'react-router-dom';
import { PageURL } from 'enum/PageURL';
import { Row } from 'react-bootstrap';

export const Main: React.FC = () => {
  //jQuery()

  // if( document.getElementById('drop').style.display= "block")
  //document.getElementById('drop') = this.state.isClicked?'none' : ''
  // else
  const [display, setDisplay] = useState('block');
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(selectCategoryList);
  const history = useHistory();

  useEffect(() => {
    if (categoryList.data === undefined)
      dispatch(getCategoryListTC());
  }, []);

  function handleChange() {
    if (categoryList.status !== 'success') return;

    setDisplay(display === 'none' ? 'block' : 'none');
  }

  return (
    <div>
      {/* Category + Preview page */}
      <section className="hero">
        <div className="container">
          <Row className="my-5">
            {/* All category */}
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all" onClick={handleChange}>
                  <i className="fa fa-bars" />
                  <span>All Categories</span>
                </div>

                {categoryList.status === 'success' && (
                  <ul className="drop" style={{ display }}>
                    {categoryList.data?.map((category, index) => (
                      <DropDown.Item key={index}>
                        {category.section}
                        <DropDown.Submenu position="right">
                          {category.categories.map((detailCategory, index2) => (
                            <DropDown.Item
                              key={index2}
                              onClick={() =>
                                history.push(
                                  `${PageURL.Category}/${detailCategory.path}`
                                )
                              }
                            >
                              {detailCategory.name}
                            </DropDown.Item>
                          ))}
                        </DropDown.Submenu>
                      </DropDown.Item>
                    ))}

                    {/* {categoryList.data?.map((category, index) => (
                      <li key={index}>
                        <a href="#">{category.section}</a>
                      </li>
                    ))} */}
                  </ul>
                )}
              </div>
            </div>

            {/* Banner */}
            <div
              className="col-lg-9 hero__item set-bg"
              style={{
                backgroundImage: "url('asset/img/banner/banner.jpg')",
              }}
            >
              <div className="hero__text">
                {/* <span>FRUIT FRESH</span> */}
                <h2>Auction Only</h2>
                <p>Do you have any item to sell or want to bid an item?</p>
                {/* <a href="#" className="primary-btn">
                    SHOP NOW
                  </a> */}
              </div>
            </div>
          </Row>
        </div>
      </section>

      {/* <TopClosingProductsShowcase />

      <TopAutionLogProductsShowcase />

      <PriciestProductsShowcase /> */}

      {/* Carousel */}
      {/* <section className="categories">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="categories__slider owl-carousel"
              loop
              items={4}
              autoplay
              nav
            >
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage: "url('asset/img/categories/cat-1.jpg')",
                  }}
                >
                  <h5>
                    <a href="#">Fresh Fruit</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage: "url('asset/img/categories/cat-2.jpg')",
                  }}
                >
                  <h5>
                    <a href="#">Dried Fruit</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage: "url('asset/img/categories/cat-3.jpg')",
                  }}
                >
                  <h5>
                    <a href="#">Vegetables</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage: "url('asset/img/categories/cat-4.jpg')",
                  }}
                >
                  <h5>
                    <a href="#">drink fruits</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage: "url('asset/img/categories/cat-5.jpg')",
                  }}
                >
                  <h5>
                    <a href="#">drink fruits</a>
                  </h5>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section> */}

      {/* Featured product */}
      {/* <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  style={{
                    backgroundImage: "url('asset/img/featured/feature-1.jpg')",
                  }}
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  style={{
                    backgroundImage: "url('asset/img/featured/feature-2.jpg')",
                  }}
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  style={{
                    backgroundImage: "url('asset/img/featured/feature-3.jpg')",
                  }}
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  style={{
                    backgroundImage: "url('asset/img/featured/feature-4.jpg')",
                  }}
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  style={{
                    backgroundImage: "url('asset/img/featured/feature-5.jpg')",
                  }}
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  style={{
                    backgroundImage: "url('asset/img/featured/feature-6.jpg')",
                  }}
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  style={{
                    backgroundImage: "url('asset/img/featured/feature-7.jpg')",
                  }}
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  style={{
                    backgroundImage: "url('asset/img/featured/feature-8.jpg')",
                  }}
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Additional product */}
      {/* <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="asset/img/banner/banner-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="asset/img/banner/banner-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Latest products, top tated products, review products */}
      {/* <section className="latest-product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Latest Products</h4>
                <OwlCarousel
                  className="latest-product__slider owl-carousel"
                  loop
                  items={1}
                  autoplay
                  nav
                >
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Top Rated Products</h4>
                <OwlCarousel
                  className="latest-product__slider owl-carousel"
                  loop
                  items={1}
                  autoplay
                  nav
                >
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Review Products</h4>
                <OwlCarousel
                  className="latest-product__slider owl-carousel"
                  loop
                  items={1}
                  autoplay
                  nav
                >
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="asset/img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* From the blog */}
      {/* <section className="from-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title from-blog__title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="asset/img/blog/blog-1.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o" /> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o" /> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">Cooking tips make cooking simple</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="asset/img/blog/blog-2.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o" /> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o" /> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">6 ways to prepare breakfast for 30</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="asset/img/blog/blog-3.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o" /> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o" /> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">Visit the clean farm in the US</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};
