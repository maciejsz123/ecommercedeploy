import React from 'react';
import { Link } from 'react-router-dom';
import DiscountCarousel from './discountCarousel';
import '../styles/home.sass'
import popular_accesories from '../images/popular/accesories.jpg'
import popular_discount from '../images/popular/discount.jpg'
import popular_hat from '../images/popular/hat.jpg'
import popular_shirt from '../images/popular/shirt.jpg'
import popular_shoe from '../images/popular/shoe.jpg'
import popular_trousers from '../images/popular/trousers.jpg'
import popular_tshirt from '../images/popular/tshirt.jpg'

import brand_4f from '../images/brand/4f.jpg';
import brand_house from '../images/brand/house.jpg';
import brand_mohito from '../images/brand/mohito.jpg';
import brand_sinsay from '../images/brand/sinsay.jpg';
import brand_reserved from '../images/brand/reserved.jpg';

function Home() {
  return (
    <div className='container-fluid'>
      <div id='home' className='row'>
        <div className='homeNavigation col-12 col-sm-6'>
          <ul>
            <li><Link to='/man/viewAll'>Man</Link></li>
            <li><Link to='/woman/viewAll'>Woman</Link></li>
            <li><Link to='/kid/viewAll'>Kids</Link></li>
          </ul>
        </div>
      </div>
      <div style={{margin: '20px 0'}} className='row'>
        <div className='col-12 col-md-6 position-relative bg-beige'>
          <div className='center-element-verically' style={{width: '95%'}}>
            <h4 className='text-center display-5'>Now more for club members!</h4>
            <div className='text-center'>Check the My Account tab and see what offers we have prepared for you.</div>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <DiscountCarousel />
        </div>

      </div>
      <div className='row linear-gradient-pink'>
        <h5 className='col-12 text-center font-Volkorn display-5 font-italic'>popular categories:</h5>
        <div className='col-12' id='popular-items'>
          <div className='position-relative' id='popular-discount'>
            <img src={popular_discount} alt='popular_discount'/>
            <div>
              <span className='position-absolute ml-2 text-warning black-outline-text' style={{top: '5px', fontSize: '20px'}}>discounts</span>
            </div>
          </div>
          <div className='position-relative' id='popular-accesories'>
            <img src={popular_accesories} alt='popular_accesories'/>
            <div>
              <span className='position-absolute ml-2 text-warning black-outline-text' style={{top: '5px', fontSize: '20px'}}>accessories</span>
            </div>
          </div>
          <div className='position-relative' id='popular-hat'>
            <img src={popular_hat} alt='popular_hat'/>
            <div>
              <span className='position-absolute ml-2 text-warning black-outline-text' style={{top: '5px', fontSize: '20px'}}>hats</span>
            </div>
          </div>
          <div className='position-relative' id='popular-shirt'>
            <img src={popular_shirt} alt='popular_shirt'/>
            <div>
              <span className='position-absolute ml-2 text-warning black-outline-text' style={{top: '5px', fontSize: '20px'}}>shirts</span>
            </div>
          </div>
          <div className='position-relative' id='popular-shoe'>
            <img src={popular_shoe} alt='popular_shoe'/>
            <div>
              <span className='position-absolute ml-2 text-warning black-outline-text' style={{top: '5px', fontSize: '20px'}}>shoes</span>
            </div>
          </div>
          <div className='position-relative' id='popular-tshirt'>
            <img src={popular_tshirt} alt='popular_tshirt'/>
            <div>
              <span className='position-absolute ml-2 text-warning black-outline-text' style={{top: '5px', fontSize: '20px'}}>T-shirts</span>
            </div>
          </div>
          <div className='position-relative' id='popular-trousers'>
            <img src={popular_trousers} alt='popular_trousers'/>
            <div>
              <span className='position-absolute ml-2 text-warning black-outline-text' style={{top: '5px', fontSize: '20px'}}>trousers</span>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-10 col-xl-8 row pt-3 pb-3' style={{margin: 'auto'}}>
          <div className='col-12 col-md-6 m-auto font-Volkorn text-align-dependent' style={{fontSize: '20px', fontStyle: 'italic'}}>Over 600 shops and brands</div>
          <div className='col-12 col-md-6 font-Muli font-weight-light text-align-dependent'>Lorem ipsum dolor sit amet,
           consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
        </div>
        <div className='col-12 d-flex flex-row flex-wrap justify-content-center' id='brand-items'>
          <div className='position-relative' id='brand-4f'>
            <img src={brand_4f} alt='brand_4f'/>
            <div>
              <span className='position-absolute text-danger black-outline-text font-italic' style={{top: '80%', left: '50%', transform: 'translate(-50%)', fontSize: '20px'}}>4F<span className='text-warning'>.</span></span>
            </div>
          </div>
          <div className='position-relative' id='brand-reserved'>
            <img src={brand_reserved} alt='brand_reserved'/>
            <div>
              <span className='position-absolute text-danger black-outline-text font-italic' style={{top: '80%', left: '50%', transform: 'translate(-50%)', fontSize: '20px'}}>reserved<span className='text-warning'>.</span></span>
            </div>
          </div>
          <div className='position-relative' id='brand-sinsay'>
            <img src={brand_sinsay} alt='brand_sinsay'/>
            <div>
              <span className='position-absolute text-danger black-outline-text font-italic' style={{top: '80%', left: '50%', transform: 'translate(-50%)', fontSize: '20px'}}>sinsay<span className='text-warning'>.</span></span>
            </div>
          </div>
          <div className='position-relative' id='brand-house'>
            <img src={brand_house} alt='brand_house'/>
            <div>
              <span className='position-absolute text-danger black-outline-text font-italic' style={{top: '80%', left: '50%', transform: 'translate(-50%)', fontSize: '20px'}}>house<span className='text-warning'>.</span></span>
            </div>
          </div>
          <div className='position-relative' id='brand-mohito'>
            <img src={brand_mohito} alt='brand_mohito'/>
            <div>
              <span className='position-absolute text-danger black-outline-text font-italic' style={{top: '80%', left: '50%', transform: 'translate(-50%)', fontSize: '20px'}}>mohito<span className='text-warning'>.</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
