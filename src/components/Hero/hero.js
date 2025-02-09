import "./hero.css";

const Hero = () => {
	return (
		<section id="home" className="hero section dark-background">
			<video src="/img/smoke.mp4" autoPlay playsInline loop muted className="hero-video"></video>

			<div className="container">
				<div className="row">
					<div className="d-flex flex-column align-items-center align-items-lg-center" style={{ textAlign: "center" }}>
						<h2 className="main-title">
							<img src="/img/red-white-logo.png" alt="Perrys Bar Logo" className="logo-image" />
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
