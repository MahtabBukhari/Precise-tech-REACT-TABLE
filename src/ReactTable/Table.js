import React from "react";
import { Table, Container, Col, Row } from "react-bootstrap";

import {
 
  useGlobalFilter,
  usePagination,
 
  useSortBy,
  useTable,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import TablePagination from "./TablePagination";

const RTable = ({ columns, data, refresh }) => {


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
    canPreviousPage,
    gotoPage,
    pageCount,
    pageOptions,
    setPageSize,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination,
   
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Container className="mt-5 disapearScrollBar" 
              >
        <Row   >
          <Col className="col-md-12" >
            <GlobalFilter
              gFilter={globalFilter}
              setGfilter={setGlobalFilter}
              refresh={refresh}
            />
          </Col>
        </Row>

        <Row  style={{
                maxHeight:"400px",
                
              }}>
          <Col  className="tableContainer">
            <Table 
           
              {...getTableProps()}
           
              className="striped highlight mx-auto table-sm table-bordered"
             striped
             hover
              responsive
              {...getTableProps()}
            >
              <thead className="text-center">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((columns) => (
                      <th
                        {...columns.getHeaderProps(
                          columns.getSortByToggleProps()
                        )}
                        style={{
                          borderBottom: "solid 3px red",
                          background: "#363940",
                          color: "white",
                          fontWeight: "450",
                        }}
                      >
                        {columns.render("Header")}

                        {columns.isSorted
                          ? columns.isSortedDesc
                            ? "????"
                            : "????"
                          : ""}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody {...getTableBodyProps()}  >
                {page.map((row, i) => {
                  prepareRow(row);

                  return (
                    <tr  {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td 
                            {...cell.getCellProps()}
                            className="text-center align-middle"
                          >

                        
                            {cell.render("Cell")}

                  
                           
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row>
          <Col>
            <TablePagination
              nextPage={nextPage}
              previousPage={previousPage}
              canNextPage={canNextPage}
              canPreviousPage={canPreviousPage}
              gotoPage={gotoPage}
              pageCount={pageCount}
              pageOptions={pageOptions}
              pageIndex={pageIndex}
              setPageSize={setPageSize}
              pageSize={pageSize}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RTable;
