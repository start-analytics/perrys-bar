import "./Hero.css";
import smokeVideo from "../../assets/img/smoke.mp4";
import logo from "../../assets/img/red-white-logo.png";

const Hero = () => {
	return (
		<section id="home" className="hero section dark-background">
			<video autoPlay loop muted className="hero-video">
				<source src={smokeVideo} type="video/mp4" />
			</video>

			<div className="container">
				<div className="row">
					<div className="d-flex flex-column align-items-center align-items-lg-center" style={{ textAlign: "center" }}>
						<h2 className="main-title">
							<img src={logo} alt="Perrys Bar Logo" className="logo-image" />
						</h2>
					</div>
				</div>
			</div>
			<div style={{ textShadow: "rgb(0 0 0) 3px 2px 5px" }} className="scroll-down z-3">
				Scroll ↓
			</div>
		</section>
	);
};

export default Hero;
