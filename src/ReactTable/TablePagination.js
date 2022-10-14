import React from 'react'
import { Button, Col, Navbar, Row } from 'react-bootstrap'

const TablePagination = ({nextPage,previousPage,canNextPage,canPreviousPage, gotoPage,pageCount,pageOptions,pageIndex}) => {
  return (
    <Navbar className='mb-3' bg='dark' variant='light'>
        <Row className='paginationRow'>
            <Col className='col-lg-4 col-md-4 col-sm-4 paginationCol'>
            <Button className='paginationButton'  variant='light' onClick={()=>gotoPage(0)} disabled={!canPreviousPage}> {"<<"}</Button>
            <Button className='paginationButton' variant='light' onClick={()=>previousPage()} disabled={!canPreviousPage}>{"<"} </Button>
            <Button className='paginationButton' variant='light' onClick={()=>nextPage()} disabled={!canNextPage} >{">"}</Button>
            <Button className='paginationButton' variant='light' onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}> {">>"}</Button>
            </Col>
            <Col className='col-lg-2 col-md-2 col-sm-2'>
           
            </Col>
            <Col className='col-lg-6 col-md-6 col-sm-6 paginationCol'>
            <span className='pageOptionText'>
              page {" "} <strong>{pageIndex+1} of {pageOptions.length}</strong>
              
              </span>
              <span className='pageOptionText'>
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