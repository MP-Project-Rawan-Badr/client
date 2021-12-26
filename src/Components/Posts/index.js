import React, {useEffect , useState} from 'react'
import Navbar from "./../Navbar"
import axios from 'axios';
import "./style.css";
import Footer from "./../Footer"
import { useSelector } from "react-redux";


 const Posts = () => {
    const [posts, setPosts] = useState([]);

    const state = useSelector((state) => {
      return state;
    });
    useEffect(() => {
      getAllPosts();
    }, []);
    const getAllPosts = async () => {
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/getAllPosts` , {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      })
      console.log(result);
      setPosts(result.data);
    };

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
            <h3 id="title" >{item.title}</h3>
            <img id="image" src={item.image}></img>
            <h3 id="dec" >{item.dec}</h3>
          </div>
          </div>
          </>
        ))}
      </div>
      </div>
      <Footer/>
        </>
    )
}

export default Posts;