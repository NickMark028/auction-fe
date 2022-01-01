import {} from 'components/watch-later-body/api';
import { TProduct, TStatus } from 'models';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { getPriciestProducts } from './api';
import TopProductsShowcase from './TopProductsSection';

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

  const componentMap = {
    idle: undefined,
    pending: <Spinner animation="border" />,
    reject: undefined,
    success: (
      <TopProductsShowcase title="Priciest products" products={products} />
    ),
  };

  return <>{componentMap[productsStatus]}</>;
};

export default PriciestProductsShowcase;
