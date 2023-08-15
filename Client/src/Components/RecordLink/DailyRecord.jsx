import React, { useState, useEffect, Component } from 'react';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import Form from 'react-bootstrap/Form';


function DailyRecord() {



  const [addNewDate, setAddNewDate] = useState(new Date());

  const handleDateChange = (newDate) =>{
    setAddNewDate(newDate);
    setFormData({
      ...formData,
      date: newDate
    });
  };
  // console.log('year',addNewDate.getFullYear())
  // //getMonth returns 0~11, needs to add 1
  // console.log('month',addNewDate.getMonth()+1)
  // //getDate returns date of month (1~31)
  // console.log('date',addNewDate.getDate())
  // console.log('UTC date and time:', addNewDate.toISOString()); // UTC date and time
  // console.log('Local date and time:', addNewDate.toLocaleString()); // Local date and time in your current time zone

  const [formData, setFormData] = useState({ 
    date: addNewDate,
    weight:'',
    wellFeel: false, 
    unwellFeel: false,
    toiletStool: false,
    eactCheck:false,
    exercise:false,
    alchole:false
  });
console.log(formData)


  const handleSubmit =(event) => {
      event.preventDefault();
      // const newDailyData=JSON.stringify(formData)
      const newDailyData=formData
      console.log('10',newDailyData)
    
     axios.post("/api/dailyRecord",newDailyData)
      .then((response) => {
        console.log(response.config.data)
        const nameDataGet=response.config.data
        // const parsedData = JSON.parse(nameDataGet);
        console.log('parsedData',nameDataGet)
      })
      .catch((error) => {
        console.log('handle dailyRecord error:',error)
      })
  };


     const handleOnClickChange =(e)=>{
      //get from form data as name (json.key) value (json.value)
      const {name,value} =e.target;
      setFormData({ 
        ...formData,
       [name]:value,
     });
  };


  //  useEffect(() => {
  //   handleOnClickChange()
  // },[setAddNewDate]);

  return (
        <div className="dailyRecordform">
        <form onSubmit={handleSubmit} >
        <h2>Ddaily Record page</h2>
            <br/>
            <div className='calendar_container'>
            <DatePicker name='date'  selected={addNewDate} onChange={handleDateChange} />
            </div>

            <div className='daily_weight_check'>
              <label>weight / kg</label>
              <input type='number' name='weight' value={formData.weight} onChange={handleOnClickChange}></input>
              <br/>
              <label>Today's feeling</label>
              <br/>
              <button type='button' name='wellFeel' value={true} onClick={handleOnClickChange}>well</button>
              <button type='button' name='unwellFeel' value={true} onClick={handleOnClickChange}>unwell</button>
              <button type='button' name='toiletStool' value={true} onClick={handleOnClickChange}>Toilet</button>
              <button type='button' name='eatCheck' value={true} onClick={handleOnClickChange}>Food</button>
              <button type='button' name='exercise' value={true} onClick={handleOnClickChange}>Exercise</button>
              <button type='button' name='alchole' value={true} onClick={handleOnClickChange}>Alchole</button>
            </div>
           <input type="submit"></input>
           <hr/>
           </form>
   
        </div>
  )
}

export default DailyRecord






