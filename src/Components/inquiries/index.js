import React, { useEffect, useState } from "react";
import Navbar from "./../Navbar";
import axios from "axios";
import "./style.css";
import Footer from "./../Footer";
import { useSelector } from "react-redux";
import Search from "../search";
import { useNavigate } from "react-router-dom";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    getAllInquiries();
  }, []);

  const getAllInquiries = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getInquiries`,
      {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      }
    );
    // console.log(result);
    setInquiries(result.data);
  };

  //search
  const searchpages = (e) => {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      setInquiries(
        inquiries.filter((inquiry) => {
          const inquiryName = inquiry.title.toLowerCase();
          if (inquiryName.includes(value)) return inquiry;
          else return null;
        })
      );
    } else {
      getAllInquiries();
    }
  };

  //delete inquiry
  const deleteInquiry = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/deleteInquiry/${id}`,
        {
          headers: {
            Authorization: `Bearer ${state.Login.token}`,
          },
        }
      );
      deleteInquiry(state.Login.token);
    } catch (error) {
      // console.log(error);
    }
    window.location.reload(false);
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "140px" }}>
        <Search className="search" searchpages={searchpages} />

        <div className="grid-containerInq">
          {inquiries.map((item) => (
            <>
              <div key={item._id}>
                {state.Login.user.role === "61c05aad3708bf224ada4791" ||
                item.user._id == state.Login.user._id ? (
                  <p
                    style={{
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteInquiry(item._id)}
                  >
                    x
                  </p>
                ) : (
                  ""
                )}
                <img
                  style={{
                    borderRadius: "50%",
                    width: "60px",
                    float: "right",
                    padding: "5px",
                    marginBottom: "20px",
                  }}
                  src={item.user.avatar}
                  alt="avatarImg"
                />
                <h5 style={{ padding: "20px" }}>{item.user.userName}</h5>
                <h3
                  className="clickTite"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/inquiry/${item._id}`)}
                >
                  {item.title}
                </h3>
                <h3
                  style={{
                    float: "left",
                    fontSize: "16px",
                    color: "rgb(82, 89, 97)",
                    padding: "10px",
                  }}
                >
                  {item.complete}
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inquiries;
