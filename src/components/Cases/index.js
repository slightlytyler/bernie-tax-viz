import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Item from './Item';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class Cases extends Component {
  static propTypes = {
    currentCase: PropTypes.string.isRequired,
    updateUserCase: PropTypes.func.isRequired,
  };

  userCases = [
    { value: 'case1', label: 'Low Income' },
    { value: 'case2', label: 'Median Income' },
    { value: 'case3', label: 'High Income' },
    { value: 'case4', label: 'Super High Income' },
    { value: 'custom', label: 'What about me?' },
  ];

  changeCase = caseId => {
    if (caseId !== 'custom') {
      this.props.updateUserCase(caseId);
    }
  }

  render() {
    const { changeCase } = this;
    const { currentCase } = this.props;

    return (
      <div id="cases" styleName="cases">
        {
          this.userCases.map(userCase => (
            <Item
              key={userCase.value}
              value={userCase.value}
              label={userCase.label}
              active={userCase.value === currentCase}
              handleClick={changeCase}
            />
          ))
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
