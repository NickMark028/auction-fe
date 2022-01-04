import Loading from 'components/loading';
import ProductCover from 'components/product/ProductCover';
import { TProduct, TStatus } from 'models';
import { Container, Row } from 'react-bootstrap';

interface Props {
  title: string;
  products?: TProduct[];
  status?: TStatus;
}

const TopProductsShowcase = (props: Props) => {
  const { title, products, status } = props;

  const componentMap = {
    idle: undefined,
    pending: <Loading />,
    success: (
      <Row>
        {products?.map((product) => (
          <ProductCover key={product.id.toString()} {...product} />
        ))}
      </Row>
    ),
    reject: (
      <Row className='justify-content-center'>
        <p className='my-5'>Can't retrieved item</p>
      </Row>
    ),
  }

  return (
    <section className="featured spad">
      <Container>
        <Row>
          <div className="col-lg-12">
            <div className="section-title">
              <h2>{title}</h2>
            </div>
          </div>
        </Row>
      </Container>

      <Container>
        {componentMap[status]}
      </Container>
    </section>
  );
};

export default TopProductsShowcase;
