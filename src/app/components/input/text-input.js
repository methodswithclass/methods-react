import React, { Component } from 'react';

class TextInput extends Component {
  lostFocus(e) {
    if (e.keyCode === 40) {
      e.target.blur();
      // or set the state as you wish
    }
  }

  render() {
    return (
      <input
        id={this.props.textId}
        className={this.props.textClass}
        type="text"
        model={this.props.textModel}
        onKeyUp={this.props.textKeyup}
        onKeyDown={this.lostFocus}
      />
    );
  }
}

export default TextInput;
