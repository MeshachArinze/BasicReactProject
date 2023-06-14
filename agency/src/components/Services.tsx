import { Link } from "react-router-dom";

export default function Services():JSX.Element {
  return (
    <div>
      Services
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
          <h1>Services that we can help you with</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            iusto molestias accusamus rem nobis est, et laborum harum doloremque
            nemo non, minima quos totam labore maxime iste alias ut esse?
            Repellat eaque reiciendis laboriosam corporis fuga vero ratione
            veritatis numquam, libero magni voluptatum omnis molestiae officiis
            exercitationem qui quidem nam.
          </p>
        </div>
        <div className="services">
          <div className="service">
            <div className="icon">
              <img src="images/001.png" alt="" />
            </div>
            <h2>Design</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
          <div className="service">
            <div className="icon">
              <img src="images/002.png" alt="" />
            </div>
            <h2>Development</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
          <div className="service">
            <div className="icon">
              <img src="images/003.png" alt="" />
            </div>
            <h2>SEO</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
          <div className="service">
            <div className="icon">
              <img src="images/004.png" alt="" />
            </div>
            <h2>Marketing</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
          <div className="service">
            <div className="icon">
              <img src="images/005.png" alt="" />
            </div>
            <h2>App Development</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
          <div className="service">
            <div className="icon">
              <img src="images/006.png" alt="" />
            </div>
            <h2>Error Fixing</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
        </div>
      </section>
    </div>
  );
}
