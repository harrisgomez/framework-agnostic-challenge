import React from 'react';
// import ReactDOM from 'react-dom';

import Cleave from 'cleave.js/react';

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
                onChange={props.handleBill} />
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
                    numeralPositiveOnly: true
                }}
                onChange={props.handleParty} />
                
        <br />

        <button type='button' onClick={props.handleCalculate}>Calculate</button>
    </form>
);

export default FormFields;