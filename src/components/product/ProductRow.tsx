import { PageURL } from 'enum/PageURL';
import moment from 'moment';
import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { toggleWatchList } from './api';
import { Markup } from 'interweave';
interface Props {
  productId: number;
  name: string;
  description: string;
  pricing: number;
  imageUrl: string;
  timeExpired: string;
  onProductRemoved: (productId: number) => void;
}

const ProductRow: FC<Props> = (props: Props) => {
  const {
    productId,
    imageUrl,
    name,
    description,
    pricing,
    timeExpired,
    onProductRemoved,
  } = props;
  const history = useHistory();

  function visitProduct() {
    history.push(PageURL.Detail.replace(/:id/, productId.toString()));
  }

  function removeFavorite() {
    toggleWatchList(productId);
    if (onProductRemoved) onProductRemoved(productId);
  }

  return (
    <Row className="my-5">
      {/* Image */}
      <div className="col-md-3">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="col-md-7">
        <h4>{name}</h4>
        <Markup content={description}/>
      </div>

      <div className="col-md-2 d-flex flex-column">
        <h3 className="align-items-center">
          <span className="text-danger">${pricing}</span>
        </h3>
        <p>{moment(timeExpired).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <button
          type="button"
          className="site-btn d-block"
          onClick={visitProduct}
        >
          VISIT
        </button>
        <button
          type="button"
          className="site-btn mt-1 bg-danger d-block"
          onClick={removeFavorite}
        >
          REMOVE
        </button>
      </div>
    </Row>
  );
};

export default ProductRow;
