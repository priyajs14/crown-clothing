import React from 'react';
import './menu-item.styles.scss';

export default function MenuItem({ title, imageUrl, cardSize = 'small' }) {
  return (
    <div className={`menu-item menu-item-${cardSize}`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
