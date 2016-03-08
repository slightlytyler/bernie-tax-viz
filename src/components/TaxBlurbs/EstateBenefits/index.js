import React, { Component, PropTypes } from 'react';
import colors from 'styles/colors';
import TextField from 'components/TextField';
import Item from '../Item';

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
          The first $5.45m for singles or $10.90m for couples is exempt from Estate Taxes.
          The Plan will lower this exemption to $3.5m/$7m and increase the current tax rate
          by 5%—25%. The largest increase will affect approximately 10,500 households. If you
          will inherit less than $7m during your life, you are not affected.
        `}
        savings={this.props.savings}
        themeColor={colors.estate}
        showThemeColor={!(this.props.estateBenefits)}
      >
        <TextField
          type="number"
          floatingLabelText="What is your expected lifetime estate benefit?"
          value={this.props.estateBenefits}
          defaultValue={0}
          step={1000}
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
