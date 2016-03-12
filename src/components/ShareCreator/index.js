import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import classTool from 'classnames';

import shareIcon from 'assets/share.svg';
import colors from 'styles/colors';
import styles from './styles.styl';
import TextField from 'material-ui/lib/text-field';
import { Link } from 'react-router';
import { TwitterButton } from 'react-social-buttons';
import reactEmoji from 'react-emoji';

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
      const url = `http://bernies-tax.dataviz.work/share/${shareLinkId}`;

      content = (
        <section styleName="container">
          <section>
            <Link to={`/share/${shareLinkId}`} styleName="link">
              {url}
            </Link>
          </section>
          <section styleName="share-buttons">
            <TwitterButton
              url={url}
              text="the Tax Plan ft. Bernie Sanders #berniesplan"
              size={32}
            >
              Tweet #berniesplan
            </TwitterButton>
          </section>
        </section>
      );
    } else {
      content = isPrompting
        ? this.renderInput()
        : (
          <span styleName="container horizontal">
            Feeling the bern?&nbsp;
            <span styleName="fire icon">{reactEmoji.emojify(':fire:')}</span>&nbsp;
            <img src={shareIcon} styleName="share icon" />&nbsp;
            Share your experience.
          </span>
        )
      ;
    }
    return (
      <section
        styleName={
          classTool(
            'share-creator',
            {
              prompting: isPrompting,
              padded: !isPrompting,
              complete: shareLinkId,
            },
          )
        }
        onClick={this.handleShare}
      >
        <section styleName="content">
          { content }
        </section>
        <iframe styleName="bernrate" src="http://www.bernrate.com/active" width="200" height="40"></iframe>
      </section>
    );
  }
}
