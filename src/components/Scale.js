import React, { PureComponent } from 'react';
import Link from 'gatsby-link';
import { createScale, Scale as scales, NOTES } from 'music-fns';
import styled from 'styled-components';

import Span from '../styled/Span';

const Wrapper = styled.section`
  margin: 1rem 0;
`;

const Note = styled.span`
  display: inline;
  ::after {
    content: ' · ';
  }
`;

class Scale extends PureComponent {
  renderNote = note => <Note key={note}>{note}</Note>;

  render() {
    const { scale } = this.props;
    return <Wrapper>{scale.map(note => this.renderNote(note))}</Wrapper>;
  }
}

export default Scale;
