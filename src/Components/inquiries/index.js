import React, {useEffect , useState} from 'react'
import Navbar from "./../Navbar"
import axios from 'axios';
import "./style.css";
import Footer from "./../Footer";
import { useSelector } from "react-redux";
import Search from '../search';
import { useNavigate , useParams } from "react-router-dom";



 const Inquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const state = useSelector((state) => {
      return state;
    });

    useEffect(() => {
        getAllInquiries();
    }, []);

    const getAllInquiries = async () => {
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/getInquiries` , {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      });
      console.log(result);
      setInquiries(result.data);
    };

    //search
    const searchpages = (e) => {
      const value = e.target.value.toLowerCase();
      if (value !== "") {
        setInquiries(
          inquiries.filter((inquiry) => {
            const inquiryName = inquiry.title.toLowerCase();
            if (inquiryName.includes(value)) return inquiry;
            else return null;
          })
        );
      } else {
        getAllInquiries();
      }
    };


    return (
        <>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
        <Search className="search" searchpages={searchpages}/>

        <br />    
        <div className="inquiries">   
         {inquiries.map((item) => (
           <>
          <div key={item._id}>
          <div className="inquiry"
           onClick={() => navigate(`/inquiry/${item._id}`)}>
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

export default Inquiries;