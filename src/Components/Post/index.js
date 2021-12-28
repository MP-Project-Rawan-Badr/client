import React, {useEffect , useState} from 'react'
import Navbar from "../Navbar"
import axios from 'axios';
import "./style.css";
import Footer from "../Footer"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

 const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);

    const state = useSelector((state) => {
      return state;
    });
    
    useEffect(() => {
      getOnePost();
    }, []);

    const getOnePost = async () => {
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/getOnePost/${id}` , {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      })
      console.log(result);
      setPost(result.data);
    };

    


    return (
        <>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
        <br />    
        <div className="desPost">   
         {post.map((item) => (
           <>
           {console.log(item)}
          <div key={item._id}>
          <div className="desc">
            <h3 id="title" >{item.title}</h3>
            <h3 id="dec" >{item.dec}</h3>
            <h3 id="dec" >{item.price}</h3>
            <h3 id="dec" >{item.workingTime}</h3>
            </div>
            {item.image.map((img)=> (
              <>
             <img className='igs' id="image" src={img}></img>
             </>
            ))}
          </div>
          </>
        ))}
      </div>
      </div>
      <Footer/>
        </>
    )
}

export default Post;