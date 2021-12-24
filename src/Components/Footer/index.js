import React from "react";
import "./style.css";
import { BsTwitter,BsFacebook,BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
       <div className="fulldiv">
        
        <div className="icon">
        <Link to="" id="path"> <BsFacebook/> </Link>
        <Link to="" id="path"> <BsTwitter/> </Link>
        <Link to="" id="path"> <BsGithub/> </Link>
       </div>
       
       
           <h3 style={{color: "white" , marginBottom: "200px"}}>

           جميع الحقوق محفوظة لومـيـض -
                2021
           </h3>
       
    </div>
    </>
  );
};

export default Footer;
