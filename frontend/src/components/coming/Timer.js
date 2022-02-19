import React, { useEffect, useState } from "react";
import './timer.css'
const Timer = () => {
  const [data, setData] = useState({
    days: 0,
    minutes: 0,
    hours: 0,
    seconds: 0,
    time_up: "",
  });
  let x = null;
  let deadline = null;
  const count = () => {
    var now = new Date().getTime();
    var t = deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? "0" + dd : dd;
    var hours = hh < 10 ? "0" + hh : hh;
    var minutes = mm < 10 ? "0" + mm : mm;
    var seconds = ss < 10 ? "0" + ss : ss;
    setData((state) => ({
        ...state,
        days, minutes, hours, seconds
    })) 

    if (t < 0) {
      clearInterval(x);
      setData((state) => ({
        ...state,
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP",
    }))
      
    }
  };
  useEffect(() => {
    deadline = new Date("Feb 08, 2022 21:00:00").getTime();

    x = setInterval(count, 1000);
  }, []);
      const { days, seconds, hours, minutes } = data;
  return (
    <div className="timer-container">
      <div className="timer-item">
        <p>Days</p>
        <span>{ days }</span>
      </div>
      <div className="timer-item">
        <p>Hours</p>
        <span>{ hours }</span>
      </div>
      <div className="timer-item">
        <p>Minutes</p>
        <span>{ minutes }</span>
      </div>
      <div className="timer-item">
        <p>Seconds</p>
        <span>{ seconds }</span>
      </div>
    </div>
  );
};

export default Timer;
