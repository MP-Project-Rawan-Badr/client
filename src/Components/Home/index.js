import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [inquiries, setInquiries] = useState([]);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllInquiries();
    getAllPosts();
  }, []);

  const state = useSelector((state) => {
    return state;
  });

  // get inquiry
  const [inq, setInq] = useState(0);
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
    setInquiries(result.data.slice(-3));
    setInq(result.data.length);
  };

  // get posts
  const [post, setPost] = useState(0);
  const getAllPosts = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getAllPosts`,
      {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      }
    );
    // console.log(result);
    setPosts(result.data.slice(-3));
    setPost(result.data.length);
  };

  return (
    <>
      <Navbar fixed="top" />
      <Header />
      <div>
        {/* latest inquiry */}
        <h4
          style={{
            padding: "40px",
            fontSize: "40px",
            paddingTop: "20px",
          }}
        >
          أحدث الاستفسارات
        </h4>
        <div className="grid-containerInq">
          {inquiries
            .map((i) => {
              return (
                <>
                  <div>
                    <div>
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "60px",
                          float: "right",
                          padding: "10px",
                          marginBottom: "20px",
                        }}
                        src={i.user.avatar}
                        alt="avatarImg"
                      />
                      <h3>{i.user.userName}</h3>
                      <p
                        style={{ cursor: "pointer" }}
                        className="clickTite"
                        onClick={() => navigate(`/inquiry/${i._id}`)}
                      >
                        {i.title}
                      </p>
                      <h3
                        style={{
                          padding: "10px",
                          float: "left",
                          fontSize: "16px",
                          color: "rgb(82, 89, 97)",
                        }}
                      >
                        {i.complete}
                      </h3>
                    </div>
                  </div>
                </>
              );
            })
            .reverse()}
        </div>

        <h4
          style={{
            paddingRight: "20px",
            fontSize: "40px",
            paddingTop: "20px",
          }}
        >
          أحدث المشاريع
        </h4>
        <div className="grid-container">
          {posts
            .map((i) => {
              return (
                <div key={i._id}>
                  <>
                    <img
                      className="imgP"
                      style={{
                        width: "100%",
                        height: "70%",
                        borderRadius: "20px",
                        opacity: "0.8",
                      }}
                      src={i.image}
                    />
                    <h3
                      className="clickTite"
                      onClick={() => navigate(`/Post/${i._id}`)}
                      style={{ padding: "40px", cursor: "pointer" }}
                    >
                      {i.title}
                    </h3>
                  </>
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
