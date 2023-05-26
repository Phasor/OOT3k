import React, { useEffect } from "react";

export default function Spinner() {
  useEffect(() => {
    const windmill = document.getElementById("windmill");
    const button = document.getElementById("start-animation");
    if (windmill && button) {
      button.addEventListener("click", startAnimation);
    }
  }, []);

  function startAnimation() {
    let time = 0; // current time
    const duration = 5000; // duration in ms
    const startValue = 5; // initial speed value
    const endValue = 0.1; // end speed value

    const intervalId = setInterval(() => {
      const progress = time / duration; // progress as a fraction between 0 and 1
      const value = startValue + (endValue - startValue) * progress; // calculate new value using linear interpolation
      windmill.style.setProperty("--speed", value + "s", "important"); // set new value as CSS variable with !important rule
      time += 10; // increment time by 10ms
      if (time >= duration) {
        clearInterval(intervalId); // stop the interval when the animation is complete
      }
    }, 10);
  }

  return (
    <div id="windmill">
      <div className="spinner">
        <div className="blade1">
          <div></div>
        </div>
        <div className="blade2">
          <div></div>
        </div>
        <div className="blade3">
          <div></div>
        </div>
        <div className="blade4">
          <div></div>
        </div>
      </div>
    </div>
  );
}
