import React from 'react'
import { Button, Col, Navbar, Row } from 'react-bootstrap'

const TablePagination = ({nextPage,previousPage,canNextPage,canPreviousPage, gotoPage,pageCount,pageOptions,pageIndex,setPageSize,pageSize}) => {
  return (
    <Navbar className='mb-3' bg='dark' variant='light'>
        <Row className='paginationRow'>
            <Col className='col-lg-3 col-md-3 col-sm-3 paginationCol'>
            <Button className='paginationButton'  variant='light' onClick={()=>gotoPage(0)} disabled={!canPreviousPage}> {"<<"}</Button>
            <Button className='paginationButton' variant='light' onClick={()=>previousPage()} disabled={!canPreviousPage}>{"<"} </Button>
            <Button className='paginationButton' variant='light' onClick={()=>nextPage()} disabled={!canNextPage} >{">"}</Button>
            <Button className='paginationButton' variant='light' onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}> {">>"}</Button>
            </Col>
            <Col className='col-lg-3 col-md-3 col-sm-3 paginationCol'>

              <select value={pageSize} onChange={e=> setPageSize(Number(e.target.value))} style={{width:"6vmax",height:"3vmax",padding:"0.2vmax"}}>

                
                 { [5,15,25].map(pageSize=>(
                    <option value={pageSize} key={pageSize}>
                   
                        show {pageSize}
                  
                    </option>
                  ))}
                
              </select>


          6
            </Col>
            <Col className='col-lg-6 col-md-6 col-sm-6 paginationCol'>
           
            <span className='pageOptionText ml-auto'>
            page {" "} <strong>{pageIndex+1} of {pageOptions.length}</strong>
                | Go To Page {" "} <input type="number"  defaultValue={pageIndex+1} onChange={e=>{
                  const pageNumber = e.target.value?Number(e.target.value)-1:0;
                  gotoPage(pageNumber)

                }} style={{width:"4vmax",height:"2vmax"}} />
              </span>
            </Col>
        </Row>

    </Navbar>
  )
}

export default TablePagination