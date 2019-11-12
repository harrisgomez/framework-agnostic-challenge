import React, { Component } from 'react';
import '../styles/App.css';

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      result: ''
    };
  }

  render() {
    return (
      <div>
        <div className='calculator-main'>
          <h1>Tip Calculator</h1>
          <input type='number' name='totalBill' /><br />
          <input type='number' name='percentTip' /><br />
          <input type='number' name='partySize' /><br />
          <button type='button'>Calculate</button>
          <p>Tip</p>
          <p>Total</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
