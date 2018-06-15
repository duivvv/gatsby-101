import React, { PureComponent } from 'react';
import Link from 'gatsby-link';

import Note from '../components/Note';
import Notes from '../components/Notes';
import Scales from '../components/Scales';
import Scale from '../components/Scale';

import { Scale as scales, createScale, NOTES } from 'music-fns';

class Home extends PureComponent {
  state = {
    scale: Object.keys(scales)[0],
    root: 'C',
  };

  render() {
    const { root, scale: type } = this.state;
    const scale = root && type ? createScale(root, scales[type]) : undefined;

    return (
      <section>
        <h1>music-fns</h1>
        <Notes onChange={root => this.setState({ root })} />
        <Scales onChange={scale => this.setState({ scale })} />
        {scale && <Scale scale={scale} />}
      </section>
    );
  }
}

export default Home;
