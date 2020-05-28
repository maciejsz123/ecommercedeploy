import React,{ Component } from 'react';
import Item from './item.jsx';
import imageReferences from './imageReferences';
import { connect } from 'react-redux';
import { fetchItems } from '../redux/types/fetchItemsAction';
import { fetchColors } from '../redux/types/fetchColorsAction';
import { postFavorite } from '../redux/types/postFavoriteAction';
import { fetchFavorite } from '../redux/types/fetchFavoriteAction';

class ItemList extends Component {

  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchColors();
  }

  onClickAddFavorite = (e, childProps) => {
    e.preventDefault();
    this.props.postFavorite(childProps.id)
    .then( () => this.props.fetchItems())
    .then( () => this.props.fetchFavorite())
  }

  sortByLabel(a, b, label) {
    if(label === 'name') {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      if(a > b) {
        return 1;
      } else if(a < b) {
        return -1;
      } else {
        return 0;
      }
    } else if(label === 'price') {
      return a.price - b.price;
    }

  }

  render() {
    let sortItems = [...this.props.items].sort((a,b) => this.sortByLabel(a, b, this.props.sortItemsBy.label));
    sortItems = this.props.sortItemsBy.direction === 'descending' ? [...sortItems].reverse() : sortItems;

    let itemsRender = sortItems.map( item => (
      <Item key={item.id} item={item} colors={this.props.colors} img={imageReferences[this.props.sex][item.image]} addFavorite={this.onClickAddFavorite} />
    ));

    return (
      <div className='container-fluid containerPadding'>
        <div className='row'>
          {itemsRender}
        </div>
      </div>
    )
  }

  /* only for inserting random data into colors table in db
  randomColors() {
    let chars = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++) {
      color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  onClick() {
    let body = [];
    this.state.items.forEach( (item, i) => {
      let arr = [];
      arr.push(item.name);
      arr.push(item.sex);
      let iterations = Math.floor(Math.random() * 5) + 2;
      for(let i = 0; i < 8; i++) {
        if(i < iterations) {
          arr.push(this.randomColors());
        } else {
          arr.push('undefined');
        }
      }
      body.push(arr);
    })

    fetch('http://localhost:5000/api/postcolors', {
    method: "post",
    body: JSON.stringify({
      body: body
    }),
    headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res)
  } */
}

const mapStateToProps = (state) => ({
  items: state.main.items,
  colors: state.main.itemColors,
  sortItemsBy: state.main.sortItemsBy
})

export default connect(mapStateToProps, { fetchItems, fetchColors, postFavorite, fetchFavorite })(ItemList);
