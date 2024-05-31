import React from "react";

// Exporting a functional component called Header
export default function Header() {
  // Returning the JSX content to be rendered
  return (
    <header className="header">
      {/* Image element with source set to a troll face image */}
      <img src="./images/WhatsApp Image 2024-05-31 at 14.41.58_fd17b7fa.jpg" className="header--image" />
      {/* Heading element with text "Meme Generator" */}
      <h2 className="header--title">Meme Generator</h2>
      {/* Heading element with text "React Course - DJS07" */}
      <h4 className="header--project">React Course - DJS07</h4>
    </header>
  );
}
