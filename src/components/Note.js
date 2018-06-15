import React, { PureComponent } from 'react';
import Link from 'gatsby-link';
import { createScale, Scale, NOTES } from 'music-fns';

class Note extends PureComponent {
  render() {
    const { value } = this.props;
    return <span>{value}</span>;
  }
}

export default Note;
