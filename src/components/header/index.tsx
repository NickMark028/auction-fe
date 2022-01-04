import { Logo } from 'components';
import { PageURL } from 'enum/PageURL';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  useEffect(() => {
    localStorage.getItem('user-token');
  }, []);
  function loginState() {
    console.log(localStorage.getItem('user-token'));
    if (localStorage.getItem('user-token') != null) {
      return (
        <ul>
          <li>
            <Link to={PageURL.Profile}>
              <i className="fa fa-user" />
              {/* <span>1</span> */}
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to={PageURL.Login}>
              Login
              {/* <span>1</span> */}
            </Link>
          </li>
          <li>
            <Link to={PageURL.Register}>
              Register
              {/* <span>1</span> */}
            </Link>
          </li>
        </ul>
      );
    }
  }
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-flex flex-column justify-content-center">
            <div className="header__logo">
              <Logo />
            </div>
          </div>

          <div className="col-lg-4">
            <nav className="header__menu">
              <ul>
                <li className="active">
                  <Link to={PageURL.Home}>Home</Link>
                </li>
                <li>
                  <a href="./shop-grid.html">Shop</a>
                </li>
                {/* <li>
                  <a href="#">Pages</a>
                  <ul className="header__menu__dropdown">
                    <li>
                      <a href="./shop-details.html">Shop Details</a>
                    </li>
                    <li>
                      <a href="./shoping-cart.html">Shoping Cart</a>
                    </li>
                    <li>
                      <a href="./checkout.html">Check Out</a>
                    </li>
                    <li>
                      <a href="./blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./blog.html">Blog</a>
                </li> */}
                <li>
                  <a href="./contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-lg-4">
            <div className="header__cart">
              <ul>
                {loginState()}
                <li>
                  <Link to={PageURL.WatchList}>
                    <i className="fa fa-heart" />
                    {/* <span>1</span> */}
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-bag" />
                    {/* <span>3</span> */}
                  </a>
                </li>
              </ul>
              <div className="header__cart__price">
                item: <span>$150.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="humberger__open">
          <i className="fa fa-bars" />
        </div>
      </div>
    </header>
  );
};
