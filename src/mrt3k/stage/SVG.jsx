import React from "react";
import { StageContext } from "../Context";

export default function SVG({ children }) {
  const stage = React.useContext(StageContext);
  const [focusPosition, setFocusPosition] = React.useState([0, 0]);
  const [focusZoom, setFocusZoom] = React.useState(1);

  React.useEffect(
    function () {
      if (!!stage) {
        stage("register", "focus-on", function ({ position, zoom }) {
          setFocusPosition(position);
          setFocusZoom(zoom);
        });
      }
    },
    [stage]
  );

  const [x, y] = focusPosition;
  const s = focusZoom;

  return (
    <svg viewBox="-11 -11 22 22">
      <g transform={`translate(${-x}, ${-y}) scale(${s})`}>{children}</g>
    </svg>
  );
}
