import background from "../assets/img/bg3.jpg";
const Hero = () => {
	return (
		<section id="hero" className="hero section dark-background">
			<img src={background} alt="" />
			<div className="container">
				<div className="row"></div>
			</div>
			<div style={{ textShadow: "rgb(0 0 0) 3px 2px 5px" }} className="scroll-down z-3">
				Scroll ↓
			</div>
		</section>
	);
};

export default Hero;
