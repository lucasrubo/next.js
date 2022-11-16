
import React from 'react';
import DataTable from 'react-data-table-component';

function DataTableBase(props) {
    return (
        <DataTable
            pagination
            expandableRows 
            {...props}
        />
    );
}

export default DataTableBase;