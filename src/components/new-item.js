import React, { useContext } from 'react';
import { Row, Col, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import {
    StoreContext,
    ADD,
} from '../reducer/store.reducer';

const twoDecimalPoint = (t) => {
    return parseFloat((t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t);
}

function NewItem() {
    const [newRow, setNewRow] = React.useState([]);
    const [validate, setValidate] = React.useState(false);
    const { dispatch } = useContext(StoreContext);

    const handleChange = (ev) => {
        setNewRow({
            ...newRow,
            [ev.target.name]: (ev.target.name === 'amountPln') ?
                twoDecimalPoint(ev.target.value) :
                ev.target.value
        })
        if (ev.target.name === 'title') (ev.target.value.length >= 5) ? setValidate(true) : setValidate(false)
    }

    const handleSubmit = () => {
        dispatch({ type: ADD, data: newRow })
    }

    return (
        <Row className="align-items-end pt-5">
            <Col md="7">
                <InputGroup className="mb-3" hasValidation>
                    <InputGroup.Text id="title-of-transaction">Title of tranaction</InputGroup.Text>
                    <FormControl
                        onChange={handleChange}
                        name='title'
                        type="text"
                        aria-label="title-of-transaction"
                        aria-describedby="title-of-transaction"
                        required
                        isInvalid={!validate}
                    />
                    {!validate && (
                        <Form.Control.Feedback type="invalid">
                            Enter at least 5 characters
                        </Form.Control.Feedback>
                    )}
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="title-of-transaction">Amount (in PLN)</InputGroup.Text>
                    <FormControl
                        onChange={handleChange}
                        value={newRow?.amountPln}
                        type="number"
                        name='amountPln'
                        aria-label="title-of-transaction"
                        aria-describedby="title-of-transaction"
                    />
                </InputGroup>
            </Col>
            <Col md="5">
                <div className="d-grid gap-2">
                    <Button variant="outline-dark" size="md" className="mb-3" disabled={!validate} onClick={handleSubmit}>
                        Add
                    </Button>
                </div>
            </Col>
        </Row >
    );
}

export default NewItem;
