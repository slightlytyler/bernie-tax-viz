import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import RaisedButton from 'material-ui/lib/raised-button';
import colors from 'styles/colors';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class ScrollTopButton extends Component {
  render() {
    return (
      <div styleName="container">
        <RaisedButton
          label="Back to Top"
          linkButton
          href="#cases"
          backgroundColor={colors.bernieBlue}
          labelColor={colors.white}
          labelStyle={{ fontSize: '1.5em' }}
        />
      </div>
    );
  }
}
