import "./styles.css";
import { Theater, Stage, SVG, Clock } from "./mrt3k.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello MRT3k</h1>
      <Theater>
        <Stage>
          <SVG>
            <circle r={1} />
          </SVG>
        </Stage>
      </Theater>
      <Clock />
    </div>
  );
}
