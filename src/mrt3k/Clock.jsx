import { ClockContext } from "./Context";

export default function Clock({ children }) {
  return <ClockContext.Provider value={null} children={children} />;
}
