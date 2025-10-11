import React, { useState, useEffect } from "react";


const Countdown = ({expiryDate}) => {

    useEffect(() => {
      const timer = setInterval(() => setNow(Date.now()), 1000);
      return () => clearInterval(timer);
    }, []);
    
    const [now, setNow] = useState(Date.now());

  let ms = expiryDate - now;
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return <div className="de_countdown">{hours}h {minutes}m {seconds}s</div>;
};

export default Countdown;
