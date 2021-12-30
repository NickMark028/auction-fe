import { Footer, Header } from 'components';
import ProductPreview from 'components/product-preview';
import ProductRow from 'components/product/ProductRow';
import WatchLaterBody from 'components/watch-later-body';
import React, { FC } from 'react'

interface Props {

}

const WatchLaterPage: FC<Props> = (props: Props) => {
    return (
        <>
            <Header />
            <WatchLaterBody />
            <Footer />
        </>
    )
}

export default WatchLaterPage;
