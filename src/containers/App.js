import React, { Component } from 'react';
import '../styles/App.css';

import FormFields from '../components/FormFields';

class App extends Component {
  state = {
    billValue: 0,
    billTotal: null,
    tipValue: 0,
    tipTotal: null,
    partyValue: 0
  };

  handleBill = e => {
    this.setState({ billValue: e.target.rawValue });
  }

  handleTip = e => {
    this.setState({ tipValue: e.target.value });
  }

  handleParty = e => {
    this.setState({ partyValue: e.target.value });
  }

  render() {
    const tipTotal = `${(this.state.billValue * this.state.tipValue).toFixed(2)}`;
    const billTotal = `${this.state.billValue + tipTotal}`;
    
    return (
      <div className='calculator-main'>
        <h1>Tip Calculator</h1>
        <FormFields billValue={this.state.billValue}
                    handleBill={this.handleBill}
                    tipValue={this.state.tipValue}
                    handleTip={this.handleTip}
                    handleParty={this.handleParty} />
        <p>Tip: {this.state.billValue && this.state.tipValue ? `$${tipTotal}` : ''}</p>
        <p>Total: {this.state.billValue && this.state.tipValue ? `$${billTotal}` : ''}</p>
      </div>
    );
  }
}

export default App;
