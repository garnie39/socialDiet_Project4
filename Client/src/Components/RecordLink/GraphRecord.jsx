import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {UserIDContext} from '../../App' ;
import NavbarPage from '../Home-Main/Navbar';
import Button from 'react-bootstrap/Button';

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
  Title,
);

function GraphRecord() {
     const userID= useContext(UserIDContext);
//All records
    const [getUserRecord, setGetUserRecord] = useState([])
//weight data
    const [getData1, setGetData1] = useState([])
// date data 
    const [getLabels, setGetLabels] = useState([])


  

    const handleUserRecordData = () => {
        axios.get(`/api/dailyRecord/${userID}`)
            .then((response) => {
                    console.log('client side response user record:' ,response.data)
                    setGetUserRecord(response.data.data)
            }).catch((error) => {
                console.log('response error:', error)
            });
    };


    useEffect (() => {
      handleUserRecordData()
    },[])

   // try to get 1 week/ 1 month/ 3 months/ 6 months button
   const today = new Date()
   var oneWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
   //console.log('1 week ', oneWeek)
   var oneMonth = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
   //console.log('1 month', oneMonth)
   var threeMonth = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000);
   //console.log('3 month', threeMonth)
   var sixMonth = new Date(today.getTime() - 180 * 24 * 60 * 60 * 1000);
   //console.log('6 month', sixMonth)

  const labelsBeforeSort = [];
  const labels = [...getLabels];
  const data1 = [...getData1];
     
  const oneWeekArray = [];
  const oneMonthArray = [];
  const threeMonthsArray = [];
  const sixMonthsArray = [];


    //From user record data just get Date and weight, sort by old date
    const newArray =getUserRecord.map(item => (
      {date: new Date(item.date), weight: item.weight})).slice().sort((a, b) => a.date - b.date)
    const getDateWeight = [...newArray];
      
       getDateWeight.forEach(item => {
        //console.log('getDateWeight',item.date)
          if(item.date >= oneWeek){
              oneWeekArray.push(item)
          } if (item.date >= oneMonth){
              oneMonthArray.push(item)
          } if (item.date >= threeMonth ){
              threeMonthsArray.push(item)
          } if (item.date >= sixMonth ){
              sixMonthsArray.push(item)
          } 
        });
      // console.log('oneWeekArray',oneWeekArray)
      // console.log('oneMonthArray',oneMonthArray)
      // console.log('3 month', threeMonthsArray)
      // console.log('6 month', sixMonthsArray)
    


   

//Chart,js  setting part
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "weight graph"
    },
    options: {
      legend: {display: false},
    scales : {
      data1:[{ticks: {min: 0, max: 100}}],
      labels: [{ ticks: {}}],
    }
  },
}}


const data = {
  labels, // row labels
  datasets: [
    {
      label: "weight", //data1 name
      data: data1,        // which data
      backgroundColor: "rgba(255, 99, 132, 0.5)" ,
      pointRadius: 6,
    },
    //if we want to add more different data create data into an array and add datasets here
  ]
};

const divStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  margin: "10px",
  width: "500px",
};



const handleTimePeriodBtn = (time) => {
  console.log('firing')
  handleUserRecordData();

  const newWeight=[];
  const newDateArray=[];

  time.map((item) => {
    newWeight.push(item.weight)
// full length date data type
    labelsBeforeSort.push(item.date)
  });
//get just date/month/year
//pass data into graph array data
  labelsBeforeSort.map((checkDate) => {
    var newYear = parseInt(new Date(checkDate).getFullYear());
    var newMonth = parseInt(new Date(checkDate).getMonth() + 1); //month start 0~11 (needs to add +1)
    var newDate = parseInt(new Date(checkDate).getDate());
    const look=( newDate + '/' + newMonth + '/' + newYear);
    //console.log('label',look)
    newDateArray.push(look)
    });
   setGetData1(newWeight)
   setGetLabels(newDateArray)
};

const mainDiv = {
  // flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const btnStyle =  {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px', // Adjust this value for spacing between buttons
  marginTop: '10px', // Add some margin to separate buttons from the chart
};

  return (
    <>
    <NavbarPage />
    <div className="graph-container"  style={mainDiv}>
       <div className='graph' style={divStyle}>
        <Line 
         height={300}
         width={300}
         options={options} data={data} />
        </div>
        <p>Check your weight records</p>

      <div style={btnStyle}>
        {/* <button onClick={handleUserRecordData}> All </button> */}
        <Button variant="warning" onClick={() => handleTimePeriodBtn(oneWeekArray)}> 1 week </Button>
        <Button variant="warning" onClick={() => handleTimePeriodBtn(oneMonthArray)}> 1 month</Button>
        <Button variant="warning" onClick={() => handleTimePeriodBtn(threeMonthsArray)}> 3 months </Button>
        <Button variant="warning" onClick={() => handleTimePeriodBtn(sixMonthsArray)}> 6 months </Button>
      </div>
    </div>

    </>
  )
}

export default GraphRecord