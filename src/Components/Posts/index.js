import React, { useEffect, useState } from "react";
import Navbar from "./../Navbar";
import axios from "axios";
import "./style.css";
import Footer from "./../Footer";
import { useSelector } from "react-redux";
import Search from "../search";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const state = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    getAllPosts();
  }, []);

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
    setPosts(result.data);
  };
  //delete post
  const deletePost = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/deletePost/${id}`, {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      });
      deletePost(state.Login.token);
    } catch (error) {
      // console.log(error);
    }
  };

  //search
  const searchpages = (e) => {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      setPosts(
        posts.filter((post) => {
          const postName = post.title.toLowerCase();
          if (postName.includes(value)) return post;
          else return null;
        })
      );
    } else {
      getAllPosts();
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "140px" }}>
        <Search className="search" searchpages={searchpages} />

        <div class="grid-container">
          {posts.map((item) => (
            <div key={item._id}>
              <img
                className="imgP"
                style={{
                  width: "100%",
                  height: "70%",
                  borderRadius: "20px",
                  opacity: "0.8",
                }}
                src={item.image}
              ></img>
              <h3
                className="clickTite"
                onClick={() => navigate(`/Post/${item._id}`)}
                style={{ padding: "40px", cursor: "pointer" }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Posts;
