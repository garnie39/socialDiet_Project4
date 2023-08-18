import React from 'react';
import { Layout } from 'antd';


const { Content } = Layout;

const stylConten = { 
  textAlign: 'center', 
  background: 'orange', 
  color: 'black', 
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

function Mainpage() {
  return (
    <>
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background:'lightYellow' }}>
      <Layout>
        <Content style={stylConten}>

              <h1>Welcome to Diet.Mate</h1>
              <p>Are you ready to start? </p>
              <div style={{background: 'white'}}>
                <h4>Your taget weight</h4>
                <h5>XXX KG</h5>
              </div>
              
              <button><a href='/dailyRecord'>Start</a></button>
      
        </Content>
      </Layout>
    </div>
  </>
  );
}

export default Mainpage
