import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

import styles from './Pagination.module.css'
const Pagination = ({page,noOfPages,previousPage,nextPage}) => {
  
  let arr=[1]

  if(noOfPages<6){
    for(let i=2;i<=noOfPages;i++){
      arr.push(i)
  }
  console.log(styles)

  }
  else{
    arr=[page]
  }
    
   
  return (
    <div>
        
        <Button colorScheme='blue' 
        onClick={previousPage}
        >Prev</Button>
        {arr ?.map((elem)=>{
        return(
          <Button colorScheme='blue' 
          ml={4}
          mr={4}
          key={elem}
          
                 
                  >{elem}
                  
                  </Button>

            
        )
    })}
    <Button colorScheme='blue' 
        onClick={nextPage}
        >Next</Button>
    
    </div>
  )
}

export default Pagination



{/* <span  key={elem}
style={{border:"1px solid black",marginLeft:"10px",marginRight:"10px" ,padding:"10px",marginTop:"30px"}}
>{elem}</span> */}