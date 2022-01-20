import { Footer, Header } from 'components';
import CPagination from 'components/pagination/CPagination';
import ProductCover from 'components/product/ProductCover';
import ProductsSection from 'components/products-section/ProductsSection';
import { PageLimit } from 'enum/Page';
import { FC, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RouteProps } from 'react-router-dom';
import { selectCategoryList, selectProductSearchList } from 'redux/selectors';
import { searchProductTC } from 'redux/slices/product-search-list/searchProduct';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { parseQuery } from 'utils/parser';

// import '../../styles/app.scss'

interface Props extends RouteProps { }

const SearchPage: FC<Props> = (props: Props) => {
  const { location, } = props;

  const dispatch = useAppDispatch();
  const productSearchList = useAppSelector(selectProductSearchList);

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
    console.log(queryParam);

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
              <h2 className='h2'>Products</h2>

              <div className="filter__item">
                <div className="row">
                  <div className="col-12">
                    <div className="filter__found">
                      <h6>
                        {productSearchList.data &&
                          <span>{productSearchList.data!.products.length} Products found</span>
                        }
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <ProductsSection status={productSearchList.status} products={productSearchList.data?.products} />

              <CPagination maxItemPerPage={PageLimit.SectionCount} totalItem={productSearchList.data?.resultCount} />
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
