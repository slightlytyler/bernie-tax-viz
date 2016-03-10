import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class MainVizDiffenceBar extends Component {
  static propTypes = {
    spend: PropTypes.number.isRequired,
    save: PropTypes.number.isRequired,
  };

  render() {
    const { spend, save } = this.props;
    const total = spend + save;
    const toPercent = i => `${i / total * 100}%`;

    if (spend || save) {
      return (
        <section styleName="difference-bar">
          <secion
            styleName="negative"
            style={{ width: toPercent(spend) }}
          />
          <section
            styleName="positive"
            style={{ width: toPercent(save) }}
          />
          <span styleName="origin" />
        </section>
      );
    }

    return (
      <section styleName="difference-bar">
        <span styleName="origin" />
      </section>
    );
  }
}
