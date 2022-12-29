import React from 'react'
import { LineChart,LineSeries,Line } from 'reaviz'


function Graph () {
  const singleDateData = [
    { id: '0', key: new Date('2020-02-17T08:00:00.000Z'), data: 10 },
    { id: '1', key: new Date('2020-02-21T08:00:00.000Z'), data: 18 },
    { id: '2', key: new Date('2020-02-26T08:00:00.000Z'), data: 2 },
    { id: '3', key: new Date('2020-02-29T08:00:00.000Z'), data: 10 }
  ]
  
  

  return (
    <LineChart
        width={350}
        height={250}
        data={singleDateData}
        series={<LineSeries animated={false} />}
      />
  );
}

export default Graph