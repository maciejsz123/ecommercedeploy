import React, { Component } from 'react';
import '../styles/item.sass';
import favEmpty from '../images/favorite_empty.png';
import favAdded from '../images/favorite_added.png';
import { Link } from 'react-router-dom';

class Item extends Component {

  render() {
    let colorObj = this.props.colors.find( (color) => {
      return color.sex === this.props.item.sex && color.name === this.props.item.name
    })
    let colorsTab = [];
    for(let color in colorObj) {
      if(color !== 'name' && color !== 'sex' && colorObj[color] !== 'undefined') {
        colorsTab.push(colorObj[color]);
      }
    }
    let colorsMap = colorsTab.map( (color, i) => (
      <span key={i} style={{background: `${color}`, display: 'inline-block', borderRadius: '100%', border: '0.5px solid #bfbfbf'}} className='p-1'></span>
    ))

    return(
      <Link to={`/details/${this.props.item.id}`} className='text-center col-12 col-sm-6 col-lg-4 col-xl-3 itemFocus'>
        <div className='position-absolute' id='secondLayer'>
        </div>
        <div className='position-absolute' id='buttonLayer'>
          <button type='button' className='btn position-absolute' style={{top: '50%', transform: 'translate(-50%, -50%)', background: 'transparent', border: '1px solid red'}}>details</button>
        </div>
        <div className='hide-overflow'>
          <img src={this.props.img} alt='' className='imageSize' style={{zIndex: '1'}}/>
          <img src={this.props.item.favorite ? favAdded : favEmpty} alt='fav' className='position-absolute favoritePosition' onClick={(e) => this.props.addFavorite(e, this.props.item)}/>
          <span className={`position-absolute bg-danger ${this.props.item.discount ? 'p-2' :''}`} style={{bottom: '150px', right: '10px', zIndex: '2', boxShadow: '2px 2px tomato'}}>{!this.props.item.discount ? '' : `-${this.props.item.discount} %`}</span>
        </div>
        <div className='row description'>
          <div className='col-6'>
            <div className='itemName'>{this.props.item.name}</div>
          </div>
          <div className='col-6'>
            <div>
              <span style={{textDecoration: 'line-through', color: 'tomato', fontSize: '14px'}}>{!this.props.item.discount ? '' : (this.props.item.price).toFixed(2)}</span>
              <span> {((1-this.props.item.discount/100) * this.props.item.price).toFixed(2)} zł</span>
            </div>
            <div>
              <span>colors: </span>
              {colorsMap}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default Item;
