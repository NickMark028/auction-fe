import ProductRow from 'components/product/ProductRow';
import SearchBar from 'components/search-box';
import { TProduct, TStatus } from 'models';
import React, { FC, useEffect, useState } from 'react';
import { getWatchList } from './api';

interface Props {}

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
      } catch (error) {
        setStatus('reject');
      }
    });
  }, [status]);

  return (
    <div className="container">
      <section>
        <h2 className="h2 mt-4">Watch later</h2>
      </section>

      <section className="">
        {status === 'success' &&
          watchList?.map((product, index) => (
            <ProductRow
              key={product.id}
              productId={product.id}
              imageUrl={product.coverImageUrl}
              name={product.name}
              description={product.description}
              pricing={product.currentPrice}
              timeExpired={product.timeExpired}
            />
          ))}
      </section>
    </div>
  );
};
export default WatchLaterBody;
