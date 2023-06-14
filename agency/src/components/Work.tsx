import React from 'react'
import { Link } from "react-router-dom";

const Work: React.FC = () => {
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
                  <img src="images/facebook.png"  alt="" />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com">
                  <img src="images/twitter.png"  alt="" />
                </Link>
              </li>
              <li>
                <Link to="https://instagram.com">
                  <img src="images/instagram.png"  alt="" />
                </Link>
              </li>
            </ul>
            <Link to="mailto:you@email.com" className="email-icon">
              <img src="images/email.png" alt="" />
            </Link>
          </div>
        </div>
      </header>

      <section>
        <div className="title">
          <h1>Some of our finest work</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            iusto molestias accusamus rem nobis est, et laborum harum doloremque
            nemo non, minima quos totam labore maxime iste alias ut esse?
            Repellat eaque reiciendis laboriosam corporis fuga vero ratione
            veritatis numquam, libero magni voluptatum omnis molestiae officiis
            exercitationem qui quidem nam.
          </p>
        </div>

        <div className="portfolio">
          <div className="item">
            <img src="images/portfolio-item1.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item2.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item3.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item4.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item5.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item6.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item7.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item8.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item9.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item10.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item11.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item12.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item13.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item14.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item15.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
          <div className="item">
            <img src="images/portfolio-item16.jpg" alt="" />
            <div className="action">
              <Link to="#">Launch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work