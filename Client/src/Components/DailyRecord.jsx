import React, { useState, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
// import { Datepicker} from '@mobiscroll/react';

function DailyRecord() {
    const [weightInKg, setWeightInKg] = useState(0);

  return (
        <div className="dailyRecordform">
        <form onSubmit={''}>
        <h2>Ddaily Record page</h2>
            <FloatingLabel controlId="floatingWeight" label="weight">
                <Form.Control type="number" placeholder="Weight" style={{ width: '300px' }} name="weight" onChange={''}   />
            </FloatingLabel>
            <br/>
{/*        
            <Datepicker
            controls={['date']}
            touchUi={true}
            inputComponent="input"
            inputProps={'Please Select...'}/> */}


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