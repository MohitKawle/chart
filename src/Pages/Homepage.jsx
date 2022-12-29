import React, { useEffect, useState } from 'react'
//import Navbar from '../Components/Navbar'
import Graph from '../Components/Graph'
import Table from '../Components/Table'
import axios from 'axios'
import Filter from '../Components/Filter'

import Pagination from '../Components/Pagination'
import Chart1 from '../Components/Chart'

const Homepage = () => {
    const [data, setData] = useState([]);
    const  [sortedData,setSortedData]=useState([])
    const [paginatedData,setPaginatedData]=useState([])
    const [revinue,setRevinue]=useState(false)
    const [page,setPage]=useState(1)
    const [noOfPages,setNoOfPages]=useState(1)
  
    const handleSelect = (e) => {
        setRevinue(e.target.value);
        console.log(revinue)
      };
    

    useEffect(() => {
      
        getData(revinue)
      
      }, [revinue,page]);

      

      
  const getData = async (revenue) => {
          
          let r = await axios.get(`http://fetest.pangeatech.net/data`);
            setData(r.data)
            setSortedData(r.data)
            let result=r.data
        if(revenue){
             result =await data.filter(obj => obj.revenue_type == revenue);
              setSortedData(result)
             

             //
            
            }
            let pages=Math.ceil(result.length/10)
            setNoOfPages(pages)
            let start=(page-1)*10
            let end=(page*10)
            if(end>result.length){end=result.length}
            let res=[]
            for(let i=start;i<end;i++){
            res.push(result[i])
            console.log("sorted of i",sortedData[i])
            
            }
            console.log("res",res)
             setPaginatedData(res)
            console.log(res)
            
       
          
         // console.log(r.data)
        };

// const PaginateData=()=>{
//     let start=(page-1)*10
//     let end=(page*10)
// let res=[]
//     for(let i=start;i<end;i++){
// res.push(sortedData[i])
// console.log(sortedData[i])
//     }
//     console.log("res",res)
//     setPaginatedData(res)
// }


const previousPage=()=>{if(page>2){setPage(page-1)}console.log(page)}
const nextPage=()=>{if(page<noOfPages){setPage(page+1)}console.log(page)}


  return (
   <>
  
   <Filter    handleSelect={handleSelect}/>
    {/* <Graph /> */}
    
    <div 
    style={{margin:"auto",width:"50%"}}>

    <Chart1 graphData={data}/>
    </div>


  
  <Table data={paginatedData}/>

   
   
    <Pagination noOfPages={noOfPages} previousPage={previousPage} page={page} nextPage={nextPage}/>

   
   

   
   
   </>
  )
}

export default Homepage







  // const [page,setPage]=useState(1)
    // const [finaldata,setFinaldata]=useState()

    // function getdatapage(page,data){
    //     let pd=[]
    //     let st=page*10
    //     let ed=st+10

    //     for(let i=st;i<=ed;i++){
    //         pd.push(data[i])
    //     }
    // }