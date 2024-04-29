import React from "react";
import "./Card.css";

const Card = ({ name, email, url, age }) => {

  if (name && email && url && age) {
    return (
      <div className="contactCard">
        
        <div>
          <p><b>Nombre:</b> {name} </p>
          <p><b>Email:</b> {email} </p>
          <p><b>Edad:</b> {age} </p>
        </div>

        <img src={url} width={150} height={150} />

      </div>
    );
  };
};

export default Card;
