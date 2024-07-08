import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../Context/Context";

const main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini 2.0</p>
        <div className="adv">
          <div className="try">
            <img
              className="advanced"
              src="https://www.gstatic.com/lamda/images/gemini_sparkle_red_4ed1cbfcbc6c9e84c31b987da73fc4168aec8445.svg"
              alt=""
            />
            <p>Try Gemini Advanced</p>
          </div>
          <img src={assets.user_icon} alt="" />
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Bro</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest the best parks to visit in a city with descriptions
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Suggest an organized list of the best food spots in a city
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Outline a way to home routine:organizing my closet</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Ideas to surprise a friend on their birthday</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              </div>
              <div className="more">
                <p className="more-text">
                  Humans review some saved chats to improve Google AI. To stop
                  this for future chats, turn off Gemini Apps activity. If this
                  setting is on, don't enter info that you wouldn't want
                  reviewed or used.
                  <span>How it works</span>
                </p>
                <div className="more-buttons">
                  <p className="dismiss">Manage activity</p>
                  <p className="dismiss">Dismiss</p>
                </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img
                src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                alt=""
              />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              name="search"
              placeholder="Enter a prompt here"
              id=""
              autoFocus
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : (
                null
              )}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
            <span> Your privacy and Gemini Apps</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default main;
