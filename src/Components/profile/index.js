import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "./../Firebase";
import Navbar from "./../Navbar";
import Footer from "./../Footer";
import Swal from "sweetalert2";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [inquiry, setInquiry] = useState([]);
  const [addPost, setAddPost] = useState(false);
  const [addInquiry, setAddInquiry] = useState(false);

  //counter
  const [counter, setCounter] = useState(0);

  // add post
  const [title, setTitle] = useState("");
  const [dec, setDec] = useState("");
  //
  // const [specialty, setSpecialty] = useState("");

  const [image, setImage] = useState([]);
  const [url, setUrl] = useState([]);
  const [progress, setProgress] = useState(0);
  const [price, setPrice] = useState(0);
  const [workingTime, setWorkingTime] = useState("");
  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();
  const p = useParams();

  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    // console.log(state.Login.user._id);
    getOneUser();
    getUserPost();
    getUserInquiry();
  }, []);

  //description about user
  const getOneUser = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/Oneusers/${p.id}`,
      { headers: { Authorization: `Bearer ${state.Login.token}` } }
    );
    // console.log(result.data);
    setUser(result.data);
  };
  // console.log("token", state.Login.token);
  // console.log(state.Login.user.userName);
  //

  //user post
  const getUserPost = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getUserPost/${p.id}`,
      {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      }
    );
    // console.log(result);
    setPosts(result.data);
  };
  //

  // getUserInquiry
  //user inquiry
  const getUserInquiry = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getUserInquiry/${p.id}`,
      {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      }
    );
    // console.log(result);
    setInquiry(result.data);
  };
  //
  const updateUser = async () => {
    const result = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/update_user`,
      {
        status: statuss,
      },
      {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      }
    );
    console.log(result.data);
    getOneUser();
  };

  //add posts
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((newUrl) => {
            setUrl([...url, newUrl]);
            // console.log(newUrl);
            setCounter(counter + 1);
          });
      }
    );
  };

  const addNewPost = async () => {
    // console.log(url);
    if (url) {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/addpost`,
        {
          title,
          dec,
          image: url,
          price,
          workingTime,
        },
        {
          headers: {
            Authorization: `Bearer ${state.Login.token}`,
          },
        }
      );
      // console.log(result);
      // setPosts(result.data);
      // getAllPosts(state.Login.token);
    }
    Swal.fire("تم اضافة المشروع", "👏 تم اضافة مشروعك بنجاح", "success");
  };
  //
  //add inquiry
  const addNewInquiry = async () => {
    console.log(url);
    if (url) {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/addinquiry`,
        {
          title,
        },
        {
          headers: {
            Authorization: `Bearer ${state.Login.token}`,
          },
        }
      );
      // console.log(result);
      setInquiry(result.data);
      // getAllPosts(state.Login.token);
    }
    Swal.fire("تم اضافة سؤالك", "👏 تم اضافة سؤالك بنجاح", "success");
  };
  //
  const [statuss, setStatus] = useState("");
  const changeStatus = (e) => {
    setStatus(e.target.value);
    // setSpecialty(e.target.value);
  };
  useEffect(() => {
    if (statuss) updateUser();
  }, [statuss]);
  return (
    <>
      <Navbar fixed="top" />
      <div style={{ marginTop: "140px" }}>
        <div class="row">
          <div class="col-3 menu">
            <ul>
              <li>
                <h4>الحاله: {user[0]?.status} </h4>
              </li>

              {user[0]?._id == state.Login.user._id ? (
                <>
                  <li>
                    <select value={user[0]?.status} onChange={changeStatus}>
                      <option value="متوفر ">متوفر</option>
                      <option value="مشغول ">مشغول</option>
                    </select>
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => setAddInquiry(true)}
                  >
                    اضافة استفسار +
                  </li>
                </>
              ) : (
                ""
              )}
              {state.Login.user.role === "61c4375564bde5690cdb68d0" &&
              user[0]?._id == state.Login.user._id ? (
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => setAddPost(true)}
                >
                  اضافة مشروع +
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <div className="col-6">
            <h2> {user[0]?.userName}</h2>
            <br />
            {user[0]?._id == state.Login.user._id ? (
              <>
                <p onClick={() => setEdit(true)}>⚙️</p>
              </>
            ) : (
              <></>
            )}
            {/* service */}
            <h6 style={{ color: "gray" }}> التصنيف: {user[0]?.specialty}</h6>

            <br />
            {/* user & service */}
            <h5> {user[0]?.bio}</h5>
            <br />
            {/* servce */}
            <h4>:لـلـتـواصـل</h4>
            <h6> {user[0]?.Email} :الايميل</h6>
            <h6>{user[0]?.Phone_Number} :رقم الجوال</h6>
          </div>

          <div className="col-3 right">
            <div className="aside">
              <img
                className="imgAvProf"
                src={user[0]?.avatar}
                alt="avatarImg"
              ></img>
            </div>
          </div>
        </div>
        <hr />
        {/* posts -> service */}

        <h3>المشاريع </h3>
        <div class="grid-container">
          {posts.map((item) => (
            <>
              <div key={item._id}>
                <img className="imgP" src={item.image} alt="postImg" />
                <h3
                  className="clickTite"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/Post/${item._id}`)}
                >
                  {item.title}
                </h3>
              </div>
            </>
          ))}
        </div>
        <hr />
        {/* inquiry -> user & service */}
        <h3>الاستفسارات </h3>

        <div className="grid-containerInq">
          {inquiry.map((item) => (
            <>
              <div key={item._id}>
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/inquiry/${item._id}`)}
                >
                  {item.title}
                </h3>
                <br />
              </div>
            </>
          ))}
        </div>
        {/* add posts in profile */}

        {addPost ? (
          <div className="edit">
            <div className="container">
              <div className="card">
                <div className="input">
                  <input
                    name="text"
                    type="text"
                    className="input-field"
                    placeholder="عنوان المشروع"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label className="input-label" htmlFor="email">
                    عنوان المشروع
                  </label>
                </div>
                <div className="input">
                  <textarea
                    name="w3review"
                    rows="3"
                    cols="100pm"
                    className="input-field"
                    placeholder="اضف وصف لمشروعك"
                    onChange={(e) => setDec(e.target.value)}
                  ></textarea>
                  <br />
                  <label className="input-label">اكتب وصف لمشروعك</label>
                </div>
                <div className="input">
                  <input
                    className="input-field"
                    type="number"
                    placeholder="سعر المشروع"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <label className="input-label">ماهو سعر المشروع؟</label>
                </div>
                <div className="input">
                  <input
                    className="input-field"
                    type="text"
                    placeholder="مدة العمل "
                    onChange={(e) => setWorkingTime(e.target.value)}
                  />
                  <label className="input-label">مدة العمل على المشروع؟</label>
                </div>
                <div className="input">
                  <input
                    className="input-field"
                    type="file"
                    name="post"
                    multiple
                    onChange={handleChange}
                  />
                  <label className="input-label">اضف صور لمشروعك</label>
                </div>
                <progress style={{ width: "80%" }} value={progress} max="100" />
                <div>تم تحميل {counter} صورة</div>
                <div className="actionLogin">
                  <button
                    className="actionButton"
                    style={{ backgroundColor: "grey", margin: "30px" }}
                    onClick={handleUpload}
                  >
                    تحميل الصوره
                  </button>
                  <button className="actionButton" onClick={addNewPost}>
                    اضافه
                  </button>
                  <button
                    style={{ float: "left" }}
                    className="actionButton"
                    onClick={() => setAddPost(false)}
                  >
                    حفظ
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {/* add inquiry in profile */}
        {addInquiry ? (
          <>
            <div className="edit">
              <div className="container">
                <div className="card">
                  <form onSubmit={addNewInquiry}>
                    <div className="input">
                      <input
                        name="text"
                        id="text"
                        type="text"
                        placeholder="ماهو سؤالك؟"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <br />
                      <button type="submit">اضافه</button>
                      <br />
                      <button onClick={() => setAddInquiry(false)}>
                        الغاء
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {edit ? (
          <div className="edit">
            {user.map((item) => (
              <form onSubmit={updateUser}>
                <div key={item._id} className="card">
                  <div className="input">
                    <input
                      style={{ textAlign: "right" }}
                      className="input-field"
                      type="text"
                      name="title"
                      defaultValue={user[0]?.userName}
                    />
                    <label
                      style={{ color: "rgb(19,82,139)", fontSize: "20px" }}
                    >
                      : اسم المستخدم
                    </label>
                  </div>
                  <div className="input">
                    <textarea
                      style={{ textAlign: "right" }}
                      className="input-field"
                      type="text"
                      name="specialty"
                      defaultValue={user[0]?.specialty}
                    />
                    <label
                      style={{ color: "rgb(19,82,139)", fontSize: "20px" }}
                    >
                      : التصنيف
                    </label>
                  </div>
                  <div className="input">
                    <input
                      style={{ textAlign: "right" }}
                      className="input-field"
                      type="text"
                      name="bio"
                      defaultValue={user[0]?.bio}
                    />
                    <label
                      style={{ color: "rgb(19,82,139)", fontSize: "20px" }}
                    >
                      :بايو
                    </label>
                  </div>
                  <div className="input">
                    <input
                      style={{ textAlign: "right" }}
                      className="input-field"
                      type="email"
                      name="email"
                      defaultValue={user[0]?.Email}
                    />
                    <label
                      style={{ color: "rgb(19,82,139)", fontSize: "20px" }}
                    >
                      : الايميل
                    </label>
                  </div>
                  <div className="input">
                    <input
                      style={{ textAlign: "right" }}
                      className="input-field"
                      type="Number"
                      name="PhoneNumber"
                      defaultValue={user[0]?.Phone_Number}
                    />
                    <label
                      style={{ color: "rgb(19,82,139)", fontSize: "20px" }}
                    >
                      : رقم الجوال
                    </label>
                  </div>
                  <div className="action">
                    <button className="action-button" type="submit">
                      حفظ
                    </button>
                    <button
                      style={{ backgroundColor: "grey", margin: "10px" }}
                      className="action-button"
                      onClick={() => setEdit(false)}
                    >
                      الغاء
                    </button>
                  </div>
                </div>
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

export default Profile;
