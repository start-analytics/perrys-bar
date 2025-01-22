import "./access.css";

const Access = () => {
	return (
		<section id="access" className="contact section">
			{/* Section Title */}
			<div className="section-title pb-0 mb-5 mt-2">
				<div className="d-flex align-items-center justify-content-center neon-title">Access</div>
			</div>
			{/* End Section Title */}
			<div className="map-container mb-5 pt-2 container">
				<iframe className="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.631891302395!2d139.7010684!3d35.661440000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d86a79e9cf7%3A0xb00397adb2473d8b!2zUGVycnlz77yI44Oa44Oq44O844K677yJ5riL6LC35bqX!5e0!3m2!1sen!2sjp!4v1737478532100!5m2!1sen!2sjp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>{" "}
			</div>
			{/* End Google Maps */}
			<div className="container">
				<div className="row gy-4">
					<div>
						<div className="d-md-flex justify-content-between align-items-start">
							<div>
								<div className="info-item d-flex">
									<i className="bi bi-geo-alt flex-shrink-0" />
									<div>
										<h3>Location</h3>
										<p>〒150-0041 Tokyo, Shibuya, Jinnan, 1 Chome-22-10 皆川ビル 7F</p>
									</div>
								</div>
								<div className="d-md-flex">
									<div className="info-item d-flex m-0 mt-4 margin-right-20">
										<i className="bi bi-telephone flex-shrink-0" />
										<div>
											<h3>Call Us</h3>
											<a className="contact-link" href="tel:+815088830886">
												+81 50-8883-0886
											</a>
										</div>
									</div>
									<div className="info-item d-flex  mt-4 mb-4" style={{ marginLeft: "20px" }}>
										<i className="bi bi-envelope flex-shrink-0" />
										<div>
											<h3>Email Us</h3>
											<p>perrys.shibuya@gmail.com</p>
										</div>
									</div>
								</div>
							</div>
							<div className="info-item d-flex m-0 lh-lg">
								<div>
									<h2 className="open-hours-title">Open Hours</h2>
									Everyday: 12:00/6:00AM - 7:00PM-12AM
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Access;
