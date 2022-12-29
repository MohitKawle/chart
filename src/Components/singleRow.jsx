
import { Tr, Th, Td } from "@chakra-ui/react";
export function SingleRow({ 
    S_no,
   line_of_business,
   revenue_type,
   product,
   year,
   month,
   acv,
   tcv ,
   revenue }) {

  return (
    <Tr
      data-testid="item"
      background="white"
      color="black"
     key={S_no}
    >
        <Td>{S_no}</Td>
        <Td>{line_of_business}</Td>
        <Td>{revenue_type}</Td>
        <Td>{product}</Td>
        <Td>{year+"  " + month }</Td>
        {/* <Td>{month}</Td> */}
        <Td>{acv}</Td>
        <Td>{tcv}</Td>
        <Td>{revenue}</Td>
        
    </Tr>
  );
}
