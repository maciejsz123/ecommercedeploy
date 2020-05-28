import React from 'react';
import Navigation from './navigation';
import Sort from './sort';
import ItemListInfo from './itemListInfo.jsx';
import ItemList from './itemList.jsx';

function Woman() {
  return (
    <div className='container-fluid'>
      <Navigation />
      <div className='row'>
        <Sort />
        <ItemListInfo />
      </div>
      <ItemList sex='woman'/>
    </div>
  )
}

export default Woman;
