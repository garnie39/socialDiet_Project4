// import React, { useState, useEffect, Component } from 'react';
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker,moment } from "@mui/x-date-pickers/DatePicker";


// export const MyDatePicker = props => {
//     var date = new Date();
//     var todayDate = moment(date).format('DD-MM-YYYY');
//     return (
//     <div>
//       <DatePicker
//         {...props.input}
//         dateFormat="DD-MM-YYYY"
//         selected={props.input.value
//           ? moment(props.input.value).format('DD-MM-YYYY')
//           : todayDate}
//         // placeholderText={props.placeholder}
//         // disabled={props.disabled}
//       />
//       {/* {
//         props.meta.touched && props.meta.error &&
//         <span className="error">
//           { props.intl.formatMessage({ id: props.meta.error }) }
//         </span>
//       } */}
//     </div>
//     );
//   }