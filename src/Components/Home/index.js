import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import "./style.css";

const Home = () => {
  return (
      <>
    <div className="container">
      <Navbar/>
      <Header/>

      <h2 >احدث الاستفسارات والاسئله</h2>
      <div className="inquiry">here last inquiries</div>
      <br/>
      <h2>احدث المشاريع</h2>
      <div className="post">here last posts</div>

    </div>
    <Footer/>
    </>
  );
};

export default Home;
