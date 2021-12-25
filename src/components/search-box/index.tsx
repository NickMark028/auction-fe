import { PageURL } from 'enum/PageURL';
import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom';

interface Props {
    
}

const SearchBar = (props: Props) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const history = useHistory();

    function onSearchTextChange(e: FormEvent<HTMLInputElement>) {
        setSearchQuery(e.currentTarget.value);
    }

    function onSearchSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //! check for min 4 character only
        history.push(PageURL.Search + `?keyword=${searchQuery}`);
    }

    return (
        <div className="hero__search__form">
            <form action="#" onSubmit={onSearchSubmit}>
                <div className="hero__search__categories">
                    All Categories
                    <span className="arrow_carrot-down" />
                </div>
                <input type="text" placeholder="What do yo u need?" onChange={onSearchTextChange} />
                <button type="submit" className="site-btn">
                    SEARCH
                </button>
            </form>
        </div>
    )
}

export default SearchBar
