import { Header, Logo } from 'components';
import { Begin } from 'components/begin/begin';
import React from 'react';

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <div>
            <Begin/>
            <Logo/>
            <Header/>
        </div>
    );
}

export default Home;
