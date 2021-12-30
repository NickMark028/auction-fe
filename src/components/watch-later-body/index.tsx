import ProductRow from 'components/product/ProductRow';
import SearchBar from 'components/search-box';
import React, { FC } from 'react'

interface Props {

}

const WatchLaterBody: FC<Props> = (props: Props) => {
    return (
        <div className='container'>
            <section>
                <h2 className='h2 mt-4'>Watch later</h2>
            </section>

            <section>
                <ProductRow productId={1000001} imageUrl='https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true' name='Laptop' description='Lorem Ipsum is simply du has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not oop publishing software like Aldus PageMaker including versions of Lorem Ipsum' pricing={10} timeExpired='1 day left' />
                <ProductRow productId={1000002} imageUrl='https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true' name='PC' description='Lorem Ipsum is simply dummy tbeen the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fblishing software like Aldus PageMaker including versions of Lorem Ipsum' pricing={10} timeExpired='1 day left' />
                <ProductRow productId={1000003} imageUrl='https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true' name='Mouse' description='Lorem Ipsum is simply dumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not onp publishing software like Aldus PageMaker including versions of Lorem Ipsum' pricing={10} timeExpired='1 day left' />
                <ProductRow productId={1000004} imageUrl='https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true' name='Monitor' description='Lorem Ipsum is simply dm has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not top publishing software like Aldus PageMaker including versions of Lorem Ipsum' pricing={10} timeExpired='1 day left' />
                <ProductRow productId={1000005} imageUrl='https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true' name='Chager' description='Lorem Ipsum is simply dumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not onp publishing software like Aldus PageMaker including versions of Lorem Ipsum' pricing={10} timeExpired='1 day left' />
            </section>
        </div>
    );
}
export default WatchLaterBody;
