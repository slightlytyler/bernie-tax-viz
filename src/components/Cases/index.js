import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import tinycolor from 'tinycolor2';
import scrollTo from 'utils/scrollTo';

import colors from 'styles/colors';
import styles from './styles.styl';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

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
        <header styleName="header">The Taxpayers</header>
        <Tabs
          value={currentCase}
          onChange={updateUserCase}
          inkBarStyle={{ backgroundColor: colors.darkBernieBlue }}
        >
          <Tab
            label="Low Income"
            value="case1"
            style={{
              backgroundColor: tinycolor(colors.darkBernieBlue).lighten(9).toString(),
            }}
          />
          <Tab
            label="Middle Income"
            value="case2"
            style={{
              backgroundColor: tinycolor(colors.darkBernieBlue).lighten(6).toString(),
            }}
          />
          <Tab
            label="High Income"
            value="case3"
            style={{
              backgroundColor: tinycolor(colors.darkBernieBlue).lighten(3).toString(),
            }}
          />
          <Tab
            label="Super High Income"
            value="case4"
            style={{ backgroundColor: colors.darkBernieBlue }}
          />
          <Tab
            label="What about me?"
            value="custom"
            onClick={this.scrollToInputs}
            style={{ backgroundColor: colors.bernieBlue }}
          />
        </Tabs>
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
