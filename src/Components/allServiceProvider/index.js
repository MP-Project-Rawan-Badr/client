import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import Navbar from "../Navbar";

const ServiceProvider = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    getServiceProvider();
  }, []);

  const getServiceProvider = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getServiceProvider`,
      {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      }
    );
    console.log(result);
    setUser(result.data);
  };

  return (
    <>
            <Navbar />
            <div style={{ marginTop: "100px" }}>


      {user.map((item) => (
        <>
          <div key={item._id}>
            <div>
              <ul>
                <img id="name">{item.avatar}</img>
                <li id="name">{item.userName}</li>
              </ul>
            </div>
          </div>
        </>
      ))}
      </div>
      <Footer/>
    </>
  );
};

export default ServiceProvider;
