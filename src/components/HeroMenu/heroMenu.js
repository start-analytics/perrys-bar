import "./heroMenu.css";

const HeroMenu = ({ img, title }) => {
	return (
		<section id="home" className="hero section dark-background">
			<img src={img} alt="Perrys Bar Logo" className="hero-image" />

			<div className="container">
				<div className="row">
					<div className="d-flex flex-column align-items-center align-items-lg-center" style={{ textAlign: "center" }}>
						<h2 className="main-title">{title}</h2>
					</div>
				</div>
			</div>
			<div style={{ textShadow: "rgb(0 0 0) 3px 2px 5px" }} className="scroll-down z-3">
				Scroll ↓
			</div>
		</section>
	);
};

export default HeroMenu;
