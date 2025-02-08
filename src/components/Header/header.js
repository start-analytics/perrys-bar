"use client";
import { useState, useEffect } from "react";
import { initializeMobileNavToggle, initializeMobileNavCloseOnLinkClick, initializeScrollspy } from "./headerScript";
import "./header.css";

const Header = ({ navItems }) => {
	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	useEffect(() => {
		const cleanupToggle = initializeMobileNavToggle(setIsMobileNavActive);
		const cleanupCloseOnClick = initializeMobileNavCloseOnLinkClick();
		const cleanupScrollspy = initializeScrollspy();

		return () => {
			cleanupToggle();
			cleanupCloseOnClick();
			cleanupScrollspy();
		};
	}, []);

	return (
		<header id="header" className="header fixed-top">
			<div className="branding d-flex align-items-center">
				<div className="container position-relative d-flex align-items-center justify-content-between">
					<a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
						<div className="d-flex">
							<img src="/img/white-logo.png" className="logo-img margin-right-13" alt="logo" />
						</div>
					</a>
					<nav id="navmenu" className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
						<ul>
							{navItems.map(({ href, label }, index) => (
								<li key={href}>
									<a className={`nav-item ${index === 0 ? "active" : ""}`} href={href}>
										{label}
									</a>
								</li>
							))}
						</ul>
						<i className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? "bi-x" : "bi-list"}`} />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
