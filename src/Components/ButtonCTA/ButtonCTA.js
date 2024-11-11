import React from 'react';
import './ButtonCTA.css';

export default function ButtonCTA(props) {
  return (
    <button className='btn-cta'>{props.children}</button>
  )
}
