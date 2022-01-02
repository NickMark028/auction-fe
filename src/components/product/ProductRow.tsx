import { PageURL } from 'enum/PageURL';
import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';

interface Props {
  productId: number;
  name: string;
  description: string;
  pricing: number;
  imageUrl: string;
  timeExpired: string; //!
}

const ProductRow: FC<Props> = (props: Props) => {
  const { productId, imageUrl, name, description, pricing, timeExpired } =
    props;
  const history = useHistory();

  function visitProduct() {
    history.push(PageURL.Detail.replace(/:id/, productId.toString()));
  }

  function removeFavorite() {}

  return (
    <div className="row my-5">
      {/* Image */}
      <div className="col-md-3">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="col-md-7">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>

      <div className="col-md-2 d-flex flex-column">
        <h3 className="align-items-center">
          <span className="text-danger">{pricing}$</span>
        </h3>
        <p>{timeExpired}</p>
        <button
          type="button"
          className="site-btn d-block"
          onClick={visitProduct}
        >
          VISIT PRODUCT
        </button>
        <button
          type="button"
          className="site-btn mt-1 bg-danger d-block"
          onClick={removeFavorite}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default ProductRow;
