import { Footer, Header } from 'components';
import ProductCover from 'components/product/ProductCover';
import { FC, useEffect } from 'react';
import { RouteProps } from 'react-router-dom';
import { selectProductSearchList } from 'redux/selectors';
import { searchProductTC } from 'redux/slices/product-search-list/searchProduct';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { parseQuery } from 'utils/parser';

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

    dispatch(searchProductTC(queryParam));
  }, [dispatch, location.search]);

  return (
    <div>
      <Header />

      {/* Product Section Begin */}
      {/* Product Section End */}

      <Footer />
    </div>
  );
};

export default SearchPage;
