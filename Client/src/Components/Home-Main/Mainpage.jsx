import React from 'react';
import { Layout } from 'antd';


const { Content } = Layout;


const stylContenMain = {
  textAlign: 'center',
  background: 'rgba(255, 165, 0, 0.6)', // Use rgba to add opacity to the background color
  color: 'black',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50vw', // Set width and height to take up the entire viewport
  height: '50vh',
};

const backgroundImageStyle = {
  backgroundImage: "url('https://food-ubc.b-cdn.net/wp-content/uploads/2021/01/AdobeStock_271185487-scaled.jpeg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
};

function Mainpage() {
  return (
    <div style={backgroundImageStyle}>
      <div style={stylContenMain}>
        <h1>Welcome to Diet.Mate</h1>
        <p>Are you ready to start? </p>
        <div style={{ background: 'white' }}>
          <h4>Your target weight</h4>
          <h5>XXX KG</h5>
        </div>
        <button><a href='/dailyRecord'>Start</a></button>
      </div>
    </div>
  );
}

export default Mainpage;
