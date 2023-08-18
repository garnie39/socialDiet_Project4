import React, { useState, useEffect, Component, useContext } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import GraphRecord from "./GraphRecord";
import { useNavigate } from "react-router-dom";
import { UserIDContext } from "../../App";
import NavbarPage from "../Home-Main/Navbar";
import { Layout } from "antd";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { IconContext } from "react-icons";
import { TfiFaceSmile, TfiFaceSad } from "react-icons/tfi";
import { FaToilet } from "react-icons/fa";
import { CiBeerMugFull } from "react-icons/ci";
import { PiBasketball } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { nextDay } from "date-fns";
import "../../assets/css/styleRecord.css";

function DailyRecord() {
  const history = useNavigate();

  const [addNewDate, setAddNewDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setAddNewDate(newDate);
    setFormData({
      ...formData,
      date: newDate,
    });
  };

  const [formData, setFormData] = useState({
    date: addNewDate,
    weight: "",
    bodyFat: "",
    wellFeel: false,
    unwellFeel: false,
    toiletStool: false,
    eactCheck: false,
    exercise: false,
    alchole: false,
    note: "",
  });
  console.log(formData);


// const [exsistingRecord, serExsistingRecord] =useState()
  const userID= useContext(UserIDContext);
  const [userDataRecord, setUserDataRecord] = useState([])



const handleGetRecord = () => {
  axios
    .get(`/api/dailyRecord/${userID}`)
    .then((response) => {
      //console.log('edit',response.data.data)
      setUserDataRecord(response.data.data);
    })
    .catch((error) => {
      console.log("edit", error);
    });
};

const existingDate = userDataRecord.map((each) => new Date(each.date));
console.log("check each", existingDate);



function compareDates() {
  for (const date of existingDate) {
    if (addNewDate.getTime() === date.getTime()) {
      console.log("exsisting");
    } else {
      console.log("new date created");
    }
  }
}

// const isDateFound = compareDates(addNewDate, exsistingDate);

// if (isDateFound) {
//   console.log("User input date matches an existing date.");
// } else {
//   console.log("User input date does not match any existing date.");
// }


// useEffect(() => {
//   const exsistingDate =userDataRecord.map(each => (each.date.slice(0,10)));
//   console.log('check each', exsistingDate)
//    //misa.push(each.date.slice(0,10))
// if(exsistingDate === addNewDate){
//   console.log('already exisiting ')
// }else{
//   console.log('created')
// }

// },[userDataRecord,addNewDate])





  const handleSubmit = (event) => {
    event.preventDefault();

    const newDailyData = formData;
    console.log("10", newDailyData);

    axios
      .post("/api/dailyRecord", newDailyData)
      .then((response) => {
        const nameDataGet = response.config.data;
        //redirect page
        history("/dailyRecord");
        console.log("parsedData", nameDataGet);
      })
      .catch((error) => {
        console.log("handle dailyRecord error:", error);
      });
  };




  const handleOnClickChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "number" || type === "textarea") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: !prevFormData[name],
      }));
    }
  };




  return (
    <>
      <NavbarPage />

      <div className="container">
        <IconContext.Provider value={{ size: 50 }}>
          <div
            className="dailyRecordform"
            style={{
              textAlign: "center",
              margin: "0",
              padding: "0",
            }}
          >
            <form onSubmit={handleSubmit}>
              <h2>Daily Record page</h2>

              <br />
              <div className="calendar_container">
                <DatePicker
                  className="info"
                  name="date"
                  selected={addNewDate}
                  onChange={handleDateChange}
                />
              </div>

              <div className="daily_weight_check">
                <input
                  className="info"
                  type="number"
                  name="weight"
                  placeholder="weight/kg"
                  value={formData.weight}
                  onChange={handleOnClickChange}
                ></input>
                <br />
                <input
                  type="number"
                  className="info"
                  placeholder="Body Fat %"
                  name="bodyFat"
                  value={formData.bodyFat}
                  onChange={handleOnClickChange}
                ></input>
                <br />
                <div className="emoji">
                  <label>Today's feeling</label>
                  <br />
                  <button
                    className="emojiBtn"
                    type="button"
                    name="wellFeel"
                    value={true}
                    onClick={() =>
                      handleOnClickChange({
                        target: { name: "wellFeel", value: true },
                      })
                    }
                    style={{
                      backgroundColor: formData["wellFeel"]
                        ? "rgb(253, 175, 188)"
                        : "#fff9c9",
                      color: formData["wellFeel"]
                        ? "white"
                        : "rgb(160, 89, 41)",
                    }}
                  >
                    <TfiFaceSmile />
                  </button>
                  <button
                    className="emojiBtn"
                    type="button"
                    name="unwellFeel"
                    value={true}
                    onClick={() =>
                      handleOnClickChange({
                        target: { name: "unwellFeel", value: true },
                      })
                    }
                    style={{
                      backgroundColor: formData["unwellFeel"]
                        ? "rgb(203, 122, 244)"
                        : "#fff9c9",
                      color: formData["unwellFeel"]
                        ? "white"
                        : "rgb(160, 89, 41)",
                    }}
                  >
                    <TfiFaceSad />
                  </button>
                  <button
                    className="emojiBtn"
                    type="button"
                    name="toiletStool"
                    value={true}
                    onClick={() =>
                      handleOnClickChange({
                        target: { name: "toiletStool", value: true },
                      })
                    }
                    style={{
                      backgroundColor: formData["toiletStool"]
                        ? "rgb(87, 157, 254)"
                        : "#fff9c9",
                      color: formData["toiletStool"]
                        ? "white"
                        : "rgb(160, 89, 41)",
                    }}
                  >
                    <FaToilet />
                  </button>
                  <button
                    className="emojiBtn"
                    type="button"
                    name="eatCheck"
                    value={true}
                    onClick={() =>
                      handleOnClickChange({
                        target: { name: "eatCheck", value: true },
                      })
                    }
                    style={{
                      backgroundColor: formData["eatCheck"]
                        ? "rgb(79, 235, 178)"
                        : "#fff9c9",
                      color: formData["eatCheck"]
                        ? "white"
                        : "rgb(160, 89, 41)",
                    }}
                  >
                    <ImSpoonKnife />
                  </button>
                  <button
                    className="emojiBtn"
                    type="button"
                    name="exercise"
                    value={true}
                    onClick={() =>
                      handleOnClickChange({
                        target: { name: "exercise", value: true },
                      })
                    }
                    style={{
                      backgroundColor: formData["exercise"]
                        ? "rgb(176, 230, 115)"
                        : "#fff9c9",
                      color: formData["exercise"]
                        ? "white"
                        : "rgb(160, 89, 41)",
                    }}
                  >
                    <PiBasketball />
                  </button>
                  <button
                    className="emojiBtn"
                    type="button"
                    name="alchole"
                    value={true}
                    onClick={() =>
                      handleOnClickChange({
                        target: { name: "alchole", value: true },
                      })
                    }
                    style={{
                      backgroundColor: formData["alchole"]
                        ? "rgb(255, 132, 50)"
                        : "#fff9c9",
                      color: formData["alchole"] ? "white" : "rgb(160, 89, 41)",
                    }}
                  >
                    <CiBeerMugFull />
                  </button>
                </div>
                <br />

                <textarea
                  className="note"
                  name="note"
                  value={formData.note}
                  onChange={handleOnClickChange}
                  placeholder="NOTE:"
                >
                  NOTE:
                </textarea>
              </div>
              <input type="submit"></input>
              <hr />
            </form>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default DailyRecord;


{/* <br/>
            <div className='calendar_container'>
            <DatePicker name='date'  selected={addNewDate}  id='select-date' onChange={ handleDateChange} />
            </div>

            <div className='daily_weight_check'>
              <label>weight / kg</label>
              <input type='number' name='weight' value={formData.weight}   onChange={handleOnClickChange}></input>
              <br/>
              <label>Body Fat / %</label>
              <input type='number' name='bodyFat' value={formData.bodyFat}   onChange={handleOnClickChange}></input>
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

            <textarea  name='note' value={formData.note}   onChange={handleOnClickChange}  placeholder="NOTE">NOTE:</textarea>
            </div>
           <input type="submit"  ></input>
           <hr/>
           </form>
   
        </div> */}