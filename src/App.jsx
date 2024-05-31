import React from "react";
import Header from "./components/Header";
import Meme from "./Meme";

// Exporting a functional component called App
export default function App() {
  // Returning the JSX content to be rendered
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}
