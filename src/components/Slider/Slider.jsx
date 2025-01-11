import React, { useReducer } from "react";
import Slide from "./Slide";
import "./slider.css";

const slides = [
	{
		title: "Bar & Lounge",
		subtitle: "Lorem Ipsum",
		description: "Welcome to the Tokyo Bar",
		image: "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164844/Tokyo%20Bar/DSC_1016-min_bvtwty.jpg",
	},
	{
		title: "Cafe & Restaurant",
		subtitle: "Lorem Ipsum",
		description: "A piece of heaven",
		image: "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164835/Tokyo%20Bar/DSC_1033-min_ltyqc1.jpg",
	},
	{
		title: "Shisha Lounge",
		subtitle: "Lorem Ipsum",
		description: "Try our best shisha",
		image: "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164827/Tokyo%20Bar/DSC_0992-min_duqlms.jpg",
	},
	{
		title: "Cigars & Whiskey",
		subtitle: "Lorem Ipsum",
		description: "Finest selection",
		image: "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164826/Tokyo%20Bar/DSC_0979-min_t0vlki.jpg",
	},
	{
		title: "Karaoke & Events",
		subtitle: "Lorem Ipsum",
		description: "Join us every weekend",
		image: "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164810/Tokyo%20Bar/DSC_0973-min_nq8ahf.jpg",
	},
];

const initialState = { slideIndex: 0 };

function slidesReducer(state, action) {
	switch (action.type) {
		case "NEXT":
			return { ...state, slideIndex: (state.slideIndex + 1) % slides.length };
		case "PREV":
			return {
				...state,
				slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
			};
		default:
			return state;
	}
}

/* export default function Slider() {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <div className="slider-container" id="discover">
      <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    </div>
  );
}
 */

const Slider = () => {
	const slides = [
		{
			backgroundImage: "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164826/Tokyo%20Bar/DSC_0979-min_t0vlki.jpg",
			offset: 2,
			dir: 1,
			content: null,
		},
		{
			backgroundImage: "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164810/Tokyo%20Bar/DSC_0973-min_nq8ahf.jpg",
			offset: 1,
			dir: 1,
			content: {
				title: "",
				subtitle: "",
				description: "",
			},
		},
		{
			backgroundImage: "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164844/Tokyo%20Bar/DSC_1016-min_bvtwty.jpg",
			offset: 0,
			dir: 0,
			isActive: true,
			px: 1.9815668202764978,
			py: 0.5109212802768166,
			content: {
				title: "Bar & Lounge",
				subtitle: "The best",
				description: "The Best in Shibuya",
			},
		},
		{
			backgroundImage: "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164835/Tokyo%20Bar/DSC_1033-min_ltyqc1.jpg",
			offset: -1,
			dir: -1,
			content: {
				title: "Cafe & Restaurant",
				subtitle: "Lorem Ipsum",
				description: "A piece of heaven",
			},
		},
		{
			backgroundImage: "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164827/Tokyo%20Bar/DSC_0992-min_duqlms.jpg",
			offset: -2,
			dir: -1,
			content: null,
		},
	];

	return (
		<div className="slider-container" id="discover">
			<div className="slides">
				<button aria-label="Previous slide">‹</button>
				{slides.map((slide, index) => (
					<div
						className="slide"
						style={{
							"--offset": slide.offset,
							"--dir": slide.offset === 0 ? 0 : slide.offset > 0 ? 1 : -1,
						}}
						data-active={slide.isActive || undefined}
					>
						<div className="slideBackground" style={{ backgroundImage: `url(${slide.backgroundImage})` }}></div>
						{slide.content && (
							<div className="slideContent" style={!slide.isActive ? { backgroundImage: `url(${slide.backgroundImage})` } : {}}>
								<div className="slideContentInner">
									<h2 className="slideTitle">{slide.content.title}</h2>
									<p className="slideDescription">{slide.content.description}</p>
								</div>
							</div>
						)}
					</div>
				))}
				<button aria-label="Next slide">›</button>
			</div>
		</div>
	);
};

export default Slider;
