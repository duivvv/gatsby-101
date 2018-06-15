import React, { PureComponent } from 'react';
import Link from 'gatsby-link';
import { createScale, Scale, NOTES } from 'music-fns';

import Option from '../styled/Option';
import Select from '../styled/Select';

class Notes extends PureComponent {
  state = {
    notes: createScale('C', Scale.CHROMATIC),
  };

  renderNote = note => (
    <Option value={note} key={note}>
      {note}
    </Option>
  );

  onChange = e => {
    const { onChange } = this.props;
    onChange(e.currentTarget.value);
  };

  render() {
    const { notes } = this.state;

    return (
      <Select onChange={this.onChange}>
        {notes.map(note => this.renderNote(note))}
      </Select>
    );
  }
}

export default Notes;
