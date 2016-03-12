import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import Paper from 'material-ui/lib/paper';
import TextField from './TextField';
import SelectField from './SelectField';
import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Inputs extends Component {
  static propTypes = {
    taxableIncome: PropTypes.number,
    filingStatus: PropTypes.string,
    dependents: PropTypes.number,
    anticipatedYearlyHealthSpending: PropTypes.number,
    capitalGains: PropTypes.number,
    estateBenefits: PropTypes.number,
    updateInputs: PropTypes.func,
  };

  render() {
    const {
      taxableIncome,
      filingStatus,
      dependents,
      anticipatedYearlyHealthSpending,
      capitalGains,
      estateBenefits,
      updateInputs,
    } = this.props;

    return (
      <section styleName="inputs">
        <Paper zDepth={3}>
          <header styleName="header">Can I ask you some questions?</header>
          <ul styleName="list">
            <li styleName="item">
              <TextField
                ref="firstInput"
                type="number"
                label="How much will you make this year?"
                value={taxableIncome}
                for="taxableIncome"
                step={1000}
                handleChange={updateInputs}
              />
            </li>
            <li styleName="item flush">
              <SelectField
                options={[
                  { value: 'married', label: 'Married' },
                  { value: 'single', label: 'Single' },
                ]}
                value={filingStatus}
                for="filingStatus"
                label="Are you single or married?"
                handleChange={updateInputs}
              />
            </li>
            <li styleName="item">
              <TextField
                type="number"
                label="How many dependents will you claim this year?"
                value={dependents}
                for="dependents"
                step={1}
                handleChange={updateInputs}
              />
            </li>
            <li styleName="item">
              <TextField
                type="number"
                label="What is your health spending this year? (premiums too!)"
                value={anticipatedYearlyHealthSpending}
                for="anticipatedYearlyHealthSpending"
                step={1000}
                handleChange={updateInputs}
              />
            </li>
            <li styleName="item">
              <TextField
                type="number"
                label="How much capital gains will you realize this year?"
                value={capitalGains}
                for="capitalGains"
                step={1000}
                handleChange={updateInputs}
              />
            </li>
            <li styleName="item">
              <TextField
                type="number"
                label="How much will you inherit in your lifetime?"
                value={estateBenefits}
                for="estateBenefits"
                step={1000}
                handleChange={updateInputs}
              />
            </li>
          </ul>
        </Paper>
      </section>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  taxableIncomeSelector,
  filingStatusSelector,
  dependentsSelector,
  anticipatedYearlyHealthSpendingSelector,
  capitalGainsSelector,
  estateBenefitsSelector,
  actions,
} from 'reducers/inputs';

export default connect(
  state => ({
    taxableIncome: taxableIncomeSelector(state),
    filingStatus: filingStatusSelector(state),
    dependents: dependentsSelector(state),
    anticipatedYearlyHealthSpending: anticipatedYearlyHealthSpendingSelector(state),
    capitalGains: capitalGainsSelector(state),
    estateBenefits: estateBenefitsSelector(state),
  }),
  dispatch => bindActionCreators({
    updateInputs: actions.updateInputs,
  }, dispatch),
)(Inputs);
