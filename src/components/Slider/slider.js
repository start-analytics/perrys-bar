"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./slider.css";

const slides = [
	{
		title: "Bar & Lounge",
		subtitle: "Lorem Ipsum",
		description: "Welcome to the Tokyo Bar",
		image: "/img/img1.jpg",
	},
	{
		title: "Cafe & Restaurant",
		subtitle: "Lorem Ipsum",
		description: "A piece of heaven",
		image: "/img/img2.jpg",
	},
	{
		title: "Shisha Lounge",
		subtitle: "Lorem Ipsum",
		description: "Try our best shisha",
		image: "/img/img3.jpg",
	},
	{
		title: "Cigars & Whiskey",
		subtitle: "Lorem Ipsum",
		description: "Finest selection",
		image: "/img/img4.jpg",
	},
	{
		title: "Karaoke & Events",
		subtitle: "Lorem Ipsum",
		description: "Join us every weekend",
		image: "/img/img5.jpg",
	},
];

export default function Slider() {
	return (
		<div className="mt-4" id="discover">
			<div className="section-title pb-3 pt-3 mb-5 mt-5">
				<div className="d-flex align-items-center justify-content-center neon-title">Discover</div>
			</div>
			<Swiper
				className="sample-slider"
				modules={[Autoplay, EffectCoverflow]}
				slidesPerView={3} // Show 3 slides at once
				effect="coverflow" // Apply coverflow effect
				spaceBetween={0}
				coverflowEffect={{
					depth: 100, // Depth of slides
					stretch: 1, // Spacing between slides
					modifier: 1, // Multiplier for other settings
					scale: 1, // Scale of inactive slides
					slideShadows: true, // Disable slide shadows
				}}
				breakpoints={{
					0: {
						// Breakpoint for screens >= 0px
						slidesPerView: 1,
					},
					768: {
						// Breakpoint for screens >= 768px
						slidesPerView: 2,
					},
					1024: {
						// Breakpoint for screens >= 1024px
						slidesPerView: 3,
					},
				}}
				autoplay={{
					delay: 3000, // Time in milliseconds
					disableOnInteraction: false,
				}}
				navigation
				loop={true}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div style={{ position: "relative", textAlign: "center" }}>
							<img src={slide.image} alt={slide.title} style={{ maxWidth: "100%", borderRadius: "10px" }} />

							<h4 className="slide-title neon-shadow">{slide.title}</h4>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
