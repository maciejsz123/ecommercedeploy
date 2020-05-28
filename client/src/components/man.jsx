import React from 'react';
import Navigation from './navigation';
import Sort from './sort';
import ItemListInfo from './itemListInfo.jsx';
import ItemList from './itemList.jsx';

function Man() {
  return (
    <div className='container-fluid'>
      <Navigation />
      <div className='row'>
        <Sort />
        <ItemListInfo />
      </div>
      <ItemList sex='man'/>
    </div>
  )
}

export default Man;
