import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import "./style.css";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Inquiry = () => {
  const { id } = useParams();
  const [inquiry, setInquiry] = useState([]);
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [edit, setEdit] = useState(false);
  // const [compleet, setCompleet] = useState("");

  const state = useSelector((state) => {
    return state;
  });

  const getOneInquiry = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getOneInquiry/${id}`,
      {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      }
    );
    // console.log(result);
    setInquiry(result.data);
  };

  //description about user
  const getOneUser = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getUserInquiry/${state.Login.user._id}`,
      { headers: { Authorization: `Bearer ${state.Login.token}` } }
    );
    // console.log(result);
    setInquiry(result.data);
  };
  // console.log("token", state.Login.token);
  // console.log(state.Login);

  // add comment
  const addComment = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/comments/${id}`,
        {
          comment: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${state.Login.token}`,
          },
        }
      );
      // console.log("new comment", result.data);
      setNewComment();
      getOneInquiry();
      getAllComment();
    } catch (error) {
      // console.log(error);
    }
  };

  //get comments
  const getAllComment = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/comments/${id}`,
        { headers: { Authorization: `Bearer ${state.Login.token}` } }
      );
      // console.log(result.data);
      setComment(result.data);
    } catch (error) {
      // console.log(error);
    }
  };

  //
  const updateInquiry = async (e) => {
    e.preventDefault();
    // console.log("complete... ", e.target.completed.value);
    await axios.put(
      `${process.env.REACT_APP_BASE_URL}/updateInquiry/${id}`,
      {
        title: e.target.title.value,
        complete: e.target.completed.value,
      },
      {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      }
    );
    // console.log(result.data);
  };

  //

  // deleteComment
  // comments
  const deleteComment = async (id) => {
    // console.log(e.preventDefault());
    // console.log("complete... ", compleet);
    await axios.put(
      `${process.env.REACT_APP_BASE_URL}/comments/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      }
    );

    // console.log(result.data);
    getAllComment();
    // window.location.reload(false);
  };

  //
  useEffect(() => {
    getOneInquiry();
    getOneUser();
    getAllComment();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {inquiry.map((item) => (
          <div className="row">
            <div className="col-3 menu">
              {/* comments */}
              <ul>
                {comment?.map((ele) => {
                  return (
                    <div>
                      <li>
                        {ele.comment}[ {ele.user.userName} ]
                        {state.Login.user.role === "61c05aad3708bf224ada4791" ||
                        ele.user._id === state.Login.user._id ? (
                          <p
                            onClick={() => deleteComment(ele._id)}
                            style={{ cursor: "pointer", float: "left" }}
                          >
                            ✖️
                          </p>
                        ) : (
                          ""
                        )}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="col-6">
              <h4 style={{ fontSize: "30px", padding: "10px" }}>
                {item.title}
                {item.user._id == state.Login.user._id ? (
                  <>
                    <p
                      onClick={() => setEdit(true)}
                      style={{
                        cursor: "pointer",
                        float: "right",
                        fontSize: "13px",
                      }}
                    >
                      ⚙️
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </h4>
              <br />
              <button onClick={addComment}>اضافة</button>
              <input
                required
                style={{ textAlign: "right", width: "35%" }}
                placeholder="اضافة تعليق"
                type="text"
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>
            <div className="col-3 right">
              <div className="aside">
                <img
                  style={{ borderRadius: "50%", width: "100px" }}
                  src={item.user.avatar}
                  alt="avatarImg"
                ></img>

                <h3>{item.user.userName}</h3>
              </div>
            </div>
          </div>
        ))}
        {edit ? (
          <div className="edit">
            {inquiry.map((item) => (
              <form onSubmit={updateInquiry}>
                <div key={item._id}>
                  <div className="desc">
                    <input type="text" name="title" defaultValue={item.title} />
                  </div>
                </div>
                <select name="completed">
                  <option value="مكتمل">مكتمل</option>
                  <option value="غير مكتمل">غير مكتمل</option>
                </select>
                <button type="submit">حفظ</button>
                <button onClick={() => setEdit(false)}>الغاء</button>
              </form>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Inquiry;
