import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeImg from "../assets/home.png";

const Home = () => {
  const navigate = useNavigate();
 
  return (
    <section className="hero is-dark is-fullheight">
      <div className="hero-body has-text-centered">
        <div className="container">
          <img src={homeImg} alt="" width={350} />
          <h1 className="title">Welcome to My Website</h1>
          <h2 className="subtitle">Explore, Connect, Enjoy</h2>
          <p className="content">
            To unlock the full experience, please log in to your account before exploring the website.
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default Home;
