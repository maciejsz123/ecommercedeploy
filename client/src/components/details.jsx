import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './navigation';
import { fetchDetail } from '../redux/types/fetchDetailAction';
import { postFavorite } from '../redux/types/postFavoriteAction';
import { fetchFavorite } from '../redux/types/fetchFavoriteAction';
import { postCart } from '../redux/types/postCartAction';
import { fetchCart } from '../redux/types/fetchCartAction';
import imageReferences from './imageReferences';
import EmptyComponentInfo from './emptyComponentInfo';
import '../styles/detail.sass';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      colorChecked: '',
      size: '',
      inTheCart: false,
      timeout: ''
    }
  }

  componentDidMount() {
    this.props.fetchDetail()
    .then( () => {
      let colorObj = this.props.colors.find( (colors) => {
        return colors.name === this.props.item.name && colors.sex === this.props.item.sex
      })

      let colors = [];
      for(let color in colorObj) {
        if(!(colorObj[color] === 'undefined' || color === 'name' || color === 'sex')) {
          colors.push(colorObj[color])
        }
      }

      this.setState({
        colors,
        colorChecked: colors[0]
      })
    })
    .catch( (err) => {
      console.log(err)
    })

  }

  static getDerivedStateFromProps(props, state) {
    let item = props.cart.find((cartItem) => {
      return cartItem.name === props.item.name && cartItem.sex === props.item.sex
    });
    let isItemInCart = item ? true : false;
    if(state.inTheCart !== isItemInCart) {
      return {
        inTheCart: isItemInCart
      }
    }
    return null;
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  addToFavorite(id) {
    this.props.postFavorite(id)
    .then( () => this.props.fetchFavorite())
    .then( () => this.props.fetchDetail())
  }

  addToCart(item) {
    clearTimeout(this.state.timeout)
    this.props.postCart(item, this.state.size, this.state.colorChecked)
    .then(() => {
      if(item.favorite) {
        return this.props.postFavorite(item.id);
      }
    })
    .then( () => this.props.fetchCart())
    .then( () => this.props.fetchDetail())
    .then( () => this.props.fetchFavorite())

    let temporaryTextElem = document.querySelector('#detail-temporary-text');

    temporaryTextElem.classList.toggle('temporary-text-clicked');
    temporaryTextElem.classList.toggle('temporary-text-notclicked');
    let timeout = setTimeout( () => {
      temporaryTextElem.classList.toggle('temporary-text-clicked');
      temporaryTextElem.classList.toggle('temporary-text-notclicked');
    }, 3000);
    this.setState({timeout})
  }

  render() {
    let productSelect = '';
    if(this.props.item.productGroup === 'Shoes') {
      productSelect = (
        <select value={this.state.size} onChange={this.handleChange.bind(this)} name='size'>
          <option value=""></option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
        </select>
      )
    } else {
      productSelect = (
        <select value={this.state.size} onChange={this.handleChange.bind(this)} name='size'>
          <option value=""></option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      )
    }
    if(!this.props.item)  {
      return (
        <div className='container'>
          <Navigation />
          <EmptyComponentInfo text='no item with given id found'/>
        </div>
      )
    }

    return(
      <div className='container'>
        <Navigation />
        <div className='row'>
          <div className='col-12 col-sm-6 d-flex detail-position'>
            <img src={imageReferences[this.props.item.sex][this.props.item.image]} alt='' className='detail-image' />
          </div>
          <div className='col-12 col-sm-6 detail-grid'>
            <div className='grid-detail-item'>
              <span>{this.props.item.name}</span>
            </div>
            <div className='grid-detail-item'>
              <span className='d-flex'>
                {this.state.colors.map( (color, i) => (
                  <div key={i}>
                    <label style={{background: color}} className='p-2 m-1 radio-detail'>
                      <input name='colorChecked' type='radio' className='display-none' checked={this.state.colorChecked === color ? 'checked' : false} onChange={this.handleChange.bind(this)} value={color}/>
                      <div className={`check-mark ${this.state.colorChecked === color ? 'display' : 'display-none'}`}>&#10003;</div>
                    </label>
                  </div>))}
              </span>
            </div>
            <div className='grid-detail-item'>
              <span>size: </span>
              {productSelect}
            </div>
            <div className='grid-detail-item'>
              <span> <s style={{color: 'tomato'}}>{this.props.item.discount ? this.props.item.price.toFixed(2) : ''}</s> <span>{(this.props.item.price - this.props.item.price * this.props.item.discount / 100).toFixed(2)}</span> zł</span>
            </div>
            <div className='grid-detail-item'>
              <button type="button" className='btn btn-warning' onClick={() => this.addToFavorite(this.props.item.id)}>{this.props.item.favorite ? 'remove from favorite' : 'add to favorite'}</button>
            </div>
            <div className='grid-detail-item'>
              <button type="button" className='btn btn-warning' disabled={(this.state.size && this.state.colorChecked ? '' : 'disabled' )} onClick={() => this.addToCart(this.props.item)}>add to cart</button>
              <p id='detail-temporary-text' className='text-info mt-3 temporary-text-notclicked'>item has beed added</p>
              <p style={{color: 'tomato'}}>{this.state.inTheCart ? 'item arleady in cart' : ''}</p>
            </div>
            <hr style={{width: '100%'}}/>
            <div className='grid-detail-item item-description'>
              <p>Item description</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.main.itemDetail[0],
  colors: state.main.itemColors,
  cart: state.main.cartItems
})

export default connect(mapStateToProps, { fetchDetail, postFavorite, fetchFavorite, fetchCart, postCart })(Details);
