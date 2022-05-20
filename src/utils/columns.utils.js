import React, { useContext } from 'react';
import {
    StoreContext,
    DELETE
} from '../reducer/store.reducer';

const GetColumns = () => {
    const { state: { rate }, dispatch } = useContext(StoreContext);

    return [
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Amount(PLN)',
            accessor: 'amountPln',
        },
        {
            Header: 'Amount(EUR)',
            accessor: 'amountEur',
            Cell: (row) => (row?.row?.values?.amountPln / rate.EUR).toFixed(2)
        },
        {
            Header: 'Options',
            accessor: 'options',
            Cell: (row) => (
                <span className="pointer" onClick={() => {
                    let data = row.data;
                    console.log(row)
                    data.splice(row.row.index, 1)
                    dispatch({ type: DELETE, data: data })
                }}>
                    Delete
                </span>
            )
        },
    ]
}


export {
    GetColumns
}