import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import "./style.css";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storage } from "./../Firebase";


const AddPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
 // add post
 const [title, setTitle] = useState("");
 const [dec, setDec] = useState("");
 const [image, setImage] = useState([]);
 const [url, setUrl] = useState("");
 const [progress, setProgress] = useState(0);
 const [price, setPrice] = useState(0);
 const [workingTime, setWorkingTime] = useState("");

 //


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
    console.log(result);
    setPosts(result.data);
  };

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
    console.log(newUrl);

          });
      }
    );
  };
//
 
  
  const addNewPost = async () => {
    console.log(url);
    if(url){
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/addpost`,{
          title,
          dec,
          image: url,
          price ,
          workingTime,
        },
        {
          headers: {
            Authorization: `Bearer ${state.Login.token}`,
          },
        }
      );
      console.log(result);
      // setPosts(result.data);
      getAllPosts(state.Login.token)
  
    }
  };


  //
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <br />
        <div className="posts">
          {posts.map((item) => (
            <>
              <div key={item._id}>
                <div className="post">
                  <img
                    className="ig"
                    onClick={() => navigate(`/Post/${item._id}`)}
                    id="image"
                    src={item.image[0]}
                  ></img>
                  <h3 id="title">{item.title}</h3>
                  <h3 id="dec">{item.dec}</h3>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>
        {/* add post... */}
      <div>
             
             <input
               className="add"
               style={{ marginLeft: "100px", fontSize: "20px" }}
               type="file"
               name="post"
               multiple
               onChange={handleChange}/>
               <br />
             <input name="text" 
               style={{ marginLeft: "10px", fontSize: "20px" }}
               id="text" type="text" 
               placeholder="add title in your project"
               onChange={(e) => setTitle(e.target.value)}
             />
             <br/>
              <textarea
               style={{ marginLeft: "10px", fontSize: "20px" }}
               name="w3review"
               rows="3"
               cols="100pm"
               placeholder="add descrription in your project"
               onChange={(e) => setDec(e.target.value)}
             ></textarea>
             <br/>
             <input  style={{ marginLeft: "100px", fontSize: "20px" }}
              id="number" type="number" 
             placeholder="add price in your project"
              onChange={(e) => setPrice(e.target.value)}
                />
                <br/>
             <input  style={{ marginLeft: "100px", fontSize: "20px" }}
              id="text" type="text"
             placeholder="add working Time in your project"
              onChange={(e) => setWorkingTime(e.target.value)}
             />
             <br/>
             <progress
               style={{ marginLeft: "200px" }}
               value={progress}
               max="100"
             />
             <button
               className="add"
               style={{ marginLeft: "100px", fontSize: "20px" }}
               onClick={handleUpload}
             >
               upload image
             </button>
             <button onClick={addNewPost} >
               add
             </button>
           </div>
      </div>
      <Footer />
    </>
  );
};

export default AddPosts;
