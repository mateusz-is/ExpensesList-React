import React, { useContext } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import {
    StoreContext,
    CHANGE
} from '../reducer/store.reducer';


function ConverstionRate() {
    const { state: { rate }, dispatch } = useContext(StoreContext);

    const handleChange = (ev) => {
        dispatch({ type: CHANGE, rate: parseFloat(ev.target.value) })
    }

    return (
        <div className="conversionRate">
            <InputGroup className="mb-3">
                <InputGroup.Text id="conversionRate-label">1EUR =</InputGroup.Text>
                <FormControl
                    type="number"
                    aria-label="Conversion Rate"
                    aria-describedby="conversionRate-label"
                    onChange={handleChange}
                    value={rate.EUR}
                />
            </InputGroup>
        </div>
    );
}

export default ConverstionRate;
