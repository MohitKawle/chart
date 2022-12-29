import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function Chart1({graphData}) {
    console.log(graphData)
    let arr=graphData
    arr.sort((a,b)=>{return(
        a.product.split(" ")[2]-b.product.split(" ")[2]
        
        )})

    console.log("product",arr)
  const [data, setData]= useState({
    labels:["Jan","Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
    datasets:[
      {
        label:"Product 2",
        data:[0, -20, 0, -200, 0, 793, 432, 643, 411, -42, 313, 518],      
        borderColor:'green',
        // tension:0.4,        
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      },
      {
        label:"product 8",
        data:[303, 240, 320, 342, 312, 811, -131, 549, 614, 713, 911, 584],      
        borderColor:'yellow',
        //tension:0.4,        
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      }, {
        label:"Product 12",
        data:[140, 210, 130, 442, 511, 842, 311, 549, 611, 753, 911, 558],      
        borderColor:'red',
        //tension:0.4,        
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      },
      {
        label:"Product 13",
        data:[103, 210, 430, 142, 551, 812, 131, 559, 611, 735, 491, 458],      
        borderColor:'blue',
        //tension:0.4,        
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      },
      {
        label:"Product 17",
        data:[10, 20, 30, 210, 430, 142, 551, 529, 611, 743, 951, -158],      
        borderColor:'black',
        //tension:0.4,        
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      },
      {
        label:"Product 20",
        data:[559, 611, 735, 491, 458, 82, 31, 539, 615, 273, 951, 538],      
        borderColor:'pink',
        //tension:0.4,        
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      },
      {
        label:"Product 21",
        data:[103, -200, 430, 142, 451, 832, 311, 549, 1161, 473, 991, 658],      
        borderColor:'orange',
        //tension:0.4,        
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      },
      {
        label:"Product 23",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],      
        borderColor:'sky-blue',
        //tension:0.4,        
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      },
    ]
  })
  return (
    <div className="App" style={{width:'800px', height:'800px'}}>
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default Chart1;