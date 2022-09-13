// import logo from './logo.svg';
// import './App.css';
import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/ContentSection";

function App() {
  return (
    <div className="">
      <Header/>
      <div className="container">
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
