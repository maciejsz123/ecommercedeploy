import React, { Component } from 'react';
import '../styles/carousel.sass';
import shoe1 from '../images/shoe1.jpg';
import shoe2 from '../images/shoe2.jpg';
import shoe3 from '../images/shoe3.jpg';
import leftArrow from '../images/leftArrow.png';
import rightArrow from '../images/rightArrow.png';

class DiscountCarousel extends Component {
  constructor() {
    super();
    this.state = {
      interval: 5000,
      intervalId: '',
      images: [shoe1, shoe2, shoe3],
      active: 0
    }
  }

  componentDidMount() {
    this.slideInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    this.setState({intervalId: ''});
  }

  onClick(e) {
    let direction = e.target.attributes.name.nodeValue;
    this.slideInterval('slideNow', direction);
  }

  controllClick(e) {
    let clicked = e.target.attributes.value['value'];
    let moveBy = clicked - this.state.active;
    if(moveBy < 0) {
      this.slideInterval('slideNow', 'left', -moveBy);
    } else if( moveBy > 0) {
      this.slideInterval('slideNow', 'right', moveBy);
    } else {
      //do nothing
    }
  }

  slideInterval(text, direction, moveBy = 1) {
    if(this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
    if(text === 'slideNow') {
      this.slide(direction, moveBy);
    }
    let interval = setInterval( this.slide.bind(this), this.state.interval);

    this.setState({intervalId: interval});
  }

  slide(direction, moveBy = 1) {
    let carousel = document.getElementsByClassName('carouselImages')[0];
    carousel.style.transition = '0.6s all';
    if(direction === 'left') {
      if(carousel.style.justifyContent === 'flex-end') {
        carousel.prepend(carousel.lastElementChild);
      }
      carousel.style.justifyContent = 'flex-start';
      if(this.state.active === 0) {
        this.setState({active: this.state.images.length - 1 * moveBy})
      } else {
        this.setState({active: this.state.active - 1 * moveBy});
      }
        for(let i = 0; i < moveBy; i++) {
          carousel.prepend(carousel.lastElementChild);
        }
        carousel.style.transition = 'none';
        carousel.style.transform = `translate(${-100 * moveBy}%)`;
        setTimeout( () => {
          carousel.style.transition = '0.6s all';
          carousel.style.transform = `translate(0%)`;
        }, 20);

    } else {
      if(carousel.style.justifyContent === 'flex-start' || !carousel.style.justifyContent) {
        carousel.appendChild(carousel.firstElementChild);
      }
      carousel.style.justifyContent = 'flex-end';
      if(this.state.active === this.state.images.length - 1 * moveBy) {
        this.setState({active: 0});
      } else {
        this.setState({active: this.state.active + 1 * moveBy});
      }
        carousel.style.transition = 'none';
        carousel.style.transform = `translate(${100 * moveBy}%)`;
        for(let i = 0; i < moveBy; i++) {
          carousel.appendChild(carousel.firstElementChild);
        }

        setTimeout( () => {
          carousel.style.transition = '0.6s all';
          carousel.style.transform = `translate(0%)`;
        }, 20);
    }

  }

  render() {
    let images = this.state.images.map( (image, i) => (
      <li className='carouselElem' key={i}>
        <img src={image} alt='shoe' className='carouselImg'/>
        <div className='red-outline-text' style={{cursor: 'pointer', position: 'absolute', width: '450px', bottom: '50px', transform: 'translate(100px)'}}>check new collections</div>
      </li>
    ));

    let controlls = this.state.images.map( (image, i) => (
      <div className={this.state.active === i ? 'active' : ''} onClick={this.controllClick.bind(this)} value={i} key={i}></div>
    ));

    return (
      <div className='carousel row'>
        <div className='slider'>

          <ul className='carouselImages'>
            {images}
          </ul>

          <div className='arrow'>
            <div className='leftArrow'>
              <img src={leftArrow} alt='<' name='left' onClick={this.onClick.bind(this)}/>
            </div>
            <div className='rightArrow'>
              <img src={rightArrow} alt='>' name='right' onClick={this.onClick.bind(this)}/>
            </div>
          </div>
          <div className='controlls'>
            {controlls}
          </div>
        </div>
      </div>
    )
  }
}

export default DiscountCarousel;
