import React from 'react'
import { Table, Container, Col, Row } from 'react-bootstrap';




import {useGlobalFilter, usePagination, useSortBy, useTable} from 'react-table'
import GlobalFilter from './GlobalFilter';
import TablePagination from './TablePagination';


const RTable = ({columns,data}) => {

    const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   page,
   prepareRow,
   state,
   setGlobalFilter,
   nextPage,
   previousPage,
   canNextPage,
   canPreviousPage

    }=useTable({columns,data},useGlobalFilter,useSortBy,usePagination)

    const {globalFilter} = state;
  
  return (
    <>
   <Container className='mt-5'>
    <Row>
        <Col className='col-md-4'>
       
                <GlobalFilter  gFilter={globalFilter} setGfilter={setGlobalFilter}/>
       
       
        </Col>
    </Row>
    <Row>
        <Col>
        <Table {...getTableProps()} 

        style={{ textAlign: "center"}}
        responsive
        {...getTableProps()}>

    <thead>
        {
            headerGroups.map(headerGroup=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {

                        headerGroup.headers.map(columns=>(
                            <th {...columns.getHeaderProps(columns.getSortByToggleProps())}   style={{
                                borderBottom: "solid 3px red",
                                background: "#363940",
                                color: "white",
                                fontWeight: "450",
                              }}>

                                {  columns.render('Header')}
                                {columns.isSorted?(columns.isSortedDesc?"🔽":"🔼"):""}

                            </th>
                        ))

                    }
                </tr>
            ))
        }

    </thead>
    <tbody {...getTableBodyProps()}>
        {
            page.map((row,i)=>{
                prepareRow(row)
              
                return(<tr {... row.getRowProps()}>
                    {
                        row.cells.map( cell=>{

                            return <td {...cell.getCellProps()}   style={{
                                padding: "10px",
                                border: "solid 1px gray",
                                background: "skyblue",
                                color:"black"
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
        </Col>
    </Row>
    <Row>
        <Col><TablePagination  nextPage={nextPage} previousPage={previousPage} canNextPage={canNextPage} canPreviousPage={canPreviousPage}/></Col>
    </Row>
   </Container>
    
  

    </>
  )
}

export default RTable