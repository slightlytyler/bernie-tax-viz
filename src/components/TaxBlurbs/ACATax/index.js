import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/lib/slider';
import Item from '../Item';
import TextField from 'components/TextField';

class TaxBlurbsACATaxItem extends Component {
  static propTypes ={
    anticipatedYearlyHealthSpending: PropTypes.number,
    maxAnticipatedYearlyHealthSpending: PropTypes.number,
    savings: PropTypes.number.isRequired,
    updateAnticipatedYearlyHealthSpending: PropTypes.func.isRequired,
  };

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
      updateAnticipatedYearlyHealthSpending,
    } = this;
    const {
      anticipatedYearlyHealthSpending,
      maxAnticipatedYearlyHealthSpending,
      savings,
    } = this.props;

    return (
      <Item
        name="ACA Tax"
        blurb={`
          The Plan replaces all annual health-care out-of-pocket costs with
          a 2.2% payroll tax under Medicare for All.
        `}
        savings={savings}
      >
        <div>
          <Slider
            value={anticipatedYearlyHealthSpending / maxAnticipatedYearlyHealthSpending}
            defaultValue={0}
            onChange={updateAnticipatedYearlyHealthSpending}
            style={{ width: '24.5em', margin: '.5em 0' }}
          />
          <TextField
            type="number"
            floatingLabelText="What is your Anticipated Yearly Health Spending?"
            value={Math.round(anticipatedYearlyHealthSpending)}
            defaultValue={0}
            onChange={updateAnticipatedYearlyHealthSpending}
          />
        </div>
      </Item>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  anticipatedYearlyHealthSpendingSelector,
  maxAnticipatedYearlyHealthSpendingSelector,
  acaSavingsSelector,
  actions,
} from 'reducers/inputs';

export default connect(
  state => ({
    anticipatedYearlyHealthSpending: anticipatedYearlyHealthSpendingSelector(state),
    maxAnticipatedYearlyHealthSpending: maxAnticipatedYearlyHealthSpendingSelector(state),
    savings: acaSavingsSelector(state),
  }),
  dispatch => bindActionCreators({
    updateAnticipatedYearlyHealthSpending: spending => (
      actions.updateInputs('anticipatedYearlyHealthSpending', spending)
    ),
  }, dispatch),
)(TaxBlurbsACATaxItem);
