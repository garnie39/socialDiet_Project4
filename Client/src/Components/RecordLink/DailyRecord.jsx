import React, { useState, useEffect, Component } from 'react';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import GraphRecord from './GraphRecord';




import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

//icon
import { IconContext } from "react-icons";
import { TfiFaceSmile, TfiFaceSad} from "react-icons/tfi";
import { FaToilet } from "react-icons/fa";
import { CiBeerMugFull } from "react-icons/ci";
import { PiBasketball } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im"

function DailyRecord() {



  const [addNewDate, setAddNewDate] = useState(new Date());

  const handleDateChange = (newDate) =>{
    setAddNewDate(newDate);
    setFormData({
      ...formData,
      date: newDate
    });
  };
  

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
<>
{/* <Card >
        <GraphRecord variant="top"   />
        
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>
        </Card.Body>
     
      </Card>
      <br /> */}






<IconContext.Provider value={{ size: 50 }}>


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



            <button type='button' name='wellFeel' value={true} onClick={() => handleOnClickChange({ target: { name: 'wellFeel', value: true } })}
            style={{ backgroundColor : formData['wellFeel'] ? 'pink' : 'white '}}>
              <TfiFaceSmile />
            </button>
            <button type='button' name='unwellFeel' value={true} onClick={() => handleOnClickChange({ target: { name: 'unwellFeel', value: true } })}
            style={{ backgroundColor : formData['unwellFeel'] ? 'lightBlue' : 'white '}}>
              <TfiFaceSad />
            </button>
            <button type='button' name='toiletStool' value={true} onClick={() => handleOnClickChange({ target: { name: 'toiletStool', value: true } })}
            style={{ backgroundColor : formData['toiletStool'] ? 'orange' : 'white '}}>
              <FaToilet />
            </button>
            <button type='button' name='eatCheck' value={true} onClick={() => handleOnClickChange({ target: { name: 'eatCheck', value: true } })}
            style={{ backgroundColor : formData['eatCheck'] ? 'lightGreen' : 'white '}}>
              <ImSpoonKnife />
            </button>
            <button type='button' name='exercise' value={true} onClick={() => handleOnClickChange({ target: { name: 'exercise', value: true } })}
            style={{ backgroundColor : formData['exercise'] ? 'purple' : 'white '}}>
              <PiBasketball />
            </button>
            <button type='button'  name='alchole' value={true} onClick={() => handleOnClickChange({ target: { name: 'alchole', value: true } })}
            style={{ backgroundColor : formData['alchole'] ? 'yellow' : 'white '}}>
              <CiBeerMugFull  />
            </button>
            <br/>
            </div>
           <input type="submit"></input>
           <hr/>
           </form>
   
        </div>
        </IconContext.Provider>
        </>
  )
}

export default DailyRecord

