import * as React from 'react';

export class ButtonAndInput extends React.Component {
  //textInput: HTMLInputElement;
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={(input) => (this.textInput = input)} />
        <button onClick={() => this.handleClick()}>button</button>
      </div>
    );
  }
}
