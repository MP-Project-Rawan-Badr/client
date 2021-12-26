import React, {useState , useEffect} from 'react'
import Navbar from "./../Navbar";
import axios from 'axios';
import "./style.css";
import Footer from "./../Footer";


const Appointment = () => {

    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        getAllAppointment();
    }, []);

    const getAllAppointment = async () => {
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/getAppointment`);
      console.log(result);
      setAppointment(result.data);
    };

    return (
        <>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
        <br /> 
          <div className="inquiries">   
         {appointment.map((item) => (
           <>
          <div key={item._id}>
          <div className="inquiry">
            <h3 id="title" >{item.date}</h3>
            <h3 id="dec" >{item.Note}</h3>
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

export default Appointment
