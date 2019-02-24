import React, { Component } from 'react';

const customStyle = {
  backgroundColor: '#AAAAAA',
}

export class Header extends Component {
  state = {
    clickCount: 0
  }

  increment = () => {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    return(
      <div style={customStyle}>
        dat is headr {this.state.clickCount}
        <button onClick={this.increment}> +1 </button>
        {this.props.children}
      </div>
    );
  }
}