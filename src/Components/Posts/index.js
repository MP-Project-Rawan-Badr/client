import React, {useEffect , useState} from 'react'
import Navbar from "./../Navbar"
import axios from 'axios';
import "./style.css";
import Footer from "./../Footer"
import { useSelector } from "react-redux";
import Search from '../search';
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
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/getAllPosts` , {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      })
      console.log(result);
      setPosts(result.data);
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
        <div style={{ marginTop: "100px" }}>
        <Search className="search" searchpages={searchpages}/>
        <br />    
        <div className="posts">   
         {posts.map((item) => (
           <>
          <div key={item._id}>
          <div className="post">
          <img className='ig'   onClick={() => navigate(`/Post/${item._id}`)}
             id="image" src={item.image}></img>
            <h3 id="title" >{item.title}</h3>
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