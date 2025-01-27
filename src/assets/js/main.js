// utilities.js
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

export function initializeScrollEffect() {
	const toggleScrolled = () => {
		const header = document.querySelector("#header");
		const body = document.body;
		if (header && (header.classList.contains("scroll-up-sticky") || header.classList.contains("sticky-top") || header.classList.contains("fixed-top"))) {
			if (window.scrollY > 100) {
				body.classList.add("scrolled");
			} else {
				body.classList.remove("scrolled");
			}
		}
	};

	window.addEventListener("scroll", toggleScrolled);
	window.addEventListener("load", toggleScrolled);

	return () => {
		window.removeEventListener("scroll", toggleScrolled);
		window.removeEventListener("load", toggleScrolled);
	};
}

export function initializeIsotopeLayouts() {
	const isotopeInstances = [];

	const setupIsotope = () => {
		const isotopeItems = document.querySelectorAll(".isotope-layout");

		isotopeItems.forEach((item) => {
			const layout = item.getAttribute("data-layout") || "masonry";
			const filter = item.getAttribute("data-default-filter") || "*";
			const sort = item.getAttribute("data-sort") || "original-order";
			const container = item.querySelector(".isotope-container");

			imagesLoaded(container, () => {
				const isotopeInstance = new Isotope(container, {
					itemSelector: ".isotope-item",
					layoutMode: layout,
					filter,
					sortBy: sort,
				});

				isotopeInstances.push(isotopeInstance);

				const filters = item.querySelectorAll(".isotope-filters li");
				filters.forEach((filterItem) => {
					filterItem.addEventListener("click", () => {
						item.querySelector(".isotope-filters .filter-active")?.classList.remove("filter-active");
						filterItem.classList.add("filter-active");
						isotopeInstance.arrange({
							filter: filterItem.getAttribute("data-filter"),
						});
					});
				});
			});
		});
	};

	setupIsotope();

	return () => {
		isotopeInstances.forEach((instance) => instance.destroy());
	};
}

export function initializeScrollspy() {
	const handleScrollspy = () => {
		const navLinks = document.querySelectorAll(".navmenu a");

		navLinks.forEach((link) => {
			if (!link.hash) return;
			const section = document.querySelector(link.hash);
			if (!section) return;

			const position = window.scrollY + 200;
			if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
				document.querySelectorAll(".navmenu a.active").forEach((activeLink) => activeLink.classList.remove("active"));
				link.classList.add("active");
			} else {
				link.classList.remove("active");
			}
		});
	};

	window.addEventListener("scroll", handleScrollspy);
	window.addEventListener("load", handleScrollspy);

	return () => {
		window.removeEventListener("scroll", handleScrollspy);
		window.removeEventListener("load", handleScrollspy);
	};
}
