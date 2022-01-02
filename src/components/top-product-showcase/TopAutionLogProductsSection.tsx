import { TProduct, TStatus } from 'models';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { getTopAutionLogProducts } from './api';
import TopProductsShowcase from './TopProductsSection';

interface Props {}

const TopAutionLogProductsShowcase = (props: Props) => {
  const [productsStatus, setProductsStatus] = useState<TStatus>('idle');
  const [products, setProducts] = useState<TProduct[]>(undefined);

  useEffect(() => {
    if (productsStatus !== 'idle') return;

    setTimeout(async () => {
      try {
        setProductsStatus('pending');
        const response = await getTopAutionLogProducts();

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
      <TopProductsShowcase title="Most bidding products" products={products} />
    ),
  };

  return <>{componentMap[productsStatus]}</>;
};

export default TopAutionLogProductsShowcase;