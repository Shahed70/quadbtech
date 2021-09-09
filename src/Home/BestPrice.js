import React from 'react'
import './bestPrice.css'
import banner from '../assets/images/banner.png'
function BestPrice() {
    return (
        <div>
            <div className="average_text text-center">
                <span>Best Price to Trade</span>
            </div>
            <div className="d-flex justify-content-around">
                <div className="average_header_main_text">
                    <div className="color_green text-center">
                        0.24%
                    </div>
                    <div className="time text-center">
                        5 Mins
                    </div>
                </div>
                <div className="average_header_main_text">
                    <div className="color_green text-center">
                        99%
                    </div>
                    <div className="time text-center">
                        1 Hour
                    </div>
                </div>
                <div className="average_heading">
                    <div className="text-cente">
                    ₹ 36,45,413
                    </div>
                    <div className="time text-center">
                       <p>Average BTC/INR net price including commission</p>
                    </div>
                </div>
                <div className="average_header_main_text">
                    <div className="color_green text-center">
                        10.49%
                    </div>
                    <div className="time text-center">
                      1 Day
                    </div>
                </div>
                <div className="average_header_main_text">
                    <div className="color_green text-center">
                       16.86%
                    </div>
                    <div className="time text-center">
                        7 Days
                    </div>
                </div>
            </div>
            <div className="banner_box">
                <img src={banner} alt="Banner" />
            </div>
        </div>
    )
}

export default BestPrice
