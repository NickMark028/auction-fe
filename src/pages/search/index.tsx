import { Footer, Header } from 'components';
import ProductCover from 'components/product/ProductCover';
import { FC, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RouteProps } from 'react-router-dom';
import { selectCategoryList, selectProductSearchList } from 'redux/selectors';
import { searchProductTC } from 'redux/slices/product-search-list/searchProduct';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { parseQuery } from 'utils/parser';

interface Props extends RouteProps { }

const SearchPage: FC<Props> = (props: Props) => {
  const { location, } = props;

  const dispatch = useAppDispatch();
  const productSearchList = useAppSelector(selectProductSearchList);
  const categoryList = useAppSelector(selectCategoryList);

  useEffect(() => {
    const query = parseQuery(location.search);

    const queryParamTemp = {
      keyword: query.get('keyword'),
      category: query.get('category'),
      page: query.get('page') ?? '1',
      pricing: query.get('pricing') as any,
      timeExpired: query.get('timeExpired') as any,
    };
    const queryParam = {
      keyword: queryParamTemp.keyword === '' ? undefined : queryParamTemp.keyword,
      category: queryParamTemp.category === '' ? undefined : queryParamTemp.category,
      page: queryParamTemp.page === '' ? undefined : queryParamTemp.page,
      pricing: queryParamTemp.pricing === '' ? undefined : queryParamTemp.pricing,
      timeExpired: queryParamTemp.timeExpired === '' ? undefined : queryParamTemp.timeExpired,
    }
    // console.log(queryParam);

    dispatch(searchProductTC(queryParam))
  }, [dispatch, location.search]);

  return (
    <div>
      <Header />

      {/* Product Section Begin */}
      <section className="product spad">
        <Container>
          <Row>
            <Col className='col-12'>
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
            </Col>
          </Row>
        </Container>
      </section>
      {/* Product Section End */}

      <Footer />
    </div>
  );
};

export default SearchPage;
