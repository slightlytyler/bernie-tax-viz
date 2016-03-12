import React, { Component, PropTypes } from 'react';
import { firebase } from 'redux-react-firebase';
import cssModules from 'react-css-modules';
import accounting from 'accounting';
import generateId from 'shortid';
import omit from 'lodash.omit';
import pick from 'lodash.pick';

import colors from 'styles/colors';
import styles from './styles.styl';
import ShareCreator from 'components/ShareCreator';
import DifferenceBar from './DifferenceBar';
import { customKey, casesById, emptyCase } from 'constants/cases';

@firebase()
@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class MainViz extends Component {
  static propTypes = {
    difference: PropTypes.shape({
      spend: PropTypes.number.isRequired,
      save: PropTypes.number.isRequired,
    }),
    inputs: PropTypes.object.isRequired,
    savings: PropTypes.number.isRequired,
    maxSaveCategory: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    maxSpendCategory: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    currentCase: PropTypes.string.isRequired,
    firebase: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired,
    updateName: PropTypes.func.isRequired,
    updateShareLinkId: PropTypes.func.isRequired,
  };

  emptySubject = 'American taxpayer';

  share = (name, cb) => {
    const id = generateId();
    const shakenRecord = pick(this.props.inputs, input => typeof input !== 'undefined');
    const trimmedRecord = omit(shakenRecord, 'id', 'label', 'custom');
    const filledInRecord = Object.assign({}, emptyCase, trimmedRecord, { name });

    this.props.firebase.push(
      `/shares/${id}`,
      filledInRecord,
      () => {
        this.props.updateShareLinkId(id);
        cb();
      },
    );
  }

  renderFooter() {
    const { maxSaveCategory, maxSpendCategory } = this.props;

    if (maxSaveCategory && maxSpendCategory) {
      return (
        <footer styleName="footer">
          <section styleName="row">
            I'll save the most on {maxSaveCategory}
          </section>
          <section styleName="row">
            and spend the most on {maxSpendCategory}.
          </section>
        </footer>
      );
    } else if (maxSpendCategory) {
      return (
        <footer styleName="footer">
          <section styleName="row">
            I'll spend the most on {maxSpendCategory}.
          </section>
          <section styleName="row">
          </section>
        </footer>
      );
    }

    return (
      <footer styleName="footer">
        <section styleName="row">
          I'll save the most on {maxSaveCategory}.
        </section>
        <section styleName="row">
        </section>
      </footer>
    );
  }

  renderGreeting(userName) {
    const customName = this.props.inputs.name;

    if (customName) {
      return (
        <section styleName="large row">
          Hi, I'm <span styleName="whom">{customName}</span>.
        </section>
      );
    }

    return (
      <section styleName="large row">
        Hi, I'm &nbsp;
        <span styleName="whom">
          {
            userName === this.emptySubject
              ? `an ${userName}`
              : `a ${userName} American`
          }
        </span>.
      </section>
    );
  }

  renderEmpty(userName) {
    return (
      <div styleName="main-viz">
        <section styleName="container">
          <header styleName="header">
            {this.renderGreeting(userName)}
            <section styleName="row">
              Fill out the form to the right
            </section>
            <section styleName="row">
              to get started.
            </section>
          </header>
          <DifferenceBar />
          <footer styleName="footer">
            <section styleName="row">
              Give us the facts
            </section>
            <section styleName="row">
              and we'll show you the differences.
            </section>
          </footer>
          <ShareCreator disabled />
        </section>
      </div>
    );
  }

  render() {
    const { inputs, savings, difference, currentCase, updateName } = this.props;
    const positiveSavings = savings > 0;
    const netZeroSavings = savings === 0;
    const userName = currentCase === customKey
      ? this.emptySubject
      : casesById[currentCase].label
    ;

    let variationText;
    let savingsColor;
    if (positiveSavings) {
      variationText = 'less';
      savingsColor = colors.bernieBlue;
    } else {
      variationText = 'more';
      savingsColor = colors.negativeRed;
    }

    if (difference.save !== 0 || difference.spend !== 0) {
      return (
        <div styleName="main-viz">
          <section styleName="container">
            <header styleName="header">
              {this.renderGreeting(userName)}
              <section styleName="row">
                I'll spend about&nbsp;
                {
                  !netZeroSavings
                  && (
                    <span
                      styleName="savings"
                      style={{
                        color: savingsColor,
                      }}
                    >
                      {accounting.formatMoney(Math.abs(savings), '$', 0)}
                    </span>
                  )
                }
              </section>
              <section styleName="row">
                {netZeroSavings ? 'the same' : variationText} per year under Bernie's plan.
              </section>
            </header>
            <DifferenceBar
              spend={difference.spend}
              save={difference.save}
            />
            {this.renderFooter()}
            <ShareCreator
              handleShare={this.share}
              currentName={inputs.name}
              shareLinkId={inputs.shareLinkId}
              updateName={updateName}
            />
          </section>
        </div>
      );
    }

    return this.renderEmpty(userName);
  }
}

import { connect } from 'react-redux';
import {
  inputsSelector,
  totalDifferenceSelector,
  totalSavingsSelector,
  maxSaveCategorySelector,
  maxSpendCategorySelector,
} from 'reducers/inputs';
import { push } from 'react-router-redux';
import { actions as inputsActions } from 'reducers/inputs';

export default connect(
  state => ({
    inputs: inputsSelector(state),
    difference: totalDifferenceSelector(state),
    savings: totalSavingsSelector(state),
    maxSaveCategory: maxSaveCategorySelector(state),
    maxSpendCategory: maxSpendCategorySelector(state),
  }),
  dispatch => ({
    push: id => dispatch(push(`share/${id}`)),
    updateName: name => dispatch(inputsActions.updateInputs('name', name)),
    updateShareLinkId: id => dispatch(inputsActions.updateInputs('shareLinkId', id)),
  }),
)(MainViz);
