import ProductCover from 'components/product/ProductCover';
import { TProduct } from 'models';
import React from 'react';
import { Container } from 'react-bootstrap';

interface Props {
  title: string;
  products?: TProduct[];
}

const TopProductsShowcase = (props: Props) => {
  const { title, products } = props;

  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="row">
          {products?.map((product) => (
            <ProductCover {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopProductsShowcase;
