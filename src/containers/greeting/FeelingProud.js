import React from "react";
import "./FeelingProud.css";
import me from "../../assests/images/rima.png";

function FeelingProud(props) {
  return (
    <div>
      <img
        src={me}
        style={{ height: "80%", width: "80%", borderRadius: "50%" }}
        alt="mypicture"
      />
    </div>
  );
}

export default FeelingProud;
