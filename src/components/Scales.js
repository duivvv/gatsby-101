import React, { PureComponent } from 'react';
import Link from 'gatsby-link';
import { Scale } from 'music-fns';

import Option from '../styled/Option';
import Select from '../styled/Select';

class Scales extends PureComponent {
  state = {
    scales: Object.keys(Scale),
  };

  renderScale = scale => (
    <Option value={scale} key={scale}>
      {scale}
    </Option>
  );

  onChange = e => {
    const { onChange } = this.props;
    onChange(e.currentTarget.value);
  };

  render() {
    const { scales } = this.state;

    return (
      <Select onChange={this.onChange}>
        {scales.map(scale => this.renderScale(scale))}
      </Select>
    );
  }
}

export default Scales;
