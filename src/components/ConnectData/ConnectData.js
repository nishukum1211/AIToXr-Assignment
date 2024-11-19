

import React, { useState } from "react";
import "./ConnectData.css";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ConnectData = () => {
  const { state } = useLocation();
  const selectedDataSources = state?.selectedDataSources || [];

  const [dataSources, setDataSources] = useState(selectedDataSources);

  // Handle the connection logic
  const handleConnect = (id) => {
    setDataSources((prevState) =>
      prevState.map((source) =>
        source.id === id ? { ...source, connected: true } : source
      )
    );
  };

  return (
    <div className="connect-data-container">
    
      <div className="left-section">
        <div className="header">
          <h3>Great! Let's help you setup now.</h3>
          <p>Where is your data coming from? Select a source to setup.</p>
          <br />
          <button className="close-button">Close</button>
        </div>

  
        <div className="search-bar">
          <input
            type="text"
            placeholder="Or connect some other 500+ data sources..."
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>


        <div className="selected-data-sources">
          {dataSources.map((source) => (
            <div key={source.id} className="data-source-card">
              <img
                src={source.img}
                alt={source.name}
                className="data-source-img"
              />
              <h4>{source.name}</h4>
              <button
                className={`connect-button ${
                  source.connected ? "connected" : "not-connected"
                }`}
                onClick={() => handleConnect(source.id)}
                disabled={source.connected}
              >
                {source.connected ? "Connected" : "Not Connected"}
              </button>
            </div>
          ))}
        </div>
      </div>

      
      <div className="right-section">
        
        
        <div className="database-types">
          <img
            src="/assets/image 25.svg"
            alt="MySQL"
            className="database-img"
            height="8vh"
            width="40vw"
          />
         
        </div>
        <h2>Select any data source to connect</h2>
        <h4>Select any data source to connected with AIDataCan to get data Analysis Report.</h4>
        <h4>Once get connected status will get change.</h4>
      </div>
    </div>
  );
};

export default ConnectData;

