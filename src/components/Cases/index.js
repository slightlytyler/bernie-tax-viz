import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import { cases, casesById } from 'constants/cases';
import styles from './styles.styl';
import Item from './Item';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class Cases extends Component {
  static propTypes = {
    currentCase: PropTypes.string.isRequired,
    updateUserCase: PropTypes.func.isRequired,
  };

  render() {
    const { currentCase, updateUserCase } = this.props;

    return (
      <div id="cases" styleName="cases">
        {
          cases.map(id => {
            const userCase = casesById[id];

            return (
              <Item
                key={id}
                value={id}
                label={userCase.label}
                active={id === currentCase}
                handleClick={updateUserCase}
              />
            );
          })
        }
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
