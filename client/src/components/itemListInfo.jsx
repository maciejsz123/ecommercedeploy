import React from 'react';
import { connect } from 'react-redux';

function ItemListInfo(props) {
  return(
    <div className='p-2 col-7'>{props.length} items displayed</div>
  )
}

const mapStateToProps = state => ({
  length: state.main.items.length
})

export default connect(mapStateToProps, {})(ItemListInfo);
