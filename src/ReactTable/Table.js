import React from 'react'
import { Table } from 'react-bootstrap'


import {useTable} from 'react-table'

const RTable = ({columns,data}) => {

    const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow

    }=useTable({columns,data})
  
  return (
    <>
<Table {...getTableProps()}  style={{ textAlign: "center" }}
        responsive
        {...getTableProps()}>

    <thead>
        {
            headerGroups.map(headerGroup=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {

                        headerGroup.headers.map(columns=>(
                            <th {...columns.getHeaderProps()}   style={{
                                borderBottom: "solid 3px red",
                                background: "aliceblue",
                                color: "black",
                                fontWeight: "bold",
                              }}>

                                {  columns.render('Header')}

                            </th>
                        ))

                    }
                </tr>
            ))
        }

    </thead>
    <tbody {...getTableBodyProps()}>
        {
            rows.map((row,i)=>{
                prepareRow(row)
              
                return(<tr {... row.getRowProps()}>
                    {
                        row.cells.map( cell=>{

                            return <td {...cell.getCellProps()}   style={{
                                padding: "10px",
                                border: "solid 1px gray",
                                background: "papayawhip",
                              }}>
                                {cell.render('Cell')}</td>
                        }

                            
                        )
                    }

                </tr>)


            })
        }


    </tbody>
</Table>
    </>
  )
}

export default RTable