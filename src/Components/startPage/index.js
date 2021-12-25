import React from "react";
import { NavLink } from "react-router-dom";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="wrapper">
        <button
        onClick={() => {
          navigate("/register")}}
          style={{
            float: "left",
            fontSize: "17px",
            padding: "10px",
            backgroundColor: "rgb(59,78,92)",
            borderBottom: "1px solid black",
            // marginRight: "460px",
            marginLeft: "40px",
            marginTop: "35px",
            color: "white",
            cursor: "pointer",
          }}
        >
          انشاء حساب
        </button>
        <button
         onClick={() => {
          navigate("/login")}}
          style={{
            float: "left",
            fontSize: "17px",
            padding: "10px",
            backgroundColor: "rgb(59,78,92)",
            borderBottom: "1px solid black",
            marginRight: "400px",
            marginLeft: "30px",
            marginTop: "35px",
            color: "white",
            cursor: "pointer",
          }}
        >
          تسجيل الدخول
        </button>
        <NavLink to="/">
          <img
            src="./img/logo.png"
            style={{
              width: "180px",
              float: "right",
              paddingRight: "0",
              marginLeft: "620px",
              marginTop: "6px",
            }}
            alt="logoImge"
          />
        </NavLink>
      </div>
      <div className="container">
        <img
          src="./img/background.jpg"
          style={{ marginTop: "17px", width: "100%", height: "700px" }}
        />
      </div>
      <div className="center">
        <h1 style={{ color: "rgb(172,174,197)" , /*backgroundColor: "rgb(91,129,166)"*/ }}>ما هو وميض؟</h1>
        في منصة وميض يمكنك العثور على مزودي الخدمة ويمكنك طرح سؤالك أو استفسارك
        وستجد إجابة له. يمكنك وضع تقييمك للخدمات التي قمت بتجربتها وإعجابك بها ،
        وكذلك تحديد موعد مع مزود الخدمة ، وكذلك الدخول في محادثة معه ومناقشة ما
        تريد والاتفاق معه. يمكنك أيضًا الدفع من خلال محفظة داخل الموقع أو
        استخدام تأشيرة أو بطاقة ائتمان
        <p>
          {" "}
          لتبدأ مع ومـيـض <span>  انشئ حسابك الان</span>
        </p>
        <div className="icon">
          <Link to="" id="path">
            {" "}
            <BsInstagram />{" "}
          </Link>
          <Link to="" id="path">
            {" "}
            <BsTwitter />{" "}
          </Link>
          <Link to="" id="path">
            {" "}
            <BsGithub />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
