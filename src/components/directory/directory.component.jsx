import React, { Component } from 'react';
import './directory.styless.scss';
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} imageUrl={imageUrl} title={title} cardSize={size} />
        ))}
      </div>
    );
  }
}
