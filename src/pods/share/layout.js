import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import Header from 'components/Header';
import Viz from 'components/MainViz/Viz';
import Footer from 'components/Footer';

import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-react-firebase';
const { dataToJS, isLoaded } = helpers;

import {
  totalDifferenceSelector,
  totalSavingsSelector,
  maxSaveCategorySelector,
  maxSpendCategorySelector,
} from 'reducers/inputs';

@connect(
  (state, props) => {
    const share = dataToJS(state.firebase, `/shares/${props.params.shareId}`);

    return {
      currentShare: props.params.shareId,
      share: share ? share[Object.keys(share)[0]] : share,
    };
  },
)
@firebase(props => ([
  `/shares/${props.currentShare}`,
]))
@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
class ShareLayout extends Component {
  static propTypes = {
    currentShare: PropTypes.string.isRequired,
    share: PropTypes.object,
  };

  renderViz() {
    const { share } = this.props;
    const mockState = {
      inputs: share,
    };

    return (
      <Viz
        savings={totalSavingsSelector(mockState)}
        difference={totalDifferenceSelector(mockState)}
        maxSaveCategory={maxSaveCategorySelector(mockState)}
        maxSpendCategory={maxSpendCategorySelector(mockState)}
      />
    );
  }

  renderLoading() {
    return (
      <div styleName="loading">Loading</div>
    );
  }

  render() {
    const { share } = this.props;

    return (
      <div styleName="base">
        <Header />
        <div styleName="main">
          <div styleName="sections">
            {
              isLoaded(share)
              ? this.renderViz()
              : this.renderLoading()
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ShareLayout;
