import React, {useEffect , useState} from 'react'
import Navbar from "./../Navbar"
import axios from 'axios';
import "./style.css";
import Footer from "./../Footer"

 const Inquiries = () => {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        getAllInquiries();
    }, []);

    const getAllInquiries = async () => {
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/getInquiries`);
      console.log(result);
      setInquiries(result.data);
    };
    return (
        <>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
        <br />    
        <div className="inquiries">   
         {inquiries.map((item) => (
           <>
          <div key={item._id}>
          <div className="inquiry">
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