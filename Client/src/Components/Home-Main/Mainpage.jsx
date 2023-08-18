import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

<<<<<<< HEAD

=======
>>>>>>> main
const stylContenMain = {
  textAlign: "center",
  background: "rgba(255, 165, 0, 0.8)",
  color: "black",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50vw",
  height: "50vh",
};

const backgroundImageStyle = {
  background: "rgba(255, 255, 255, 30)",
  backgroundImage:
    "url('https://food-ubc.b-cdn.net/wp-content/uploads/2021/01/AdobeStock_271185487-scaled.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

function Mainpage() {
  return (
    <div style={backgroundImageStyle}>
      <div style={stylContenMain}>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "#444444",
          }}
        >
          Welcome to Diet.Mate
        </h1>
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "#444444",
          }}
        >
          Are you ready to get fit together?{" "}
        </p>
        {/* <div style={{ background: "white" }}>
          <h4>Your target weight</h4>
          <h5>XXX KG</h5>
        </div> */}
        <a
          href="/dailyRecord"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "white",
            color: "#ec9f48",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "0 auto",
            height: "45px",
            width: "120px",
            fontSize: "18px",
          }}
        >
          Start
        </a>
      </div>
    </div>
  );
}

export default Mainpage;
