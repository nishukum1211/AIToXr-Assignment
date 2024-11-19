

import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import "./Body.css";
import { useNavigate } from "react-router-dom";


const Body = () => {

  const navigate = useNavigate();

  

  const [selectedDataSources, setSelectedDataSources] = useState([]);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  
  const dataSources = [
    { id: 1, name: "Salesforce", img: "/assets/image 17.svg"  },
    { id: 2, name: "Shopify", img: "/assets/image 19.svg"},
    { id: 3, name: "Google Ads", img: "/assets/image 21.svg" },
    { id: 4, name: "Meta Ads", img: "/assets/image 23.svg"},
    { id: 5, name: "Hubspot", img: "/assets/image_hubspot.svg"},
    { id: 6, name: "Google Analytics", img: "/assets/image.svg"},
    { id: 7, name: "Amazon", img: "/assets/image_amazon.svg" },
    { id: 8, name: "Salesforce", img: "/assets/image 17.svg"  },
    { id: 9, name: "Shopify", img: "/assets/image 19.svg"},
    { id: 10, name: "Google Ads", img: "/assets/image 21.svg" },
    { id: 11, name: "Meta Ads", img: "/assets/image 23.svg"},
    { id: 12, name: "Hubspot", img: "/assets/image_hubspot.svg"},
    { id: 13, name: "Google Analytics", img: "/assets/image.svg"},
    { id: 14, name: "Amazon", img: "/assets/image_amazon.svg" },
    { id: 15, name: "Salesforce", img: "/assets/image 17.svg"  },
    { id: 16, name: "Shopify", img: "/assets/image 19.svg"},
    { id: 17, name: "Google Ads", img: "/assets/image 21.svg" },
    { id: 18, name: "Meta Ads", img: "/assets/image 23.svg"},
    { id: 19, name: "Hubspot", img: "/assets/image_hubspot.svg"},
    { id: 20, name: "Google Analytics", img: "/assets/image.svg"},
    { id: 21, name: "Amazon", img: "/assets/image_amazon.svg" },
   
  ];

  
  const toggleAnalytics = () => {
    setIsAnalyticsOpen(!isAnalyticsOpen);
  };

  
  const handleSelect = (source) => {
    if (!selectedDataSources.find((item) => item.id === source.id)) {
      setSelectedDataSources([...selectedDataSources, source]);
    }
  };

  // Remove a selected data source
  const handleRemove = (sourceId) => {
    setSelectedDataSources(selectedDataSources.filter((item) => item.id !== sourceId));
  };

  const handleClick = () => {
    navigate("/ConnectData", { state: { selectedDataSources } });
  }
  return (
    <div className="main-body-container">
      <div className="body-container">
        <div className="content">
          <h1>Data Sources</h1>
        </div>

        {/* Search Bar Section */}
        <div className="search-section">
          <h2>Select at least 2 data sources</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search" className="search-input" />
            <FaSearch className="search-icon" />
          </div>
        </div>

        {/* Analytics Data Sources Section */}
        <div className="accordion-section">
          <div className="accordion-header" onClick={toggleAnalytics}>
            <h4>Analytics Data Sources</h4>
            {isAnalyticsOpen ? <FaChevronUp className="arrow-icon" /> : <FaChevronDown className="arrow-icon" />}
          </div>

          {isAnalyticsOpen && (
            <div className="analytics-list">
              <ul>
                <li>Google Analytics</li>
                <li>Firebase Analytics</li>
                <li>Adobe Analytics</li>
                <li>Mixpanel</li>
              </ul>
            </div>
          )}
          <div className="accordion-header">
          <h4>Database and Cache</h4>
           <FaChevronDown className="arrow-icon" />
          
         </div>
         <div className="accordion-header">
           <h4>Database and Cache</h4>
           <FaChevronDown className="arrow-icon" />
          
         </div>
         <div className="accordion-header">
           <h4>Database and Cache</h4>
           <FaChevronDown className="arrow-icon" />
          
         </div>
        </div>
      </div>

      
      <div className="body-container1">
        <div className="top-pickups">
          <h1 className="left-align">Top Pickups of Data Sources</h1>
          <h3 className="left-align">Select At Least 2 Data Sources</h3>
        </div>

        <div className="cards-container">
          {/* Display non-selected data sources */}
          {dataSources
            .filter((source) => !selectedDataSources.find((item) => item.id === source.id))
            .map((source) => (
              <div key={source.id} className="card-container" onClick={() => handleSelect(source)}>
                <div className="card">
                  <img src={source.img} alt={source.name} width="105px" height="120px" />
                </div>
                <h4>{source.name}</h4>
              </div>
            ))}
        </div>

        {/* Selected Data Sources Section */}
        <div className="selected-data-container">
          <h4>Selected Data Sources</h4>
          {selectedDataSources.length === 0 ? (
            <p>No data sources selected</p>
          ) : (
            <div className="selected-cards">
              {selectedDataSources.map((source) => (
                <div key={source.id} className="selected-card">
                  <FaTimes className="remove-icon" onClick={() => handleRemove(source.id)} />
                  <img src={source.img} alt={source.name} width="80px" height="75px" />
                  
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="progress-container">
  {selectedDataSources.length >= 4 ? (
    <p className="success-message">
      Great! You selected 4 data sources. Now, you can analyze your data.
    </p>
  ) : (
    <p className="info-message">
      You have selected {selectedDataSources.length} out of 4 data sources.
    </p>
  )}

  
  <div className="progress-bar-container">
    {/* Progress Bar */}
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${(selectedDataSources.length / 4) * 100}%` }}
      ></div>
    </div>

    
    <button
      className="next-button"
      disabled={selectedDataSources.length < 4}
      onClick={handleClick}
    >
      Next
    </button>
  </div>
</div>


       


      </div>
    </div>
  );
};

export default Body;


