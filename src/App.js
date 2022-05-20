import React, { useContext } from 'react';
import ConverstionRate from './components/conversion-rate'
import { Row, Col } from 'react-bootstrap';
import NewItem from './components/new-item'
import ExpensesTable from './components/expenses-list'
import {
  StoreContext
} from './reducer/store.reducer';
import { GetColumns } from './models/columns.model'
import Sum from './components/sum'

function App() {
  const { state: { data } } = useContext(StoreContext);
  let columns = GetColumns();

  return (
    <>
      <Row>
        <Col md={7}>
          <h1>List of expenses</h1>
        </Col>
        <Col md={5}>
          <ConverstionRate />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <NewItem />
        </Col>
      </Row>
      <Row>
        <ExpensesTable columns={columns} data={data} />
      </Row>
      <Row>
        <Sum />
      </Row>
    </>
  );
}

export default App;
