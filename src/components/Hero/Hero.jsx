import "./hero.css";
import smokeVideo from "../../assets/img/smoke.mp4";

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <video autoPlay loop muted className="hero-video">
        <source src={smokeVideo} type="video/mp4" />
      </video>

      <div className="container">
        <div className="row">
          <div
            className="d-flex flex-column align-items-center align-items-lg-center"
            style={{ textAlign: "center" }}
          >
            <h2
              style={{ textShadow: "0 2px 9px rgb(255 255 255 / 65%)" }}
              className="main-title"
            >
              Welcome to <span>SLS Shisha</span>
            </h2>
            <p style={{ textShadow: "0 2px 9px rgb(255 255 255 / 65%)" }}>
              Smoke the best shisha in Japan!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
