"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./interactiveCards.module.css";

const InteractiveCards = ({ cards }) => {
	const frames = useRef([]);
	const cardsRef = useRef([]);
	const lights = useRef([]);
	const [rects, setRects] = useState([]);

	useEffect(() => {
		const updateRects = () => {
			setRects(frames.current.map((frame) => frame?.getBoundingClientRect()));
		};
		updateRects();
		window.addEventListener("resize", updateRects);
		return () => window.removeEventListener("resize", updateRects);
	}, []);

	const mouseMove = (e, index) => {
		if (!rects[index]) return;
		const { x, y, width, height } = rects[index];

		const left = e.clientX - x;
		const top = e.clientY - y;
		const centerX = left - width / 2;
		const centerY = top - height / 2;
		const d = Math.sqrt(centerX ** 2 + centerY ** 2);

		if (cardsRef.current[index] && lights.current[index]) {
			cardsRef.current[index].style.boxShadow = `
        ${-centerX / 8}px ${-centerY / 16}px 10px rgba(0, 0, 0, 0.2)
      `;

			cardsRef.current[index].style.transform = `
        rotate3d(${-centerY / 200}, ${centerX / 200}, 0, ${d / 16}deg)
      `;

			lights.current[index].style.backgroundImage = `
        radial-gradient(circle at ${left}px ${top}px, rgba(255,255,255,0.3), rgba(255,255,255,0) 50%)
      `;
		}
	};

	const mouseLeave = (index) => {
		if (cardsRef.current[index] && lights.current[index]) {
			cardsRef.current[index].style.boxShadow = "";
			cardsRef.current[index].style.transform = "";
			lights.current[index].style.backgroundImage = "";
		}
	};

	return (
		<div className="container mt-4">
			<div className="row justify-content-center">
				{cards.map((card, index) => (
					<a key={index} href={card.href} className="col-md-4 col-sm-12 mb-4 d-flex justify-content-center">
						<div ref={(el) => (frames.current[index] = el)} className={styles.frame} onMouseMove={(e) => mouseMove(e, index)} onMouseLeave={() => mouseLeave(index)}>
							<div ref={(el) => (cardsRef.current[index] = el)} className={`${styles.card}`} style={{ backgroundImage: `url(${card.image})` }}>
								<div ref={(el) => (lights.current[index] = el)} className={styles.light}></div>
								<div className={styles.textContainer}>
									<div className={styles.title}>{card.title}</div>
									{card.icon && <img src={card.icon} alt="icon" width={80} height={80} className={styles.icon} />}
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default InteractiveCards;
