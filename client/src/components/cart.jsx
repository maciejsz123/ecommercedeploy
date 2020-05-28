import React, { Component } from 'react';
import Navigation from './navigation';
import { connect } from 'react-redux';
import { fetchCart } from '../redux/types/fetchCartAction';
import { deleteCart } from '../redux/types/deleteCartAction';
import imageReferences from './imageReferences';
import EmptyComponentInfo from './emptyComponentInfo';
import '../styles/cart.sass';

class Cart extends Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  removeFromCart(id) {
    this.props.deleteCart(id)
    .then(() => this.props.fetchCart())
  }

  render() {
    let itemsRender = this.props.items.map( item => (
      <div className='grid-cart mb-1 border bg-light' key={item.id}>
        <div className='text-center'>
          <img src={imageReferences[item.sex][item.image]} alt={item.name} />
        </div>
        <div className='text-center'>
          <span>{item.name}</span>
        </div>
        <div className='text-center'>
          <span>size: {item.size}</span>
        </div>
        <div className='text-center'>
          <span>color: <span className='cart-color' style={{background: item.color}}></span></span>
        </div>
        <div className='text-center'>
          <span> <s style={{color: 'tomato'}}>{item.discount ? item.price.toFixed(2) : ''}</s> <span>{(item.price - item.price * item.discount / 100).toFixed(2)}</span> zł</span>
        </div>
        <div className='text-center'>
          <button type='button' className='btn btn-warning p-2' onClick={() => this.removeFromCart(item.id)}><span className='close'>&times;</span></button>
        </div>
      </div>
    ));

    let filledArray = (
      <div className='row'>
        <div className='col-12 col-md-8 full-screen-height-cart'>
          {itemsRender}
        </div>
        <div className='col-12 col-md-4 bg-info cart-total'>
          <div>
            <span>Value: {(this.props.items.reduce((total, item) => total + item.price, 0)).toFixed(2)} zł</span>
          </div>
          <div>
            <span>Discounts: {(this.props.items.reduce((total, item) => total + item.price * item.discount / 100, 0)).toFixed(2)} zł</span>
          </div>
          <hr />
          <div>
            <span>Total: {(this.props.items.reduce((total, item) => total + item.price * (1 - item.discount / 100), 0)).toFixed(2)} zł</span>
          </div>
          <div>
            <button type='button' className='btn btn-warning'>make an order</button>
          </div>
        </div>
      </div>
    );
    return (

      <div className='container-fluid'>
        <Navigation />
        {(itemsRender.length ? filledArray : <EmptyComponentInfo text='no items in the cart yet.' />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.main.cartItems
})

export default connect(mapStateToProps, { fetchCart, deleteCart })(Cart);
