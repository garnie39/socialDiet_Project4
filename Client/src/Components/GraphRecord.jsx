import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
 import  {useSomeCtx} from './UserLogin.jsx'


import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title
} from "chart.js";
// import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title
);

function GraphRecord() {
     //const { userLoginDetail } = useContext(useSomeCtx);

      console.log('props check',useSomeCtx)
    //   const [userLoginDetail, setUserLoginDetail] = useSomeCtx()
      //console.log('props check',userLoginDetail)

    const [getUserRecord, setGetUserRecord] = useState([])

    const handleUserRecordData = () => {
        axios.get('/api/dailyRecord/64d707e6aa9c5f2cceb032bf')
            .then((response) => {
                    console.log('client side response user record:' ,response.data)
                    setGetUserRecord(response.data.data)
            }).catch((error) => {
                console.log('response error:', error)
            });
    };

    //const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const labels = [];
    const data1 = [];
  
    //const data2 = [22, 31, 17, 32, 24, 62];
          
       getUserRecord.map((each) => {
            console.log('each weight',each.weight)
            console.log('each date',each.date)
            console.log('each date',new Date(each.date).getMonth())
            console.log('each date',new Date(each.date).getFullYear())
            console.log('each date',new Date(each.date).getDate())
            const eachDate = each.date.slice(0,10)
            console.log('hello',eachDate)
            data1.push(each.weight)
            labels.push(eachDate)
        });
                  
    console.log('data1',data1)
    console.log('label',labels)
    // useEffect (() => {
    //     getWeight
    // },[handleUserRecordData()])


    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "weight graph"
          }
        }
      };
      
     
      const data = {
        labels, // row labels
        datasets: [
          {
            label: "weight", //data1 name
            data: data1,        // which data
            backgroundColor: "rgba(255, 99, 132, 0.5)" 
          },
        //   {
        //     label: "Dataset 2",
        //     data: data2,
        //     backgroundColor: "rgba(53, 162, 235, 0.5)"
        //   }
        ]
      };

      const divStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        margin: "10px",
        // width: "1000px",
      };
  return (
    <div className="graph-container" >
       <div className='graph' style={divStyle}>
        <Line 
         height={300}
         width={300}
         options={options} data={data} />
        </div>
        <p>graph</p>
        <button onClick={handleUserRecordData}>Click </button>
    </div>
  )
}

export default GraphRecord