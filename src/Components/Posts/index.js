import React, {useEffect , useState} from 'react'
import { useSelector , useDispatch } from "react-redux";
import Navbar from "./../Navbar"
import axios from 'axios';

 const Posts = () => {
    const [posts, setPosts] = useState([]);

 

    return (
        <>
        <div style={{ marginTop: "0" }}>
        <Navbar />
        <br />
        <hr />
      </div>

     
        </>
    )
}

export default Posts;