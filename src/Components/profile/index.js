import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate , useParams } from "react-router-dom";

import Navbar from "./../Navbar";
import Footer from "./../Footer";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();


  const state = useSelector((state) => {
    return state;
  });

  
  useEffect(() => {
    console.log(state.Login.user._id);
    getOneUser();
    getUserPost();
  }, []);


  //description
  const getOneUser = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/Oneusers/${state.Login.user._id}`,
      { headers: { Authorization: `Bearer ${state.Login.token}` } }
    );
    console.log(result);
    setUser(result.data);
  };
  console.log("token", state.Login.token);
  console.log(state.Login.user.userName);


//user post
const getUserPost = async () => {
  const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/getUserPost/${id}` , {
    headers: {
      Authorization: `Bearer ${state.Login.token}`,
    },
  })
  console.log(result);
  setPosts(result.data);
};
//

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
                <div>
                  <img id="avatar" src={item.avatar}></img>
                </div>
                <div>
                  <h3 id="name">{item.userName}</h3>
                  </div>
                  <div style={{marginRight: "100px" }}>
                  <h4 id="bio">{item.bio}</h4>
                </div>
              </div>
              {state.Login.user.role === "61c4375564bde5690cdb68d0" ? (
                <div  style={{ marginRight: "700px" }}>
                  <button className="addpost">اضافة مشروع +</button>{" "}
                </div>
              ) : (
                ""
              )}
              <div  style={{ marginRight: "700px" }}>
                <button className="addInq">اضافة استفسار +</button>
              </div>
            </div>
          </>
        ))}
      </div>
      <br />
      <div className="posts">   
         {posts.map((item) => (
           <>
          <div key={item._id}>
          <div className="post">
            <h3 id="title" >{item.title}</h3>
            <img   onClick={() => navigate(`/Post/${item._id}`)}
             id="image" src={item.image}></img>
            <h3 id="dec" >{item.dec}</h3>
          </div>
          </div>
          </>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Profile;
