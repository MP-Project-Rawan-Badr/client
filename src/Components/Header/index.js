import React from "react";
import "./style.css";
// import img from "./background.jpg"

const Header = () => {
  return (
      <>
    <div className="container">
      <img src="./img/background.jpg" 
        style={{marginTop: "17px" , width: "100%" , height: "700px" }} 
    />
    </div>
    <div className="centered">
        <h1>ما هو وميض؟</h1>
        في منصة وميض يمكنك العثور على مزودي الخدمة  ويمكنك طرح سؤالك أو استفسارك وستجد إجابة له. 
يمكنك وضع تقييمك للخدمات التي قمت بتجربتها وإعجابك بها ، وكذلك تحديد موعد مع مزود الخدمة ، وكذلك الدخول في محادثة معه ومناقشة ما تريد والاتفاق معه. 
يمكنك أيضًا الدفع من خلال محفظة داخل الموقع أو استخدام تأشيرة أو بطاقة ائتمان.

    </div>
    </>
  );
};

export default Header;
