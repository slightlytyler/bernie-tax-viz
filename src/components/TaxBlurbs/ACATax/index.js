import React, { Component, PropTypes } from 'react';
import colors from 'styles/colors';
import TextField from 'components/TextField';
import Item from '../Item';

class TaxBlurbsACATaxItem extends Component {
  static propTypes ={
    anticipatedYearlyHealthSpending: PropTypes.number,
    savings: PropTypes.number.isRequired,
    updateAnticipatedYearlyHealthSpending: PropTypes.func.isRequired,
  };

  updateAnticipatedYearlyHealthSpending = e =>
    this.props.updateAnticipatedYearlyHealthSpending(Number(e.target.value))
  ;

  render() {
    const {
      updateAnticipatedYearlyHealthSpending,
    } = this;
    const {
      anticipatedYearlyHealthSpending,
      savings,
    } = this.props;

    return (
      <Item
        name="Medicare For All Payroll Tax"
        blurb={`
          The Plan replaces all annual health-care out-of-pocket costs with
          a 2.2% payroll tax under Medicare for All. Instead of paying for premiums,
          co-pays, co-insurance or any other cost, you will pay 2.2% of your taxable
          income (high-value capital gains above MAGI will incur an additional Medicare
          surcharge of 10%, in Capital Gains).
        `}
        savings={savings}
        themeColor={colors.aca}
        showThemeColor={!(anticipatedYearlyHealthSpending)}
      >
        <TextField
          type="number"
          floatingLabelText="What is your Anticipated Yearly Health Spending?"
          value={anticipatedYearlyHealthSpending}
          defaultValue={0}
          step={1000}
          onChange={updateAnticipatedYearlyHealthSpending}
        />
      </Item>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  anticipatedYearlyHealthSpendingSelector,
  acaSavingsSelector,
  actions,
} from 'reducers/inputs';

export default connect(
  state => ({
    anticipatedYearlyHealthSpending: anticipatedYearlyHealthSpendingSelector(state),
    savings: acaSavingsSelector(state),
  }),
  dispatch => bindActionCreators({
    updateAnticipatedYearlyHealthSpending: spending => (
      actions.updateInputs('anticipatedYearlyHealthSpending', spending)
    ),
  }, dispatch),
)(TaxBlurbsACATaxItem);
