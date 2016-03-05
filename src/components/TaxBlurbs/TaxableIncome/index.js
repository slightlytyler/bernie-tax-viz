import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class TaxBlurbsTaxableIncomeItem extends Component {
  static propTypes ={
    taxableIncome: PropTypes.number,
    filingStatus: PropTypes.oneOf(['single', 'married']),
    agi: PropTypes.number,
    updateTaxableIncome: PropTypes.func.isRequired,
    updateFilingStatus: PropTypes.func.isRequired,
    updateAGI: PropTypes.func.isRequired,
  };

  updateTaxableIncome = e => this.props.updateTaxableIncome(e.target.value);

  updateFilingStatus = e => this.props.updateFilingStatus(e.target.value);

  updateAGI = e => this.props.updateAGI(e.target.value);

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
    } = this.props;

    return (
      <Item
        name="Income"
        savings={125}
      >
        <input value={taxableIncome} onChange={updateTaxableIncome} />
        <input value={filingStatus} onChange={updateFilingStatus} />
        <input value={agi} onChange={updateAGI} />
      </Item>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'reducers/inputs';

export default connect(
  state => ({
    taxableIncome: state.inputs.taxableIncome,
    filingStatus: state.inputs.filingStatus,
    agi: state.inputs.agi,
  }),
  dispatch => bindActionCreators({
    updateTaxableIncome: income => actions.updateInputs('taxableIncome', income),
    updateFilingStatus: status => actions.updateInputs('filingStatus', status),
    updateAGI: agi => actions.updateInputs('agi', agi),
  }, dispatch),
)(TaxBlurbsTaxableIncomeItem);
