import React, { Component, PropTypes } from 'react';
import Item from '../Item';
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

class TaxBlurbsTaxableIncomeItem extends Component {
  static propTypes ={
    taxableIncome: PropTypes.number,
    filingStatus: PropTypes.oneOf(['single', 'married']),
    agi: PropTypes.number,
    savings: PropTypes.number,
    updateTaxableIncome: PropTypes.func.isRequired,
    updateFilingStatus: PropTypes.func.isRequired,
    updateAGI: PropTypes.func.isRequired,
  };

  updateTaxableIncome = e => this.props.updateTaxableIncome(Number(e.target.value));

  updateFilingStatus = (e, index, value) => this.props.updateFilingStatus(value);

  updateAGI = e => this.props.updateAGI(Number(e.target.value));

  render() {
    const {
      updateTaxableIncome,
      updateFilingStatus,
      updateAGI,
    } = this;
    const {
      taxableIncome,
      filingStatus,
      agi,
      savings,
    } = this.props;

    return (
      <Item
        name="Income"
        savings={savings}
      >
        <TextField
          type="number"
          floatingLabelText="Taxable Income"
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
          floatingLabelText="AGI (optional)"
          value={agi}
          onChange={updateAGI}
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
  agiSelector,
  ordinaryIncomeSavingsSelector,
  actions,
} from 'reducers/inputs';

export default connect(
  state => ({
    taxableIncome: taxableIncomeSelector(state),
    filingStatus: filingStatusSelector(state),
    agi: agiSelector(state),
    savings: ordinaryIncomeSavingsSelector(state),
  }),
  dispatch => bindActionCreators({
    updateTaxableIncome: income => actions.updateInputs('taxableIncome', income),
    updateFilingStatus: status => actions.updateInputs('filingStatus', status),
    updateAGI: agi => actions.updateInputs('agi', agi),
  }, dispatch),
)(TaxBlurbsTaxableIncomeItem);
