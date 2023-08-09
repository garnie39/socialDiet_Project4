import React, { useState, useEffect, Component } from 'react';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function DailyRecord() {
 

  return (
        <div className="dailyRecordform">
        <form >
        <h2>Ddaily Record page</h2>
            <br/>

            <div className='calendar_container'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            </div>

            <div className='daily_weight_check'>
              <label>weight</label>
              <input type='weight'></input>
              <br/>
              <label>Today's feeling</label>
              <ul>
                <li><button>well</button></li>
                <li><button>unwell</button></li>
                <li><button>toilet</button></li>
                <li><button>food</button></li>
                <li><button>sports</button></li>
                <li><button>alchole</button></li>
              </ul>

            </div>

           <input type="submit"></input>
           <hr/>
           </form>
        </div>
  )
}

export default DailyRecord






//import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { Datepicker, Button, Page, setOptions } from '@mobiscroll/react';
// import './DailyRecprd.css'

// setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
// });

// function DailyRecord() {
//     const [openPicker, setOpenPicker] = React.useState(false);
//     const [date, setDate] = React.useState(new Date());
    
//     const show = () => {
//         setOpenPicker(true);
//     };
    
//     const onClose = () => {
//         setOpenPicker(false);
//     };
    
//     const inputProps = {
//         className: 'md-mobile-picker-input',
//         placeholder: 'Please Select...'
//     };
    
//     const boxInputProps = {
//         className: 'md-mobile-picker-box-label',
//         inputStyle: 'box',
//         placeholder: 'Please Select...'
//     };
    
//     return (
//         <Page>
//             <div className="mbsc-grid">
//                 <div className="mbsc-form-group">
//                     <div className="mbsc-row">
//                         <div className="mbsc-col-12">
//                             <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker with any inputs & show on focus/click</div>
//                             <Datepicker controls={['date']} inputComponent="input" inputProps={inputProps} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mbsc-form-group">
//                     <div className="mbsc-row">
//                         <div className="mbsc-col-12 mbsc-txt-muted md-mobile-picker-header">Disable <code>onClick/onFocus</code> and only show on button</div>
//                         <div className="mbsc-col-8">
//                             <Datepicker controls={['date']} inputComponent="input" inputProps={inputProps} showOnClick={false} showOnFocus={false} isOpen={openPicker} onClose={onClose} defaultValue={date} />
//                         </div>
//                         <div className="mbsc-col-4">
//                             <Button variant="outline" color="primary" className="md-mobile-picker-button" onClick={show}>Show picker</Button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mbsc-form-group">
//                     <div className="mbsc-row">
//                         <div className="mbsc-col-12">
//                             <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker with a Mobiscroll input</div>
//                             <Datepicker  controls={['date']} inputProps={boxInputProps} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker inline in any page</div>
//             </div>
//             <div className="md-mobile-picker-inline">
//                 <Datepicker display="inline" controls={['date']} />
//             </div>
//         </Page>
//     ); 
// }


// export default DailyRecord;