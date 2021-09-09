import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import BrandLogo from "../assets/images/HODLINFO.8f78fc06.png";
import bottomBanner from "../assets/images/bottom_banner.jpg";
import BestPrice from "./BestPrice";
import DataGraph from "./DataGraph";
import Footer from "./Footer";
import { ThemeContext } from "../App";
const Home = () => {
  const [counter, setCounter] = useState(60)

  useEffect(() => {
      setInterval(()=> {
    setCounter(prevCounter => prevCounter === 0 ? 60: prevCounter -1)

  }, 1000)
  },[])

  const {dark, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="row home_top_left">
        <div className="col-md-4 pt-4 navt_top">
          <a className="text-decoration-none" href={`/#`}>
            <img className="home_brand_logo" src={BrandLogo} alt="Brand Logo" />
          </a>
          <a
            className="text-decoration-none"
            href={`/#`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="home_brand_p">
              Powered By <span className="home_brand_span">Finstreet</span>
            </p>
          </a>
        </div>
        <div className="col-md-4 home_top_middle pt-5 mx-auto ">
          <div className=" nav_menu d-flex justify-content-center">
            <div className="btn-group">
              <button
                type="button"
                className={` dropdown-toggle ${!dark ? "btn-secondary-dark":"btn btn-secondary"}`}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                INR
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href={`/#`}>
                  INR
                </a>
              </div>
            </div>
            <div className="btn-group mx-3">
              <button
                type="button"
                className={` dropdown-toggle ${!dark ? "btn-secondary-dark":"btn btn-secondary"}`}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                BTC
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href={`/#`}>
                  ETH
                </a>
                <a className="dropdown-item" href={`/#`}>
                  UXDT
                </a>
                <a className="dropdown-item" href={`/#`}>
                  XRP
                </a>
                <a className="dropdown-item" href={`/#`}>
                  TRX
                </a>
                <a className="dropdown-item" href={`/#`}>
                  DASH
                </a>
                <a className="dropdown-item" href={`/#`}>
                  ZEC
                </a>
                <a className="dropdown-item" href={`/#`}>
                  XEM
                </a>
                <a className="dropdown-item" href={`/#`}>
                  LOST
                </a>
                <a className="dropdown-item" href={`/#`}>
                  WIN
                </a>
                <a className="dropdown-item" href={`/#`}>
                  BIT
                </a>
                <a className="dropdown-item" href={`/#`}>
                  WRM
                </a>
              </div>
            </div>

            <div className="btn-group">
              <a style={{color:"#fff!important"}} href={`/#`}   className={`${!dark ? "btn btn-secondary-dark":"btn btn-secondary"}`}>
                BYU BTC
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4  pt-5 nav_last">
          <div className="counter d-flex justify-content-center align-items-center">
           {counter}
          </div>
          <div className="telegram_button mx-3">
            <a className="btn btn-info" href={"/#"}>
              <i class="fab fa-telegram-plane pr-1"></i> Connect Telegram
            </a>
          </div>
          <div className="switch">
            <input
              onChange={toggleTheme}
              type="checkbox"
              name="switch"
              id="switch"
            />
            <label className={`${dark ? 'switch_lavel_dark':'switch_lavel_light'}`} htmlFor="switch"></label>
          </div>
        </div>
      </div>
      <BestPrice />
      <DataGraph />
      <div className="bottom_banner_box">
        <img src={bottomBanner} alt="Banner" />
      </div>
      <hr style={{ backgroundColor: "#808080" }} />
      <Footer />
    </>
  );
};

export default Home;
