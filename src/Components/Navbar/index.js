import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="wrapper">
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
        <NavLink to="/inquiry" className="links" style={{ marginTop: "30px" }}>
          الاستفسارات
        </NavLink>
        <NavLink to="/home" className="links" style={{ marginTop: "30px" }}>
          مزودي الخدمة
        </NavLink>
        <NavLink to="/home">
          <img
            src="./img/logo.png"
            style={{
              width: "180px",
              float: "right",
              paddingRight: "0",
              marginLeft: "300px",
              marginTop: "6px",
            }}
          />
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
