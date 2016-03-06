import React, { Component, PropTypes } from 'react';
import Item from '../Item';
import TextField from 'material-ui/lib/text-field';

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
          Capital gains are your investments' increases in value. These come
          from things like stocks and bonds. The Plan will tax capital gains
          above the 28% bracket the same way it taxes ordinary income.
        `}
        savings={this.props.savings}
      >
        <TextField
          type="number"
          floatingLabelText="Income"
          value={this.props.capitalGains}
          defaultValue={0}
          onChange={this.updateCapitalGains}
          style={{ width: '20em', fontSize: '1.25em' }}
          underlineFocusStyle={{ borderColor: 'white' }}
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
