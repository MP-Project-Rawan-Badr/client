import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import "./style.css";

const Home = () => {
  const [inquiries, setInquiries] = useState([]);
  useEffect(() => {
    getAllInquiries();
  }, []);
  const state = useSelector((state) => {
    return state;
  });
  const [len, setlen] = useState(0)
  const getAllInquiries = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getInquiries`,
      {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      }
    );
    console.log(result);
    setInquiries(result.data);
    setlen( result.data.length)
   console.log(len);

  };

  return (
    <>
      <div className="container">
        <Navbar />
        <Header />

        <h2>احدث الاستفسارات والاسئله</h2>
        <div >
          {
          
          inquiries
            .map((i, index) => {
              return (
                <>{index >= len-3 ? i.title : null}</>
              );
            }).reverse()
            }
        </div>
        <br />
        <h2>احدث المشاريع</h2>
        <div className="pot">here last posts</div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
