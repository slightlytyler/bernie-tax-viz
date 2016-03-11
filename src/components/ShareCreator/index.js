import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';

import colors from 'styles/colors';
import styles from './styles.styl';
import TextField from 'material-ui/lib/text-field';
import { Link } from 'react-router';

@cssModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class ShareCreator extends Component {
  static propTypes ={
    share: PropTypes.func.isRequired,
  };

  state = {
    isPrompting: false,
    shareLinkId: undefined,
  };

  handleShare = () => {
    this.promptForName();
  };

  promptForName = () => {
    this.setState({
      isPrompting: true,
    });
  };

  sendShare = name => {
    this.props.share(name, this.completeShare);
  };

  completeShare = id => {
    this.setState({
      isPrompting: false,
      shareLinkId: id,
    });
  };

  cancelShare = () => {
    this.setState({
      isPrompting: false,
    });
  }

  renderInput() {
    const submit = e => this.sendShare(e.target.value.trim());
    const handleBlur = e => e.target.value.trim() ? submit(e) : this.cancelShare();

    return (
      <TextField
        floatingLabelText="What's your name?"
        onEnterKeyDown={submit}
        onBlur={handleBlur}
        autoFocus
        style={{ margin: 0 }}
        inputStyle={{ color: colors.black }}
        floatingLabelStyle={{ color: colors.gray3 }}
        underlineFocusStyle={{ borderColor: colors.bernieBlue }}
      />
    );
  }

  render() {
    const { shareLinkId, isPrompting } = this.state;
    let content;

    if (shareLinkId) {
      content = (
        <Link to={`/share/${shareLinkId}`} styleName="link">
        http://bernies-tax.dataviz.work/share/{shareLinkId}
      </Link>
      );
    } else {
      content = isPrompting
        ? this.renderInput()
        : 'Feeling the bern? Share your experience.'
      ;
    }
    return (
      <section
        styleName={isPrompting ? 'share-creator' : 'share-creator padded'}
        onClick={this.handleShare}
      >
        { content }
        <iframe styleName="bernrate" src="http://www.bernrate.com/active" width="200" height="40"></iframe>
      </section>
    );
  }
}
