import ServerError from 'components/500-server-error';
import ProductRow from 'components/product/ProductRow';
import { TProduct, TStatus } from 'models';
import React, { FC, useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { getWatchList } from './api';

interface Props { }

const WatchLaterBody: FC<Props> = (props: Props) => {
  const [status, setStatus] = useState<TStatus>('idle');
  const [watchList, setWatchList] = useState<TProduct[]>(undefined);

  useEffect(() => {
    if (status !== 'idle') return;

    setTimeout(async () => {
      try {
        setStatus('pending');
        const data = await getWatchList();

        console.log(data);

        setWatchList(data);
        setStatus('success');
      }
      catch (error) {
        setStatus('reject');
      }
    });
  }, [status]);

  const uiMap = {
    idle: undefined,
    pending: <Spinner animation="border" />,
    success: (
      <>
        <section>
          <h2 className="h2 mt-4">Watch later</h2>
        </section>

        <section className="">
          <Row>
            {status === 'success' && watchList &&
              <>
                {watchList.length !== 0
                  ? (
                    watchList.map((product, index) => (
                      <ProductRow
                        key={product.id}
                        productId={product.id}
                        imageUrl={product.coverImageUrl}
                        name={product.name}
                        description={product.description}
                        pricing={product.currentPrice}
                        timeExpired={product.timeExpired}
                      />
                    )))
                  : (
                    <Col className='align-items-center'>
                      <img className='my-5' src='./asset/img/empty.png' />
                    </Col>
                  )
                }
              </>
            }
          </Row>
        </section>
      </>
    ),
    reject: <ServerError />,
  };

  return <div className="container">{uiMap[status]}</div>;
};
export default WatchLaterBody;
