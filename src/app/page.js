import Hero from "@/components/Hero/hero";
import Header from "@/components/Header/header";
import Slider from "@/components/Slider/slider";
import Access from "@/components/Access/access";
import Footer from "@/components/Footer/footer";
import InteractiveCards from "@/components/MenuCard/menuCard";
const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#menu", label: "Menu" },
	{ href: "#discover", label: "Discover" },
	{ href: "#access", label: "Access" },
];
export default function Home() {
	return (
		<>
			<Header navItems={navItems} />
			<Hero />

			<div id="menu" className="section-title pb-3 pt-3 mb-5 mt-5 container">
				<div className="d-flex align-items-center justify-content-center neon-title">Menu</div>
				<div>
					<InteractiveCards
						cards={[
							{
								title: "Drinks",
								image: "/img/img4.jpg",
								icon: "/img/drinks.png",
								href: "/menu/drinks",
							},
							{
								title: "Food",
								image: "/img/bg2.jpg",
								icon: "/img/food.png",
								href: "/menu/foods",
							},
							{
								title: "Cafe",
								image: "/img/img3.jpg",
								icon: "/img/cafe.png",
								href: "/menu/cafe",
							},
						]}
					/>
				</div>
			</div>
			<Slider />
			<Access />
			<Footer />
		</>
	);
}
