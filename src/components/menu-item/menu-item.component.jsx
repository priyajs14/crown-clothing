import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

function MenuItem({
  title,
  imageUrl,
  cardSize = 'small',
  linkUrl,
  history,
  match,
}) {
  return (
    <div
      className={`menu-item menu-item-${cardSize}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
