import { TProduct, TStatus } from 'models';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { getTopClosingProducts } from './api';
import TopProductsShowcase from './TopProductsSection';

interface Props {}

const TopClosingProductsShowcase = (props: Props) => {
  const [productsStatus, setProductsStatus] = useState<TStatus>('idle');
  const [products, setProducts] = useState<TProduct[]>(undefined);

  useEffect(() => {
    if (productsStatus !== 'idle') return;

    setTimeout(async () => {
      try {
        setProductsStatus('pending');
        const response = await getTopClosingProducts();

        setProducts(response);
        setProductsStatus('success');
      } catch (error) {
        setProductsStatus('reject');
      }
    });
  }, [productsStatus]);

  const componentMap = {
    idle: undefined,
    pending: <Spinner animation="border" />,
    reject: undefined,
    success: (
      <TopProductsShowcase title="Closing products" products={products} />
    ),
  };

  return <div>{componentMap[productsStatus]}</div>;
};

export default TopClosingProductsShowcase;
