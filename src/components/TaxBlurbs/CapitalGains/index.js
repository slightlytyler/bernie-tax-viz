import React, { Component, PropTypes } from 'react';
import Item from '../Item';
import TextField from 'components/TextField';

class TaxBlurbsCapitalGainsItem extends Component {
  static propTypes ={
    capitalGains: PropTypes.number,
    savings: PropTypes.number,
    updateCapitalGains: PropTypes.func.isRequired,
  };

  updateCapitalGains = e => this.props.updateCapitalGains(Number(e.target.value));

  render() {
    return (
      <Item
        name="Capital Gains"
        blurb={`
          Capital gains are your investments' increases in value.
          The Plan will tax capital gains
          above the 28% bracket the same way it taxes ordinary income.
        `}
        savings={this.props.savings}
      >
        <TextField
          type="number"
          floatingLabelText="How much Capital Gains will you have next year?"
          value={this.props.capitalGains}
          defaultValue={0}
          onChange={this.updateCapitalGains}
        />
      </Item>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  capitalGainsSelector,
  capitalGainsSavingsSelector,
  actions,
} from 'reducers/inputs';

export default connect(
  state => ({
    capitalGains: capitalGainsSelector(state),
    savings: capitalGainsSavingsSelector(state),
  }),
  dispatch => bindActionCreators({
    updateCapitalGains: gains => actions.updateInputs('capitalGains', gains),
  }, dispatch),
)(TaxBlurbsCapitalGainsItem);
