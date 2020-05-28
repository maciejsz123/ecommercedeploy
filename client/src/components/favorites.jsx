import React, { Component } from 'react';
import Navigation from './navigation';
import FavItem from './favItem';
import { connect } from 'react-redux';
import { fetchFavorite } from '../redux/types/fetchFavoriteAction';
import imageReferences from './imageReferences';
import { postFavorite } from '../redux/types/postFavoriteAction';
import { postCart } from '../redux/types/postCartAction';
import { fetchCart } from '../redux/types/fetchCartAction';
import EmptyComponentInfo from './emptyComponentInfo';

class Favorites extends Component {
  componentDidMount() {
    this.props.fetchFavorite();
  }

  removeFavorite(id, fetchFavorite, postFavorite) {
    postFavorite(id)
    .then( () => fetchFavorite())
  }

  addToCart(item, size, color, postFavorite, fetchFavorite, postCart, fetchCart) {
    postFavorite(item.id)
    .then( () => postCart(item, size, color))
    .then( () => fetchFavorite())
    .then( () => fetchCart())
  }

  render() {
    let itemsRender = this.props.items.map( (item,i) => (
      <FavItem key={item.id} colors={this.props.itemColors} imgSrc={imageReferences[item.sex][item.image]} item={item}
       addToCart={this.addToCart} removeFavorite={this.removeFavorite} fetchCart={this.props.fetchCart} fetchFavorite={this.props.fetchFavorite} postFavorite={this.props.postFavorite} postCart={this.props.postCart} />
    ));

    return (
      <div className='container-fluid'>
        <Navigation />
        {this.props.items.length ? itemsRender : <EmptyComponentInfo text='not items in favorites yet.' />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.main.favoriteItems,
  itemColors: state.main.itemColors
})

export default connect(mapStateToProps, { fetchFavorite, postFavorite, postCart, fetchCart })(Favorites);
