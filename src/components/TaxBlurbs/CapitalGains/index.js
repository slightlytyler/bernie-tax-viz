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
        savings={this.props.savings}
      >
        <TextField
          type="number"
          floatingLabelText="Income"
          value={this.props.capitalGains}
          defaultValue={0}
          onChange={this.props.updateCapitalGains}
          style={{ width: '20em', fontSize: '1.25em' }}
          underlineFocusStyle={{ borderColor: 'white' }}
        />
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
