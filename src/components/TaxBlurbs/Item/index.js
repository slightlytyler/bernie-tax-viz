import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import colors from 'styles/colors';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class TaxBlurbsItem extends Component {
  static propTypes ={
    name: PropTypes.string.isRequired,
    savings: PropTypes.number.isRequired,
    inputs: PropTypes.arrayOf(React.PropTypes.shape({
      label: PropTypes.string.isRequired,
      handleChange: PropTypes.func.isRequired,
    })),
  };

  render() {
    const { name, savings, inputs } = this.props;

    return (
      <li
        className="pane"
        styleName="base"
        style={{
          backgroundColor: savings >= 0 ? colors['positive-green'] : colors['negative-red'],
        }}
      >
        <section styleName="title">{name}</section>

        <ul styleName="inputs">
          {
            inputs
            ? inputs.map(input => (
              <li key={input.label} styleName="item">
                <label styleName="label">{input.label}</label>
                <input
                  styleName="input"
                  value={input.value}
                  onChange={input.handleChange}
                />
              </li>
            ))
            : undefined
          }
        </ul>
      </li>
    );
  }
}
