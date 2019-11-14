import React, { Component } from 'react';
import '../styles/App.css';

import FormFields from '../components/FormFields';

class App extends Component {
  state = {
    billValue: '',
    tipValue: '',
    tip: '',
    total: '',
    partyValue: ''
  };

  handleBill = e => {
    this.setState({ billValue: parseFloat(e.target.rawValue) });
  }

  handleTip = e => {
    this.setState({ tipValue: parseFloat(e.target.value) });
  }

  handleParty = e => {
    this.setState({ partyValue: parseInt(e.target.value) });
  }

  handleCalculate = () => {
    const tip = this.state.billValue * this.state.tipValue;

    this.setState({
      tip: tip.toFixed(2),
      total: (this.state.billValue + tip).toFixed(2)
    });
  }

  render() {
    return (
      <div className='calculator-main'>
        <h1>Tip Calculator</h1>
        <FormFields billValue={this.state.billValue}
                    handleBill={this.handleBill}
                    tipValue={this.state.tipValue}
                    handleTip={this.handleTip}
                    handleParty={this.handleParty}
                    handleCalculate={this.handleCalculate} />
        <p>Tip: {this.state.tip ? `$${this.state.tip}` : ''}</p>
        <p>Total: {this.state.total ? `$${this.state.total}` : ''}</p>
      </div>
    );
  }
}

export default App;
