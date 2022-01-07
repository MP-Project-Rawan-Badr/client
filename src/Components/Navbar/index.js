import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LogT } from "./../../reducer/signIn";

const Navbar = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return state;
  });
  // console.log(state);
  // logout
  const dispatch = useDispatch();
  const signout = () => {
    localStorage.clear();
    dispatch(LogT({ token: "" }));
    navigate("/login");
  };

  // console.log(state.Login.user.userName);

  return (
    <>
      <div className="navWrapper">
        <div>
          <div className="dropdown">
            <img
              className="dropbtn"
              style={{ borderRadius: "50%", width: "50px" }}
              src={state.Login.user.avatar}
              alt="img"
            />
            <div className="dropdown-content">
              <Link
                to={`/profile/${state.Login.user._id}`}
                id="contentProf"
                style={{ marginLeft: "5px", fontSize: "16px" }}
              >
                {state.Login.user.userName}
              </Link>
              <Link
                onClick={signout}
                to="/login"
                id="contentProf"
                style={{ marginLeft: "5px", fontSize: "16px" }}
              >
                تسجيل خروج
              </Link>
            </div>
          </div>
        </div>

        {/*  */}
        <NavLink to="/posts" className="linkNav">
          المشاريع
        </NavLink>
        <NavLink to="/inquiries" className="linkNav">
          الاستفسارات
        </NavLink>
        <NavLink to="/ServiceProvider" className="linkNav">
          مقدمي الخدمة
        </NavLink>
        <NavLink to="/home">
          <img
            className="igLogo"
            src="./img/logo.png"
            style={{
              width: "180px",
              justifySelf: "flex-end",
              marginTop: "10px",
            }}
          />
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
