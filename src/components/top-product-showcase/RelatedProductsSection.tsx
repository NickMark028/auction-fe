import { } from 'components/watch-later-body/api';
import { TProduct, TStatus } from 'models';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { getRelatedProducts } from './api';
import TopProductsShowcase from './TopProductsSection';

interface Props {
  section?: string
}

const RelatedProductsSection = (props: Props) => {
  const { section } = props
  console.log(section);

  const [productsStatus, setProductsStatus] = useState<TStatus>('idle');
  const [products, setProducts] = useState<TProduct[]>(undefined);

  useEffect(() => {
    if (section === undefined) return;
    if (productsStatus !== 'idle') return;

    setTimeout(async () => {
      try {
        setProductsStatus('pending');
        const response = await getRelatedProducts(section);

        setProducts(response);
        setProductsStatus('success');
      }
       catch (error) {
        setProductsStatus('reject');
      }
    });
  }, [section, productsStatus]);

  const componentMap = {
    idle: undefined,
    pending: <Spinner animation="border" />,
    reject: undefined,
    success: (
      <TopProductsShowcase title="Related products" products={products} />
    ),
  };

  return section === undefined
    ? <Spinner animation='border' />
    : <>{componentMap[productsStatus]}</>
};

export default RelatedProductsSection;
