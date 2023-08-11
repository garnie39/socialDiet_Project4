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

  const handleDate = (newDate) =>{
    setAddNewDate(newDate)
  }
  console.log('full date',addNewDate)

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
    unWellFeel: false,
    toiletStool: false,
    eactCheck:false,
    exercise:false,
    alchole:false
    
  });

  const handleSubmit =(event) => {
   
      event.preventDefault();
      const newDailyData=JSON.stringify(formData)
      console.log('10',newDailyData)

    // axios.post("http://localhost:3000/api/")
  }


     const handleOnclick =(e)=>{
      //get from form data as name (json.key) value (json.value)
      const {name,value} =e.target;
      setFormData({ 
        ...formData,
        date: addNewDate,
       [name]:value,
     })

    
  }
  //console.log('10',JSON.stringify(formData))

  //  useEffect(() => {
  //   handleOnclick()
  //   console.log('useEffectが実行されました');
  // },[setAddNewDate]);

  return (
        <div className="dailyRecordform">
        <form onSubmit={handleSubmit} >
        <h2>Ddaily Record page</h2>
            <br/>
            <div className='calendar_container'>
            <DatePicker name='date' selected={addNewDate} onSelect={(newDate) => handleDate(newDate)} />
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker  
                  name='date'
                  //value={'formData.date'}
                  onChange={(date) => {
                    handleDate(date)
                    //console.log(date.$d);
                  }}

                  />
              </LocalizationProvider> */}
            </div>

            <div className='daily_weight_check'>
              <label>weight</label>
              <input type='number' name='weight' value={formData.weight} onChange={handleOnclick}></input>
              <br/>
              <label>Today's feeling</label>
              
              <button type='button' name='wellFeel' value={true} onClick={handleOnclick}>well</button>
              <button type='button' name='unWellFeel' value={true} onClick={handleOnclick}>unwell</button>
              <button type='button' name='toiletStool' value={true} onClick={handleOnclick}>Toilet</button>
              <button type='button' name='eatCheck' value={true} onClick={handleOnclick}>Food</button>
              <button type='button' name='exercise' value={true} onClick={handleOnclick}>Exercise</button>
              <button type='button' name='alchole' value={true} onClick={handleOnclick}>Alchole</button>
            </div>
           <input type="submit"></input>
           <hr/>
           </form>
   
        </div>
  )
}

export default DailyRecord






