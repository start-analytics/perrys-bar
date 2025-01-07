import React, { useReducer } from "react";
import Slide from "./Slide";
import "./slider.css";

const slides = [
  {
    title: "Bar & Lounge",
    subtitle: "Lorem Ipsum",
    description: "Welcome to the Tokyo Bar",
    image:
      "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164844/Tokyo%20Bar/DSC_1016-min_bvtwty.jpg",
  },
  {
    title: "Cafe & Restaurant",
    subtitle: "Lorem Ipsum",
    description: "A piece of heaven",
    image:
      "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164835/Tokyo%20Bar/DSC_1033-min_ltyqc1.jpg",
  },
  {
    title: "Shisha Lounge",
    subtitle: "Lorem Ipsum",
    description: "Try our best shisha",
    image:
      "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164827/Tokyo%20Bar/DSC_0992-min_duqlms.jpg",
  },
  {
    title: "Cigars & Whiskey",
    subtitle: "Lorem Ipsum",
    description: "Finest selection",
    image:
      "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164826/Tokyo%20Bar/DSC_0979-min_t0vlki.jpg",
  },
  {
    title: "Karaoke & Events",
    subtitle: "Lorem Ipsum",
    description: "Join us every weekend",
    image:
      "https://res.cloudinary.com/dqiyjy9ye/image/upload/v1736164810/Tokyo%20Bar/DSC_0973-min_nq8ahf.jpg",
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
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
      };
    default:
      return state;
  }
}

export default function Slider() {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <div className="slider-container">
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
