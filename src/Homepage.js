import React from 'react';
import Background from './images/easybankBg.png';

const Homepage = () => (
  <section>
    <div className="main-container">
      <nav className="navbar">
        <div><h1>easybank</h1></div>
        <ul className="nav-links">
          <li><a href="section">Home</a></li>
          <li><a href="section">About</a></li>
          <li><a href="section">contact</a></li>
          <li><a href="section">Blog</a></li>
          <li><a href="section">Careers</a></li>
        </ul>
        <div><button className="invite-btn" type="button">Request Invite</button></div>
        <div className="hambuger">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </nav>
    </div>

    <div className="main-container">
      <div className="description">
        <div className="content-wrapper">
          <div className="heading"><h1>Next generation digital banking</h1></div>
          <div>
            <p>
              Take your financial life online. Your Easybank account will be a one-stop-shop
              for spending, saving, budgeting, investing, and much more.
            </p>
          </div>
          <div><button className="invite-btn block" type="button">Request Invite</button></div>
        </div>
        <div className="image-con">
          <img className="desktop-img" src={Background} alt="yeah" />
        </div>
      </div>
    </div>
  </section>
);

export default Homepage;
