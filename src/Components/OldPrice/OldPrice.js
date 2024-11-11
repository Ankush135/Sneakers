import React from 'react';
import './OldPrice.css';

export default function OldPrice(props) {
  return (
    <div className='old-price'>${props.children}</div>
  )
}
