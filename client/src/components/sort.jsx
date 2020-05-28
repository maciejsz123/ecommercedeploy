import React, { Component } from 'react';
import { sortItems } from '../redux/types/sortItemsAction';
import { connect } from 'react-redux';

class Sort extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if(e.target.parentElement.nodeName !== 'A') return;

    this.props.sortItems({
      label: e.target.parentElement.attributes['aria-label'].value,
      direction: e.target.parentElement.text
    });
  }

  formatDropdownLabel(label, msg) {
    return this.props.sortItemsBy.label === label && this.props.sortItemsBy.direction === msg ? <span style={{color: '#e03a5e', fontWeight: 'bold'}}>{msg}</span> : <span>{msg}</span>
  }

  render() {
    return(
      <div className='dropdown text-left' style={{paddingLeft: 'calc(3vw + 15px)'}}>
        <button type='button' className='btn btn-danger dropdown-toggle' aria-haspopup='true' data-toggle='dropdown' id='dropdownSort'>sort by</button>
        <div className='dropdown-menu' aria-expanded='false' aria-labelledby='dropdownSort'>

          <div className='ml-3'><b>price</b></div>
          <a className='dropdown-item' href='#' onClick={this.handleClick} aria-label='price'>
            {this.formatDropdownLabel.call(this, 'price', 'ascending')}
          </a>
          <a className='dropdown-item' href='#' onClick={this.handleClick} aria-label='price'>
            {this.formatDropdownLabel.call(this, 'price', 'descending')}
          </a>

          <div className='dropdown-divider'></div>

          <div className='ml-3'><b>name</b></div>
          <a className='dropdown-item' href='#' onClick={this.handleClick} aria-label='name'>
            {this.formatDropdownLabel.call(this, 'name', 'ascending')}
          </a>
          <a className='dropdown-item' href='#' onClick={this.handleClick} aria-label='name'>
            {this.formatDropdownLabel.call(this, 'name', 'descending')}
          </a>

          <div className='dropdown-divider'></div>

          <a className='dropdown-item' href='#' onClick={this.handleClick} aria-label=''>
            {this.formatDropdownLabel.call(this, '', '')}
            <span>remove sorting</span>
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sortItemsBy: state.main.sortItemsBy
})

export default connect(mapStateToProps, { sortItems })(Sort);
