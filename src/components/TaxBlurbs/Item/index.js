import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class TaxBlurbsItem extends Component {
  static propTypes ={
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name } = this.props;

    return (
      <li className="pane" styleName="item positive">
        <section styleName="title">{name}</section>

        <ul styleName="inputs">
          <li styleName="item">
            <label styleName="label">Input</label>
            <input styleName="input" />
          </li>

          <li styleName="item">
            <label styleName="label">Input</label>
            <input styleName="input" />
          </li>
        </ul>
      </li>
    );
  }
}
