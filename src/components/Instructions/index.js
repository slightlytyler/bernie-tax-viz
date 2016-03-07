import React, { Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Title extends Component {
  static propTypes ={
  };

  render() {
    return (
      <div className="pane" styleName="instructions">
        The Tax Plan with Bernie Sanders shows how much more or less taxes Americans
        will personally pay under the Bernie Sanders Tax Plan. First, meet the taxpayers,
        and see how different test cases will fare under The Plan. Second, input your own particulars.
        Then, see your personalized results under the The Plan. Finally, share a test case with your
        friends to spread the word!
      </div>
    );
  }
}
