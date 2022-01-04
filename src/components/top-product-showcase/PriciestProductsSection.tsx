import ServerError from 'components/500-server-error';
import Loading from 'components/loading';
import {} from 'components/watch-later-body/api';
import { TProduct, TStatus } from 'models';
import { useEffect } from 'react';
import { useState } from 'react';
import { getPriciestProducts } from './api';
import TopProductsShowcase from './ProductsSection';

interface Props {}

const PriciestProductsShowcase = (props: Props) => {
  const [productsStatus, setProductsStatus] = useState<TStatus>('idle');
  const [products, setProducts] = useState<TProduct[]>(undefined);

  useEffect(() => {
    if (productsStatus !== 'idle') return;

    setTimeout(async () => {
      try {
        setProductsStatus('pending');
        const response = await getPriciestProducts();

        setProducts(response);
        setProductsStatus('success');
      } catch (error) {
        setProductsStatus('reject');
      }
    });
  }, [productsStatus]);

  return (
    <TopProductsShowcase
      title="Priciest products"
      products={products}
      status={productsStatus}
    />
  );
};

export default PriciestProductsShowcase;
