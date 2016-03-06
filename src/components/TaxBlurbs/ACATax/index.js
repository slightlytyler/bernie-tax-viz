import React, { Component, PropTypes } from 'react';
import Item from '../Item';
import TextField from 'material-ui/lib/text-field';
import Slider from 'material-ui/lib/slider';

class TaxBlurbsACATaxItem extends Component {
  static propTypes ={
    monthlyInsurancePremium: PropTypes.number,
    insuranceDeductible: PropTypes.number,
    anticipatedYearlyHealthSpending: PropTypes.number,
    maxAnticipatedYearlyHealthSpending: PropTypes.number,
    savings: PropTypes.number.isRequired,
    updateMonthlyInsurancePremium: PropTypes.func.isRequired,
    updateInsuranceDeductible: PropTypes.func.isRequired,
    updateAnticipatedYearlyHealthSpending: PropTypes.func.isRequired,
  };

  updateMonthlyInsurancePremium = e =>
    this.props.updateMonthlyInsurancePremium(Number(e.target.value))
  ;

  updateInsuranceDeductible = e =>
    this.props.updateInsuranceDeductible(Number(e.target.value))
  ;

  updateAnticipatedYearlyHealthSpending = (e, value) => {
    const {
      maxAnticipatedYearlyHealthSpending,
      updateAnticipatedYearlyHealthSpending,
    } = this.props;
    const newValue = Math.round(Number(
      value
      ? value * maxAnticipatedYearlyHealthSpending
      : e.target.value
    ));

    updateAnticipatedYearlyHealthSpending(
        newValue > maxAnticipatedYearlyHealthSpending
        ? maxAnticipatedYearlyHealthSpending
        : newValue
    );
  };

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
      maxAnticipatedYearlyHealthSpending,
      savings,
    } = this.props;

    return (
      <Item
        name="ACA Tax"
        blurb={`
          The Plan will replace all of your annual healthcare costs with a 2.2%
          tax on your ordinary income as a part of Medicare For All.
        `}
        savings={savings}
      >
        <TextField
          type="number"
          floatingLabelText="Monthly Insurance Premium"
          value={monthlyInsurancePremium}
          defaultValue={0}
          onChange={updateMonthlyInsurancePremium}
          style={{ width: '20em', marginRight: '2em', fontSize: '1.25em' }}
          underlineFocusStyle={{ borderColor: 'white' }}
        />
        <TextField
          type="number"
          floatingLabelText="Insurance Deductible"
          value={insuranceDeductible}
          defaultValue={0}
          onChange={updateInsuranceDeductible}
          style={{ width: '20em', marginRight: '2em', fontSize: '1.25em' }}
          underlineFocusStyle={{ borderColor: 'white' }}
        />
        <div>
          <Slider
            value={anticipatedYearlyHealthSpending / maxAnticipatedYearlyHealthSpending}
            defaultValue={0}
            onChange={updateAnticipatedYearlyHealthSpending}
            style={{ width: '24.5em', margin: '.5em 0' }}
          />
          <TextField
            type="number"
            floatingLabelText="Anticipated Yearly Health Spending"
            value={Math.round(anticipatedYearlyHealthSpending)}
            defaultValue={0}
            onChange={updateAnticipatedYearlyHealthSpending}
            style={{ width: '20em', fontSize: '1.25em' }}
            underlineFocusStyle={{ borderColor: 'white' }}
          />
        </div>
      </Item>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { acaSavingsSelector, actions } from 'reducers/inputs';

export default connect(
  state => ({
    monthlyInsurancePremium: state.inputs.monthlyInsurancePremium,
    insuranceDeductible: state.inputs.insuranceDeductible,
    anticipatedYearlyHealthSpending: state.inputs.anticipatedYearlyHealthSpending,
    maxAnticipatedYearlyHealthSpending: 20000,
    savings: acaSavingsSelector(state),
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
