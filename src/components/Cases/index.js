import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import { cases, casesById } from 'constants/cases';
import styles from './styles.styl';
import Item from './Item';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class Cases extends Component {
  static propTypes = {
    currentCase: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
  };

  render() {
    const { currentCase, push } = this.props;

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
                handleClick={push}
              />
            );
          })
        }
      </div>
    );
  }
}


import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { updateUserCase } from 'reducers/userCase';

export default connect(
  undefined,
  dispatch => ({
    push: caseId => {
      dispatch(push(caseId));
      dispatch(updateUserCase(caseId));
    },
  }),
)(Cases);
