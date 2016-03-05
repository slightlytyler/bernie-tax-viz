import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class TaxBlurbsCapitalGainsItem extends Component {
  static propTypes ={
    capitalGains: PropTypes.number,
    savings: PropTypes.number,
    updateCapitalGains: PropTypes.func.isRequired,
  };

  updateCapitalGains = e => this.props.updateCapitalGains(e.target.value);

  render() {
    return (
      <Item
        name="Capital Gains"
        savings={this.props.savings}
      >
        <input value={this.props.capitalGains} onChange={this.updateCapitalGains} />
      </Item>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'reducers/inputs';

export default connect(
  state => ({
    capitalGains: state.inputs.capitalGains,
    savings: 0,
  }),
  dispatch => bindActionCreators({
    updateCapitalGains: gains => actions.updateInputs('capitalGains', gains),
  }, dispatch),
)(TaxBlurbsCapitalGainsItem);
