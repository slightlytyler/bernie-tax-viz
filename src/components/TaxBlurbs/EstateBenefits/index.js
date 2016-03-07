import React, { Component, PropTypes } from 'react';
import Item from '../Item';
import TextField from 'components/TextField';

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
        blurb={`
          A certain amount of a gift or inheritance is exempt from the federal
          gift and estate taxes. In 2016, the exemption is $5.45 million for
          individuals and $10.90 million for couples. The Plan will lower this
          exemption to $3.5 million for individuals and $7 million for couples,
          and increase the current tax rate by 5%—15% on the value
          above the exemption. It will also add a 10% tax on the transfer of
          estates worth more than $500 million. This change will affect
          approximately 10,500 households.
        `}
        savings={this.props.savings}
      >
        <TextField
          type="number"
          floatingLabelText="What is your expected lifetime estate benefit?"
          value={this.props.estateBenefits}
          defaultValue={0}
          onChange={this.updateEstateBenefits}
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
