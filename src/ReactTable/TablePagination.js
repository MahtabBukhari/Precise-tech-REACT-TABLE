import React from 'react'
import { Button, Col, Navbar, Row } from 'react-bootstrap'

const TablePagination = ({nextPage,previousPage,canNextPage,canPreviousPage, gotoPage,pageCount}) => {
  return (
    <Navbar className='mb-3' bg='dark' variant='light'>
        <Row className='paginationRow'>
            <Col className='paginationCol'>
            <Button className='paginationButton'  variant='light' onClick={()=>gotoPage(0)} disabled={!canPreviousPage}> {"<<"}</Button>
            <Button className='paginationButton' variant='light' onClick={()=>previousPage()} disabled={!canPreviousPage}>{"<"} </Button>
            <Button className='paginationButton' variant='light' onClick={()=>nextPage()} disabled={!canNextPage} >{">"}</Button>
            <Button className='paginationButton' variant='light' onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}> {">>"}</Button>
            </Col>
            <Col></Col>
            <Col></Col>
        </Row>

    </Navbar>
  )
}

export default TablePagination