import React, { Component, PropTypes } from 'react';
import Item from '../Item';

class TaxBlurbsEstateBenefitsItem extends Component {
  static propTypes ={
    estateBenefits: PropTypes.number,
    savings: PropTypes.number.isRequired,
    updateEstateBenefits: PropTypes.func.isRequired,
  };

  updateEstateBenefits = e => this.props.updateEstateBenefits(e.target.value);

  render() {
    return (
      <Item
        name="Estate Benefits"
        savings={this.props.savings}
      >
        <input value={this.props.estateBenefits} onChange={this.updateEstateBenefits} />
      </Item>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'reducers/inputs';

export default connect(
  state => ({
    estateBenefits: state.inputs.estateBenefits,
    savings: -53,
  }),
  dispatch => bindActionCreators({
    updateEstateBenefits: income => actions.updateInputs('estateBenefits', income),
  }, dispatch),
)(TaxBlurbsEstateBenefitsItem);
