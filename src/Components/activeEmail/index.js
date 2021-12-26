import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ActivateEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = location.pathname.split("/")[2];
  console.log(token);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");
  const [Erro, setErro] = useState(true);

  const check = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/activate/${token}`);
      if (result.data.success) {
        setErro(false);
      }
      if (result.data.err) {
        setErr(result.data.err);
      }
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <div>
    <div className="home"
     style={{marginTop: "200px"}}>
      {!Erro ? (
        <div className="homeContainer">
          <h1>Your account has been activated!</h1>
          <div className="btns">
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Go Login
            </button>
          </div>
        </div>
      ) : (
        <div className="formm">
          <h1>Error</h1>
          <p>{err}</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to home
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default ActivateEmail;