import React, { Component, PropTypes } from 'react';
import Item from '../Item';
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

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
          This includes your wages and profits you make on personal sales. The
          Plan will leave the lowest four tax brackets (up to the 28% bracket)
          unchanged, and add a few new tax brackets for the highest-earners. `
        }
      >
        <TextField
          type="number"
          floatingLabelText="Gross Income"
          value={taxableIncome}
          defaultValue={0}
          onChange={updateTaxableIncome}
          style={{ width: '20em', marginRight: '2em', fontSize: '1.25em' }}
          underlineFocusStyle={{ borderColor: 'white' }}
        />
        <SelectField
          floatingLabelText="Filing Status"
          value={filingStatus}
          onChange={updateFilingStatus}
          style={{ width: '20em', marginRight: '2em', fontSize: '1.25em' }}
        >
          <MenuItem value="single" primaryText="Single"/>
          <MenuItem value="married" primaryText="Married"/>
        </SelectField>
        <TextField
          type="number"
          floatingLabelText="Dependents"
          value={dependents}
          onChange={updateDependents}
          style={{ width: '15em', fontSize: '1.25em' }}
          underlineFocusStyle={{ borderColor: 'white' }}
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
