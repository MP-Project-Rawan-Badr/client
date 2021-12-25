import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email,
          password,
        }
      );
      // const data = {
      //   user: result.data.result,
      //   token: result.data.token,
      // };
      navigate("/")
      console.log(result.data.result.role);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="card">
          <div className="card-image"></div>
          <form onSubmit={login}>
            <div className="input">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                type="email"
                name="email"
              />
              <label className="input-label" htmlFor="email">
                :ايميل
              </label>
            </div>
            <div className="input">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                type="password"
                name="password"
              />
              <label className="input-label" htmlFor="password">
                :الرقم السري
              </label>
            </div>
            <div className="action">
              <button className="action-button" type="submit">
                تسجيل الدخول
              </button>
              <button
                className="action-button"
                style={{ backgroundColor: "grey", margin: "10px" }}
                onClick={() => {
                  navigate("/home");
                }}
              >
                الغاء
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
