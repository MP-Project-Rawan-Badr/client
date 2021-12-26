import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "./../Navbar";
import Footer from "./../Footer";

const Profile = () => {
  const [user, setUser] = useState([]);
  const state = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    console.log(state.Login.user._id);
    getOneUser();
  }, []);
  const getOneUser = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/Oneusers/${state.Login.user._id}`,
      { headers: { Authorization: `Bearer ${state.Login.token}` } }
    );
    console.log(result);
    setUser(result.data);
  };

  return (
    <>
      <Navbar />
      <br />
      <h2 style={{ marginTop: "90px" }}>الملف الشخصي</h2>
      <div className="profile">
        {user.map((item) => (
          <>
            <div key={item._id}>
              <div className="prf">
                  <div><img id="avatar" src={item.avatar}></img></div>
                  <div><h3 id="name">{item.userName}</h3></div>
                
              </div>
            </div>
          </>
        ))}
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Profile;
