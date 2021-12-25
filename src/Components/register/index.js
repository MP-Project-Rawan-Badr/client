import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const signup = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/register`,
        {
          userName: e.target.userName.value,
          email: e.target.email.value,
          password: e.target.password.value,
          password2: e.target.password2.value,
          role: "61c4375564bde5690cdb68d0",
        }
      );
      console.log(result.data);
      if (result.data.errors) {
        console.log(result.data.errors[0].msg);
        setError(result.data.errors[0].msg);
      } else if (result.data.message) {
        setError(result.data.message);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="card">
          <div className="card-image"></div>
          <form onSubmit={signup} className="card-form">
            <div className="input">
              <input className="input-field" type="text" name="userName" />
              <label className="input-label" htmlFor="username">
                :اسم المستخدم
              </label>
            </div>
            <div className="input">
              <input className="input-field" type="email" name="email" />
              <label className="input-label" htmlFor="email">
                :ايميل
              </label>
            </div>
            <div className="input">
              <input className="input-field" type="password" name="password" />
              <label className="input-label" htmlFor="password">
                :الرقم السري
              </label>
            </div>
            <div className="input">
              <input className="input-field" type="password" name="password2" />
              <label className="input-label" htmlFor="password2">
                :تأكيد الرقم السري
              </label>
            </div>
            <div className="action">
              <button className="action-button" type="submit">
                انشاء
              </button>
              <button
              className="action-button"
              style={{backgroundColor: "grey" , margin: "10px"}}
            onClick={() => {
              navigate("/home");
            }}
          >
            الغاء
          </button>
            </div>
          </form>
          <p>{error}</p>
         
        </div>
      </div>
    </>
  );
};

export default Register;
