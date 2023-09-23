import React from "react";
import { TheaterContext } from "./Context.jsx";

export default function Theater({ children }) {
  return <TheaterContext.Provider value={null} children={children} />;
}
