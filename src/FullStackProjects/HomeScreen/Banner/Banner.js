import { TextField } from "@material-ui/core";
import React from "react";
import "./Banner.css";

function Banner() {

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://miro.medium.com/max/1000/1*i80QM-TjmIlNfdp3KLCq1Q.png")`,
        backgroundPosition: "center center",
        objectFit:"contain"
      }}
    >
      <div className="banner__login" style={{padding: "16px", textAlign: "right"}}>
          <button>Login</button>
          <button style={{marginLeft: "8px" }}>Create an account</button>
        </div>
      <div className="banner__contents">
        <div className="banner__logo" style={{textAlign: "-webkit-center"}}>
          <div className="logo">S!</div>
        </div>
        <h1 className="banner__title">
          Find the best restaurants, cafes and bars
        </h1>
        <div className="banner__fields">
          <input style={{flex: 1,borderRadius: "30px",padding: "10px",border: "none",outline: "none",margin:"8px"}}
            placeholder="Please type a location" type="text" />
          <input style={{flex: 1,borderRadius: "30px",padding: "10px",border: "none",outline: "none", margin:"8px"}}
            placeholder= "Search for restaurants" type="text" />
        </div>
      </div>
    </header>
  );
}

export default Banner;
