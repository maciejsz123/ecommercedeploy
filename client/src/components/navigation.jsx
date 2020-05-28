import React from 'react';
import { Link } from 'react-router-dom';
import favorite_added from '../images/favorite_added.png';
import favorite_empty from '../images/favorite_empty.png';
import logo from '../images/logo.png';
import cart from '../images/cart.png';
import { connect } from 'react-redux';
import { fetchItems } from '../redux/types/fetchItemsAction';
import { fetchFavorite } from '../redux/types/fetchFavoriteAction';
import { fetchCart } from '../redux/types/fetchCartAction';
import '../styles/navigation.sass';

function Navigation(props) {
  let numberOfFavoriteItems = props.favItems.length;
  let numberOfCartItems = props.cartItems.length;
  return (
    <div id='navigation'>
      <div className='row justify-content-center'>
        <div className='navbar navbar-expand'>
          <div className='navbar-nav display-none-sm'>
            <div className='navbar-item'>
              <Link className='navbar-brand align-self-center' style={{color: 'black'}} to='/'><img src={logo} alt='logo' style={{height: '30px'}} /></Link>
            </div>
            <li className='navbar-item'>
              <Link className='nav-link' to='/favorites' onClick={props.fetchFavorite}>
                <span style={{color: '#bd5353'}}>Favorites {numberOfFavoriteItems ? `(${numberOfFavoriteItems})` : ''} <img src={numberOfFavoriteItems ? favorite_added : favorite_empty} alt='fav' /></span>
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='nav-link' to='/cart' onClick={props.fetchCart}>
                <span style={{color: '#bd5353'}}>Cart {numberOfCartItems ? `(${numberOfCartItems})` : ''}<img src={cart} alt='cart' /></span>
              </Link>
            </li>
          </div>

          <div className='navbar-nav display-only-sm'>
            <div className='navbar-item'>
              <Link className='navbar-brand align-self-center' style={{color: 'black'}} to='/'><img src={logo} alt='logo' style={{height: '30px'}}/></Link>
            </div>
            <li className='navbar-item'>
              <Link className='nav-link' to='/favorites' onClick={props.fetchFavorite}>
                <span style={{color: '#bd5353'}}>{numberOfFavoriteItems ? `(${numberOfFavoriteItems})` : ''} <img src={numberOfFavoriteItems ? favorite_added : favorite_empty} alt='fav' /></span>
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='nav-link' to='/cart' onClick={props.fetchCart}>
                <span style={{color: '#bd5353'}}>{numberOfCartItems ? `(${numberOfCartItems})` : ''}<img src={cart} alt='cart' /></span>
              </Link>
            </li>
          </div>

        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='navbar navbar-expand-sm'>
          <ul className='navbar-nav navbar-colors'>
            <li className='navbar-item dropdown position-inherited text-center'>
              <a className='nav-link dropdown-toggle' href='#' data-toggle='dropdown'>Man</a>
              <div className='dropdown-menu position-center'>
                <div className='row dropdown-2-col'>
                  <div className='col-md-6'>
                    <Link className='dropdown-item' to='/man/viewAll' onClick={props.fetchItems}>View All</Link>
                    <Link className='dropdown-item' to='/man/Hoodies & Sweatshirts' onClick={props.fetchItems}>Hoodies & Sweatshirts</Link>
                    <Link className='dropdown-item' to='/man/Cardigans & Jumpers' onClick={props.fetchItems}>Cardigans & Jumpers</Link>
                    <Link className='dropdown-item' to='/man/Jackets & Coats' onClick={props.fetchItems}>Jackets & Coats</Link>
                    <Link className='dropdown-item' to='/man/Shirts' onClick={props.fetchItems}>Shirts</Link>
                    <Link className='dropdown-item' to='/man/Blazers & Suits' onClick={props.fetchItems}>Blazers & Suits</Link>
                    <Link className='dropdown-item' to='/man/T-shirts & Tanks' onClick={props.fetchItems}>T-shirts & Tanks</Link>
                    <Link className='dropdown-item' to='/man/Trousers' onClick={props.fetchItems}>Trousers</Link>
                    <Link className='dropdown-item' to='/man/Jeans' onClick={props.fetchItems}>Jeans</Link>
                  </div>
                  <div className='col-md-6'>
                    <Link className='dropdown-item' to='/man/Accessories' onClick={props.fetchItems}>Accessories</Link>
                    <Link className='dropdown-item' to='/man/Shoes' onClick={props.fetchItems}>Shoes</Link>
                    <Link className='dropdown-item' to='/man/Socks' onClick={props.fetchItems}>Socks</Link>
                    <Link className='dropdown-item' to='/man/Nightwear & Loungewear' onClick={props.fetchItems}>Nightwear & Loungewear</Link>
                    <Link className='dropdown-item' to='/man/Underwear' onClick={props.fetchItems}>Underwear</Link>
                    <Link className='dropdown-item' to='/man/Sportswear' onClick={props.fetchItems}>Sportswear</Link>
                    <Link className='dropdown-item' to='/man/Shorts' onClick={props.fetchItems}>Shorts</Link>
                    <Link className='dropdown-item' to='/man/Swimwear' onClick={props.fetchItems}>Swimwear</Link>
                    <Link className='dropdown-item' to='/man/Extended sizes' onClick={props.fetchItems}>Extended sizes</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className='navbar-item dropdown position-inherited text-center'>
              <a className='nav-link dropdown-toggle' href='#' data-toggle='dropdown'>Woman</a>
              <div className='dropdown-menu position-center'>
                <div className='row dropdown-2-col'>
                  <div className='col-md-6'>
                    <Link className='dropdown-item' to='/woman/viewAll' onClick={props.fetchItems}>View All</Link>
                    <Link className='dropdown-item' to='/woman/Dresses' onClick={props.fetchItems}>Dresses</Link>
                    <Link className='dropdown-item' to='/woman/Shirts & Blouses' onClick={props.fetchItems}>Shirts & Blouses</Link>
                    <Link className='dropdown-item' to='/woman/Tops' onClick={props.fetchItems}>Tops</Link>
                    <Link className='dropdown-item' to='/woman/Cardigans & Jumpers' onClick={props.fetchItems}>Cardigans & Jumpers</Link>
                    <Link className='dropdown-item' to='/woman/Blazers' onClick={props.fetchItems}>Blazers</Link>
                    <Link className='dropdown-item' to='/woman/Jackets & Coats' onClick={props.fetchItems}>Jackets & Coats</Link>
                    <Link className='dropdown-item' to='/woman/Sweatshirts & Hoodies' onClick={props.fetchItems}>Sweatshirts & Hoodies</Link>
                    <Link className='dropdown-item' to='/woman/Trousers' onClick={props.fetchItems}>Trousers</Link>
                  </div>
                  <div className='col-md-6'>
                    <Link className='dropdown-item' to='/woman/Jeans' onClick={props.fetchItems}>Jeans</Link>
                    <Link className='dropdown-item' to='/woman/Skirts' onClick={props.fetchItems}>Skirts</Link>
                    <Link className='dropdown-item' to='/woman/Shoes' onClick={props.fetchItems}>Shoes</Link>
                    <Link className='dropdown-item' to='/woman/Accessories' onClick={props.fetchItems}>Accessories</Link>
                    <Link className='dropdown-item' to='/woman/Lingerie' onClick={props.fetchItems}>Lingerie</Link>
                    <Link className='dropdown-item' to='/woman/Jumpsuits & Rompers' onClick={props.fetchItems}>Jumpsuits & Rompers</Link>
                    <Link className='dropdown-item' to='/woman/Shorts' onClick={props.fetchItems}>Shorts</Link>
                    <Link className='dropdown-item' to='/woman/Swimwear & Beachwear' onClick={props.fetchItems}>Swimwear & Beachwear</Link>
                    <Link className='dropdown-item' to='/woman/Socks & Tights' onClick={props.fetchItems}>Socks & Tights</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className='navbar-item dropdown position-inherited text-center'>
              <a className='nav-link dropdown-toggle' href="#" data-toggle='dropdown'>Kids</a>
              <div className='dropdown-menu' href='#'>
                <Link className='dropdown-item' to='/kid/viewAll' onClick={props.fetchItems}>View All</Link>
                <Link className='dropdown-item' to='/kid/Basics' onClick={props.fetchItems}>Basics</Link>
                <Link className='dropdown-item' to='/kid/Jeans' onClick={props.fetchItems}>Jeans</Link>
                <Link className='dropdown-item' to='/kid/Kids room' onClick={props.fetchItems}>Kids room</Link>
                <Link className='dropdown-item' to='/kid/Cartoons & Comics' onClick={props.fetchItems}>Cartoons & Comics</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  favItems: state.main.favoriteItems,
  items: state.main.items,
  cartItems: state.main.cartItems
})

export default connect(mapStateToProps, { fetchItems, fetchFavorite, fetchCart })(Navigation);
