import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



const Navbar = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return state;
  });

  console.log(state.Login.user.userName);
  
  return (
    <>
      <div className="wrapper">
      {/* <div className="avatar avatar-lg">
       <img src={state.Login.user.avatar} alt="img" />
       </div> 
        <div className="name ms-4">
         <h5 className="my-3">{state.Login.user.userName}</h5>
         </div> */}
      
        <button
        onClick={() => {
          navigate("/profile")}}
          style={{
            float: "left",
            fontSize: "15px",
            padding: "10px",
            backgroundColor: "rgb(59,78,92)",
            borderBottom: "1px solid black",
            marginRight: "460px",
            marginLeft: "70px",
            marginTop: "40px",
            color: "white",
            cursor: "pointer",
          }}
          
        >
          الملف الشخصي
        </button>
        <NavLink to="/posts" className="links" style={{ marginTop: "30px" }}>
          المشاريع
        </NavLink>
        <NavLink to="/inquiries" className="links" style={{ marginTop: "30px" }}>
          الاستفسارات
        </NavLink>
        <NavLink to="/home" className="links" style={{ marginTop: "30px" }}>
          مزودي الخدمة
        </NavLink>
        <NavLink to="/home">
          <img
          className="igLogo"
            src="./img/logo.png"
            style={{
              width: "180px",
              float: "right",
              paddingRight: "0",
              marginRight: "50px",
              marginTop: "20px",
            }}
          />
        </NavLink>
      </div>
     
    </>
  );
};

export default Navbar;
