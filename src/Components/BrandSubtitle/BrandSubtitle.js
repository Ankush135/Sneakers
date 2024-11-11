import React from 'react';
import './BrandSubtitle.css';

export default function BrandSubtitle(props) {
  return (
    <h3 className='brand-subtitle'>{props.children}</h3>
  )
}
