import React, { useState, useEffect, Component, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserIDContext } from "../../App";
import NavbarPage from "../Home-Main/Navbar";
import { IconContext } from "react-icons";
import { TfiFaceSmile, TfiFaceSad } from "react-icons/tfi";
import { FaToilet } from "react-icons/fa";
import { CiBeerMugFull } from "react-icons/ci";
import { PiBasketball } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import "../../assets/css/styleRecord.css";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function DailyRecord() {

  const history = useNavigate();

  const [addNewDate, setAddNewDate] = useState(new Date());
  const userID= useContext(UserIDContext);
  const [ userDataRecord, setUserDataRecord ] = useState([]);
  const [ existingCheck, setExisitngCheck ] = useState();
  // const [show, setShow] = useState(true);

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



 //check same date overwrite record
 const handleGetRecord = () => {
  axios
    .get(`/api/dailyRecord/${userID}`)
    .then((response) => {
      console.log('edit',response.data.data)
      setUserDataRecord(response.data.data);
    })
    .catch((error) => {
      console.log("edit", error);
    });
  };

  //back to date type same as input data
  const existingDate = userDataRecord.map((each) => new Date(each.date));
  console.log('1',existingDate)

  //pick up only date (date/month/year as UT date type)
  const formattedDates = existingDate.map((date) => {
    const day = date.getUTCDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
  });
console.log('2',formattedDates)

//Duplicete check
  useEffect(() => {
    const compareDates = () => {
      const day = addNewDate.getUTCDate();
      const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(addNewDate);
      const year = addNewDate.getUTCFullYear();

      const newInputDate = `${day} ${month} ${year}`;
      console.log('3', newInputDate)
      const isDuplicate = formattedDates.some(date => date === newInputDate);
      console.log('4', isDuplicate)
      if (isDuplicate) {
        setExisitngCheck(true);
        // setShow(true)
        console.log("Existing date found");
      } else {
        setExisitngCheck(false);
        console.log("New date created");
      }
    };
    compareDates();

  }, [userDataRecord, addNewDate, formattedDates, existingCheck]);



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
                  required
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
                  placeholder="NOTE"
                >
                  NOTE:
                </textarea>
              </div>
              <input type="submit" onClick={handleGetRecord}></input>
              <hr />
            </form>
          </div>
        </IconContext.Provider>
        {existingCheck === true ? 
        <div style={{
          width:500,
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '9999',
          textAlign:'center'
        }}>
          <Alert variant="success">
            <Alert.Heading>Alert</Alert.Heading>
              <p>Data already exisit Do you want to overwrite ?</p>
            <hr />
              <div className="d-flex justify-content-end">
                <Button variant="outline-success">
                <a href={'/dailyRecord'} style={{color:'#285243'}}>Close me </a>
                </Button>
              </div>
          </Alert>
          </div>: ''}
      </div>
    </>
  );
}

export default DailyRecord;

