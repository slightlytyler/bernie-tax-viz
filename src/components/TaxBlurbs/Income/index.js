import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import colors from 'styles/colors';
import Item from '../Item';
import TextField from 'components/TextField';

class TaxBlurbsTaxableIncomeItem extends Component {
  static propTypes ={
    taxableIncome: PropTypes.number,
    filingStatus: PropTypes.oneOf(['single', 'married']),
    dependents: PropTypes.number,
    savings: PropTypes.number,
    updateTaxableIncome: PropTypes.func.isRequired,
    updateFilingStatus: PropTypes.func.isRequired,
    updateDependents: PropTypes.func.isRequired,
  };

  updateTaxableIncome = e => this.props.updateTaxableIncome(Number(e.target.value));

  updateFilingStatus = (e, index, value) => this.props.updateFilingStatus(value);

  updateDependents = e => this.props.updateDependents(Number(e.target.value));

  render() {
    const {
      updateTaxableIncome,
      updateFilingStatus,
      updateDependents,
    } = this;
    const {
      taxableIncome,
      filingStatus,
      dependents,
      savings,
    } = this.props;

    return (
      <Item
        name="Income"
        savings={savings}
        blurb={
          `Ordinary income is the money you earn by selling things or working.
          The Plan will leave the lowest four tax brackets (up to the 28% bracket)
          unchanged, and add a few tax brackets for the highest-earners. `
        }
      >
        <TextField
          type="number"
          floatingLabelText="How much will you make this year?"
          value={taxableIncome}
          defaultValue={0}
          onChange={updateTaxableIncome}
        />
        <SelectField
          floatingLabelText="Are you single or married?"
          value={filingStatus}
          onChange={updateFilingStatus}
          style={{ width: '20em', marginRight: '2em', fontSize: '1.25em' }}
          labelStyle={{ color: colors.white }}
          floatingLabelStyle={{ whiteSpace: 'nowrap', color: colors.white }}
        >
          <MenuItem value="single" primaryText="Single"/>
          <MenuItem value="married" primaryText="Married"/>
        </SelectField>
        <TextField
          type="number"
          floatingLabelText="How many dependents do you have?"
          value={dependents}
          onChange={updateDependents}
        />
      </Item>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  taxableIncomeSelector,
  filingStatusSelector,
  dependentsSelector,
  ordinaryIncomeSavingsSelector,
  actions,
} from 'reducers/inputs';

export default connect(
  state => ({
    taxableIncome: taxableIncomeSelector(state),
    filingStatus: filingStatusSelector(state),
    dependents: dependentsSelector(state),
    savings: ordinaryIncomeSavingsSelector(state),
  }),
  dispatch => bindActionCreators({
    updateTaxableIncome: income => actions.updateInputs('taxableIncome', income),
    updateFilingStatus: status => actions.updateInputs('filingStatus', status),
    updateDependents: dependents => actions.updateInputs('dependents', dependents),
  }, dispatch),
)(TaxBlurbsTaxableIncomeItem);
