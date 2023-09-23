import { TheaterContext, StageContext } from "./Context.jsx";

export default function Stage({ id = "default", children }) {
  return <StageContext.Provider value={null} children={children} />;
}
