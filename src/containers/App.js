import React, { Component } from 'react';
import '../styles/App.css';

import FormFields from '../components/FormFields';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

class App extends Component {
  state = {
    billValue: '',
    tipValue: '',
    tip: '',
    total: '',
    partyValue: '',
    theme: 'light-gray'
  };

  handleBill = e => {
    this.setState({ billValue: parseFloat(e.target.rawValue) });
  }

  handleTip = e => {
    this.handleTheme(e.target.value);
    this.setState({ tipValue: parseFloat(e.target.value) });
  }

  handleTheme(tipAmt) {
    const color = tipAmt > .15
      ? 'green'
      : tipAmt > .1
      ? 'yellow'
      : tipAmt > 0
      ? 'red'
      : 'light-gray';

    this.setState({ theme: color });
  }

  handleParty = e => {
    this.setState({ partyValue: parseInt(e.target.value) });
  }

  handleCalculate = () => {
    const tip = this.state.partyValue
      ? `${(this.state.billValue * this.state.tipValue / this.state.partyValue).toFixed(2)} each`
      : (this.state.billValue * this.state.tipValue).toFixed(2);
    const total = this.state.partyValue
      ? `${((this.state.billValue + parseFloat(tip)) / this.state.partyValue).toFixed(2)} each`
      : (this.state.billValue + parseFloat(tip)).toFixed(2);

    this.setState({
      tip: tip,
      total: total
    });
  }

  render() {
    const styles = {
      color: this.state.theme
    };

    return (
      <div style={styles}>
        <Container>
          <h1>Tip Calculator</h1>
          <Row>
            <Col>
              <FormFields billValue={this.state.billValue}
                          handleBill={this.handleBill}
                          tipValue={this.state.tipValue}
                          handleTip={this.handleTip}
                          handleParty={this.handleParty}
                          handleCalculate={this.handleCalculate}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Tip: {this.state.tip ? `$${this.state.tip}` : ''}</p>
              <p>Total: {this.state.total ? `$${this.state.total}` : ''}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
