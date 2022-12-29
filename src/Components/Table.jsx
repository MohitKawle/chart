
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { SingleRow } from "./singleRow";
function GraphTable({ data }) {

console.log(data)

  return (
    <TableContainer 
    style={{width:"70%",margin:"auto",marginTop:"-400px"}}
    >
      <Table variant="striped" colorScheme="white">
        <Thead background="#66a3ff" color="white">
          <Tr>
            <Th>S .No</Th>
            <Th>Line of Business</Th>
            <Th isNumeric>Revinue Type </Th>
            <Th>Product</Th>
            <Th>Posting period</Th>
            <Th>ACV</Th>
            <Th>TCV</Th>
            <Th>Revinue</Th>
            
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((item) => {
            //console.log(item)
            return (
              <SingleRow
              key={item.S_no}
              S_no={item.S_no}
              line_of_business={item.line_of_business}
              revenue_type={item.revenue_type}
              product={item.product}
              year={item.year}
              month={item.month}
              acv={item.acv}
              tcv={item.tcv}
              revenue={item.revenue }
              
              />
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default GraphTable;
