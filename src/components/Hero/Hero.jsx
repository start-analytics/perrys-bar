import background from "../../assets/img/bg3.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src={background} alt="" />
      <div className="container">
        <div className="row">
          <div className="content-wrapper">
            <h2 className="main-title">
              Welcome to <span>SLS Shisha</span>
            </h2>
            <p className="hero-subtitle">Smoke the best shisha in Japan!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
