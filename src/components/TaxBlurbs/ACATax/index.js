import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class TaxBlurbsACATaxItem extends Component {
  static propTypes ={
    monthlyInsurancePremium: PropTypes.number,
    insuranceDeductible: PropTypes.number,
    anticipatedYearlyHealthSpending: PropTypes.number,
    savings: PropTypes.number.isRequired,
    updateMonthlyInsurancePremium: PropTypes.func.isRequired,
    updateInsuranceDeductible: PropTypes.func.isRequired,
    updateAnticipatedYearlyHealthSpending: PropTypes.func.isRequired,
  };

  updateMonthlyInsurancePremium = e =>
    this.props.updateMonthlyInsurancePremium(e.target.value)
  ;

  updateInsuranceDeductible = e =>
    this.props.updateInsuranceDeductible(e.target.value)
  ;

  updateAnticipatedYearlyHealthSpending = e =>
    this.props.updateAnticipatedYearlyHealthSpending(e.target.value)
  ;

  render() {
    const {
      updateMonthlyInsurancePremium,
      updateInsuranceDeductible,
      updateAnticipatedYearlyHealthSpending,
    } = this;
    const {
      monthlyInsurancePremium,
      insuranceDeductible,
      anticipatedYearlyHealthSpending,
      savings,
    } = this.props;

    return (
      <Item
        name="ACA Tax"
        savings={savings}
      >
        <input
          value={monthlyInsurancePremium}
          onChange={updateMonthlyInsurancePremium}
        />
        <input
          value={insuranceDeductible}
          onChange={updateInsuranceDeductible}
        />
        <input
          value={anticipatedYearlyHealthSpending}
          onChange={updateAnticipatedYearlyHealthSpending}
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
    monthlyInsurancePremium: state.inputs.monthlyInsurancePremium,
    insuranceDeductible: state.inputs.insuranceDeductible,
    anticipatedYearlyHealthSpending: state.inputs.anticipatedYearlyHealthSpending,
    savings: 1200,
  }),
  dispatch => bindActionCreators({
    updateMonthlyInsurancePremium: premium => (
      actions.updateInputs('monthlyInsurancePremium', premium)
    ),
    updateInsuranceDeductible: deductible => (
      actions.updateInputs('insuranceDeductible', deductible)
    ),
    updateAnticipatedYearlyHealthSpending: spending => (
      actions.updateInputs('anticipatedYearlyHealthSpending', spending)
    ),
  }, dispatch),
)(TaxBlurbsACATaxItem);
