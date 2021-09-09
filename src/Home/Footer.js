import React from "react";

function Footer() {
  return (
    <div>
      <footer className="d-flex justify-content-between">
        <p style={{fontSize:"12px", wordSpacing:"5px"}}>
            Copyright © 2019 HodlInfo.com Developed By 
            <a className="text-decoration-none" style={{ color:"#3dc6c1"}} href={"/#"}> QuadBTech</a>
        </p>
        <small className="text-right">Support</small>
      </footer>
      <div className="bottom_button fixed-bottom text-center" style={{backgroundColor:"#191D28"}}>
        <button className="btn btn-outline-info  py-2">Add holdingo to home screen</button>
      </div>
    </div>
  );
}

export default Footer;
