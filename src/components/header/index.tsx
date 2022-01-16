import { Logo } from 'components';
import SearchBar from 'components/search-box';
import { PageURL } from 'enum/PageURL';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { Container, Row } from 'react-bootstrap';
import { isLoggedIn } from 'utils/utils';

function LoginComponent() {
  return isLoggedIn() ? (
    <ul>
      <li>
        <Link to={PageURL.WatchList} className="mx-2">
          <FaHeart size={'2rem'} />
        </Link>

        <Link to={PageURL.Profile}>
          <MdAccountCircle className='mr-2' size={'2rem'} />
          {localStorage.getItem('auction-first-name')}
          ' '
          {localStorage.getItem('auction-last-name')}
        </Link>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <Link to={PageURL.Login}>Login</Link>
      </li>
      <li>
        <Link to={PageURL.Register}>Register</Link>
      </li>
    </ul>
  );
}

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Container>
        <Row className="align-items-center">
          <div className="col-lg-3 d-flex flex-column justify-content-center">
            <div className="header__logo">
              <Logo />
            </div>
          </div>

          <div className="col-lg-6">
            <SearchBar />
          </div>

          <div className="col-lg-3">
            <div className="header__cart">
              <LoginComponent />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};
