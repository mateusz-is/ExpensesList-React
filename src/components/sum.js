import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import {
    StoreContext
} from '../reducer/store.reducer';


function Sum() {
    const { state: { data, rate } } = useContext(StoreContext);
    let sumPLN = 0;
    let sumEur = 0;
    data.forEach((sum) => {
        sumPLN += sum.amountPln
    })
    sumEur = (sumPLN / rate?.EUR).toFixed(2)
    return (
        <>
            <Row>
                <Col md={12}>
                    Sum: {sumPLN.toFixed(2)} PLN ({sumEur} EUR)
                </Col>
            </Row>
        </>
    );
}

export default Sum;
