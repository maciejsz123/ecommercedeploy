import React from 'react';
import Navigation from './navigation';
import Sort from './sort';
import ItemListInfo from './itemListInfo.jsx';
import ItemList from './itemList.jsx';

function Kids() {
  return (
    <div className='container-fluid'>
      <Navigation />
      <div className='row'>
        <Sort />
        <ItemListInfo />
      </div>
      <ItemList sex='kid'/>
    </div>
  )
}

export default Kids;
