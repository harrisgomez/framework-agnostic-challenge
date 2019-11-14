import React from 'react';

import Cleave from 'cleave.js/react';
import { ButtonToolbar, Button } from 'react-bootstrap';

const FormFields = props => (
    <form>
        <Cleave placeholder='Total Bill'
                options={{
                    numeral: true,
                    numeralPositiveOnly: true,
                    prefix: '$',
                    noImmediatePrefix: true,
                    rawValueTrimPrefix: true
                }}
                onChange={props.handleBill}
        />

        <br />

        <select name='tip' onChange={props.handleTip} value={props.tipValue}>
            <option value='0'>0</option>
            <option value='0.1'>10%</option>
            <option value='0.15'>15%</option>
            <option value='0.2'>20%</option>
        </select>
        
        <br />

        <Cleave placeholder='Party Size'
                options={{
                    numeral: true,
                    numeralPositiveOnly: true,
                    numeralDecimalScale: 0
                }}
                onChange={props.handleParty}
        />

        <br />
        
        <ButtonToolbar>
            <Button variant='primary' type='button' onClick={props.handleCalculate}>Calculate</Button>
        </ButtonToolbar>
    </form>
);

export default FormFields;