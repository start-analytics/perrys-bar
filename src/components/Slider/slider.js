"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./slider.css";

const slides = [
	{
		title: "Hip-Hop Night",
		subtitle: "Lorem Ipsum",
		image: "/img/img5.jpg",
		href: "https://www.meetup.com/shibuya-hip-hop-night",
	},
	{
		title: "Foreigner weekend party",
		subtitle: "Lorem Ipsum",
		image: "/img/foreigners.png",
		href: "https://www.meetup.com/tokyo-foreigners-weekend-party",
	},
	{
		title: "Rent our venue",
		subtitle: "Lorem Ipsum",
		image: "/img/img3.jpg",
		href: "https://www.startanalytics.net/#contact",
	},
	{
		title: "EDM Night",
		subtitle: "Lorem Ipsum",
		image: "/img/foreigners.jpeg",
		href: "https://www.meetup.com/tokyo-edm-meetup-group/",
	},
	{
		title: "Drinks with Founders",
		subtitle: "Lorem Ipsum",
		image: "/img/bg4.png",
		href: "https://lu.ma/calendar/cal-HvPiBQWizhN6qzx",
	},
];

export default function Slider() {
	return (
		<div className="mt-4" id="discover">
			<div className="section-title pb-3 pt-3 mb-5 mt-5">
				<div className="heading-container container">
					<div className="heading-line"></div>
					<div className="d-flex align-items-center justify-content-center neon-title">Discover</div>
					<div className="heading-line"></div>
				</div>{" "}
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
						<a target="_blank" href={slide.href} style={{ position: "relative", textAlign: "center" }}>
							<img src={slide.image} alt={slide.title} style={{ maxWidth: "100%", borderRadius: "10px" }} />

							<h4 className="slide-title neon-shadow" style={{ background: "#00000080" }}>
								{slide.title}
							</h4>
						</a>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
