import React from 'react'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <div className="logo">Creative Agency</div>
        <div className="toggle"></div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="social-bar">
            <ul>
              <li>
                <Link to="https://facebook.com">
                  <img src="images/facebook.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com">
                  <img src="images/twitter.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="https://instagram.com">
                  <img src="images/instagram.png" alt="" />
                </Link>
              </li>
            </ul>
            <Link to="mailto:you@email.com" className="email-icon">
              <img src="images/email.png" alt="" />
            </Link>
          </div>
        </div>
      </header>

      <section className="home">
        <img src="images/home-img.jpg" className="home-img" alt="" />
        <div className="home-content">
          <h1>
            We help to achieve <br />
            your goals.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque
            nam saepe vero voluptatem vel fuga a eaque earum alias ipsam
            aspernatur culpa maxime laboriosam, impedit quae officiis
            consectetur
          </p>
          <Link to="/contact" className="btn">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home