import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import {UserIDContext} from '../App' 


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
     const userID= useContext(UserIDContext);

    const [getUserRecord, setGetUserRecord] = useState([])

    const handleUserRecordData = () => {
        axios.get(`/api/dailyRecord/${userID}`)
            .then((response) => {
                    console.log('client side response user record:' ,response.data)
                    setGetUserRecord(response.data.data)
            }).catch((error) => {
                console.log('response error:', error)
            });
    };

  
    const labelsBeforeSort = [];
    const labels = [];
    const data1 = [];
     
    //From user record data just get Date and weight, sort by old date
    const newArray =getUserRecord.map(item => (
      {date: new Date(item.date), weight: item.weight})).slice().sort((a, b) => a.date - b.date)
    const getDateWeight = [...newArray];
    console.log('check m:', getDateWeight)

       
    //pass data into graph array data
      getDateWeight.map(each => {
             console.log('check res data:', each)
            // console.log('each weight',each.weight)
            // console.log('each date1',each.date)
            data1.push(each.weight)
            labelsBeforeSort.push(each.date)
        });


    //get just date/month/year
    labelsBeforeSort.map((checkDate) => {
      var newYear = parseInt(new Date(checkDate).getFullYear());
      var newMonth = parseInt(new Date(checkDate).getMonth() + 1); //month start 0~11 (needs to add +1)
      var newDate = parseInt(new Date(checkDate).getDate());
      const look=( newDate + '/' + newMonth + '/' + newYear);
      labels.push(look)
      });
      console.log('label',labels)


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
          //if we want to add more different data create data into an array and add datasets here
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