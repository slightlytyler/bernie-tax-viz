import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import scrollTo from 'utils/scrollTo';

import colors from 'styles/colors';
import styles from './styles.styl';
import RaisedButton from 'material-ui/lib/raised-button';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class Cases extends Component {
  static propTypes = {
    currentCase: PropTypes.string.isRequired,
    updateUserCase: PropTypes.func.isRequired,
  };

  scrollToInputs = () => scrollTo('inputs');

  render() {
    const { currentCase, updateUserCase } = this.props;

    return (
      <div id="cases" styleName="cases">
        <RaisedButton
          label="Low income"
          backgroundColor="white"
          labelColor={colors.bernieBlue}
        />
        <RaisedButton
          label="Median income"
          backgroundColor="white"
          labelColor={colors.bernieBlue}
        />
        <RaisedButton
          label="High income"
          backgroundColor="white"
          labelColor={colors.bernieBlue}
        />
        <RaisedButton
          label="Very high income"
          backgroundColor="white"
          labelColor={colors.bernieBlue}
        />
        <RaisedButton
          label="What about me?"
          backgroundColor="white"
          labelColor={colors.bernieBlue}
        />
      </div>
    );
  }
}


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'reducers/userCase';

export default connect(
  state => ({
    currentCase: state.userCase,
  }),
  dispatch => bindActionCreators({
    updateUserCase: actions.updateUserCase,
  }, dispatch)
)(Cases);
