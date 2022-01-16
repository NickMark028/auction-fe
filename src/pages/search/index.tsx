import { Footer, Header, Logo } from 'components';
import ProductPreview from 'components/product-preview';
import ProductCover from 'components/product/ProductCover';
import SearchBar from 'components/search-box';
import { FC, useEffect } from 'react';
import { RouteProps } from 'react-router-dom';
import { selectProductSearchList } from 'redux/selectors';
import { searchProductTC } from 'redux/slices/product-search-list/searchProduct';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { parseQuery } from 'utils/parser';

interface Props extends RouteProps { }

const SearchPage: FC<Props> = (props: Props) => {
  const { location, path } = props;

  const dispatch = useAppDispatch();
  const productSearchList = useAppSelector(selectProductSearchList);

  useEffect(() => {
    const query = parseQuery(location.search);

    dispatch(
      searchProductTC({
        keyword: query.get('keyword'),
        category: query.get('category'),
        page: query.get('page'),
        pricing: query.get('pricing') as any,
        time: query.get('time') as any,
      })
    );
  }, [dispatch, location.search]);

  return (
    <div>
      <Header />

      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Department</h4>
                  <ul>
                    <li>
                      <a href="#">Fresh Meat</a>
                    </li>
                    <li>
                      <a href="#">Vegetables</a>
                    </li>
                    <li>
                      <a href="#">Fruit & Nut Gifts</a>
                    </li>
                    <li>
                      <a href="#">Fresh Berries</a>
                    </li>
                    <li>
                      <a href="#">Ocean Foods</a>
                    </li>
                    <li>
                      <a href="#">Butter & Eggs</a>
                    </li>
                    <li>
                      <a href="#">Fastfood</a>
                    </li>
                    <li>
                      <a href="#">Fresh Onion</a>
                    </li>
                    <li>
                      <a href="#">Papayaya & Crisps</a>
                    </li>
                    <li>
                      <a href="#">Oatmeal</a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                    <div
                      className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min="10"
                      data-max="540"
                    >
                      <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      ></span>
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      ></span>
                    </div>
                    <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar__item sidebar__item__color--option">
                  <h4>Colors</h4>
                  <div className="sidebar__item__color sidebar__item__color--white">
                    <label htmlFor="white">
                      White
                      <input type="radio" id="white" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--gray">
                    <label htmlFor="gray">
                      Gray
                      <input type="radio" id="gray" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--red">
                    <label htmlFor="red">
                      Red
                      <input type="radio" id="red" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--black">
                    <label htmlFor="black">
                      Black
                      <input type="radio" id="black" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--blue">
                    <label htmlFor="blue">
                      Blue
                      <input type="radio" id="blue" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--green">
                    <label htmlFor="green">
                      Green
                      <input type="radio" id="green" />
                    </label>
                  </div>
                </div>

                <div className="sidebar__item">
                  <h4>Popular Size</h4>
                  <div className="sidebar__item__size">
                    <label htmlFor="large">
                      Large
                      <input type="radio" id="large" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="medium">
                      Medium
                      <input type="radio" id="medium" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="small">
                      Small
                      <input type="radio" id="small" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="tiny">
                      Tiny
                      <input type="radio" id="tiny" />
                    </label>
                  </div>
                </div>

                <div className="sidebar__item">
                  <div className="latest-product__text">
                    <h4>Latest Products</h4>
                    <div className="latest-product__slider owl-carousel">
                      <div className="latest-prdouct__slider__item">
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-1.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-2.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-3.jpg" alt="" />
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
                            <img src="img/latest-product/lp-1.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-2.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-3.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sale off */}
            <div className="col-lg-9 col-md-7">
              <div className="product__discount">
                <div className="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>
                <div className="row">
                  <div className="product__discount__slider owl-carousel">
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="img/product/discount/pd-1.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="img/product/discount/pd-2.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Vegetables</span>
                          <h5>
                            <a href="#">Vegetables’package</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="img/product/discount/pd-3.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Mixed Fruitss</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="img/product/discount/pd-4.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="img/product/discount/pd-5.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="img/product/discount/pd-6.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select>
                        <option value="0">Default</option>
                        <option value="0">Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>{productSearchList.data?.length}</span> Products
                        found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {productSearchList.data?.map((product) => (
                  <ProductCover {...product} />
                ))}
              </div>

              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}

      <Footer />
    </div>
  );
};

export default SearchPage;
