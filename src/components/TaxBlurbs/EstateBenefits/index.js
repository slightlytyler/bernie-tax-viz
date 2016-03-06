import React, { Component, PropTypes } from 'react';
import Item from '../Item';
import TextField from 'material-ui/lib/text-field';

class TaxBlurbsEstateBenefitsItem extends Component {
  static propTypes ={
    estateBenefits: PropTypes.number,
    savings: PropTypes.number.isRequired,
    updateEstateBenefits: PropTypes.func.isRequired,
  };

  updateEstateBenefits = e => this.props.updateEstateBenefits(Number(e.target.value));

  render() {
    return (
      <Item
        name="Estate Benefits"
        savings={this.props.savings}
      >
        <TextField
          type="number"
          floatingLabelText="Expected benefits"
          value={this.props.estateBenefits}
          defaultValue={0}
          onChange={this.updateEstateBenefits}
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
  estateBenefitsSelector,
  estateSavingsSelector,
  actions,
} from 'reducers/inputs';

export default connect(
  state => ({
    estateBenefits: estateBenefitsSelector(state),
    savings: estateSavingsSelector(state),
  }),
  dispatch => bindActionCreators({
    updateEstateBenefits: income => actions.updateInputs('estateBenefits', income),
  }, dispatch),
)(TaxBlurbsEstateBenefitsItem);
