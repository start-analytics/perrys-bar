import HeroMenu from "@/components/HeroMenu/heroMenu";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import RegularBeerMenu from "./components/regularBeerMenu";
import DraftBeerMenu from "./components/draftBeerMenu";

const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#regular-beer", label: "Regular beer" },
	{ href: "#draft-beer", label: "Draft beer" },
];

const Whisky = () => {
	return (
		<>
			<Header navItems={navItems} />
			<HeroMenu title="Beers" img="/img/menu/beers_bg.jpg" />
			<RegularBeerMenu />
			<DraftBeerMenu />
			<Footer />
		</>
	);
};

export default Whisky;
