import React from "react";

export const Footer = () => {
    let footerStyle = {
        position : "relative",
        top:"70vh",
        width: "100%"
    }
  return (
      
    <footer className="bg-light text-center text-lg-start" style={footerStyle}>
      <div className="text-center p-3"> © 2020 Copyright:
       <a className="text-dark" href="https://github.com/iharsh13">   Harsh's Todos-List </a>
      </div>
    </footer>
  );
};
