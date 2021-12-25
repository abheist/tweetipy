import React from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./index.css";

function App() {
  return (
    <div className="flex flex-row justify-center min-h-screen bg-slate-800">
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
