import React from 'react';
import './CurrentPrice.css';

export default function CurrentPrice(props) {
  return (
    <span className='current-price'>${props.children}</span>
  )
}
