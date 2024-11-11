import React from 'react';
import './BadgeDiscount.css';

export default function BadgeDiscount(props) {
  return (
    <span className='badge-discount'>{props.children}%</span>
  )
}
