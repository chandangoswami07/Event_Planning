import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>ALLinONE</h1>
          <p>Owner:- Chandan😎</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Email</button>
          </div>
          <p>Sign up with your email to receive news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;