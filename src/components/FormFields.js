import React from 'react';

import Cleave from 'cleave.js/react';
import {
    Form,
    ButtonToolbar,
    Button
} from 'react-bootstrap';

const FormFields = props => (
    <Form>
        <Form.Group controlId='formBill'>
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

            <Form.Control as='select' name='tip' onChange={props.handleTip} value={props.tipValue}>
                <option value='0'>0</option>
                <option value='0.1'>10%</option>
                <option value='0.15'>15%</option>
                <option value='0.2'>20%</option>
            </Form.Control>

            <Cleave placeholder='Party Size'
                    options={{
                        numeral: true,
                        numeralPositiveOnly: true,
                        numeralDecimalScale: 0
                    }}
                    onChange={props.handleParty}
            />
        </Form.Group>
        
        <div class='float-right'>
            <ButtonToolbar>
                    <Button variant='primary' type='button' onClick={props.handleCalculate}>Calculate</Button>
            </ButtonToolbar>
        </div>
    </Form>
);

export default FormFields;