import React from "react";
import Header from './Header';
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from './Sidebar';
import "./App.css";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
    {/*<Router>
    <Header/>
          <Routes>
          <Route path="/search/:searchTerm"> 
          <h1>Search Page</h1>
          </Route>
          <Route path="/">

          <div className="app_page">
          <Sidebar />
          <RecommendedVideos />  
          </div>
          </Route>
          </Routes>
  </Router>*/}
  <Header/>
  <div className="app_page">
          <Sidebar />
          <RecommendedVideos />  
          </div>
  </div>
  );
}


export default App;
