import React from 'react';
import { Link } from 'react-router-dom';

function EmptyComponentInfo(props) {
  return(
    <div className='d-flex flex-column align-items-center mt-2'>
      <div>
        <span>{props.text}</span>
      </div>
      <div>
        <button className='btn btn-primary'><Link to='/' style={{textDecoration: 'none', color: 'white'}}>Visit our shop</Link></button>
      </div>
    </div>
  )
}

export default EmptyComponentInfo;
