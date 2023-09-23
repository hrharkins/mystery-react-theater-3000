import React from "react";
import { ClockContext } from "../Context";

const timesource = global.performance || global.Date;

export default function Clock({ fps = 1, children }) {
  var then;
  React.useEffect(function () {
    const ticker = setInterval(function () {
      const now = timesource.now(),
        dt = now - then;
      console.log(now, dt - 1000);
      then = now;
    }, 1000 / fps);
    return () => clearInterval(ticker);
  });

  return <ClockContext.Provider value={null} children={children} />;
}
