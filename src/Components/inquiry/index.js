import React, {useEffect , useState} from 'react'
import Navbar from "../Navbar"
import axios from 'axios';
import "./style.css";
import Footer from "../Footer"
import { useSelector } from "react-redux";
import { useNavigate , useParams } from "react-router-dom";

 const Inquiry = () => {
  const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [inquiry, setInquiry] = useState([]);

    const state = useSelector((state) => {
      return state;
    });
    
    useEffect(() => {
      getOnePost();
      getOneUser();
    }, []);

    const getOnePost = async () => {
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/getOneInquiry/${id}` , {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      })
      console.log(result);
      setInquiry(result.data);
    };

//description about user
  const getOneUser = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getUserInquiry/${state.Login.user._id}`,
      { headers: { Authorization: `Bearer ${state.Login.token}` } }
    );
    console.log(result);
    setInquiry(result.data);
  };
  console.log("token", state.Login.token);
  console.log(state.Login);


    return (
        <>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
        <br />    
        <div className="desInquiry">   
        <div className="prf">
         {inquiry.map((item) => (
           <>
           {console.log("item" , item)}
          <div key={item._id}>
          <div className="desc">
            <h3 id="title" >{item.title}</h3>
            <h3 id="dec" >{item.dec}</h3>
            <img id="avatar" src={item.user.avatar}></img>
            <h3 id="name">{item.user.userName}</h3>
            </div>
          </div>
          </>
        ))}
      </div>
       
      </div>
      </div>
      <Footer/>
        </>
    )
}

export default Inquiry;