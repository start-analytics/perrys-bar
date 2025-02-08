import HeroMenu from "@/components/HeroMenu/heroMenu";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import BrandyMenu from "./components/brandyMenu";
import GinMenu from "./components/ginMenu";
import VodkaMenu from "./components/vodkaMenu";
import RumMenu from "./components/rumMenu";
import TequilaMenu from "./components/tequilaMenu";
const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#brandy", label: "Brandy" },
	{ href: "#gin", label: "Gin" },
	{ href: "#vodka", label: "Vodka" },
	{ href: "#rum", label: "Rum" },
	{ href: "#tequila", label: "Tequila" },
];

const Whisky = () => {
	return (
		<>
			<Header navItems={navItems} />
			<HeroMenu title="Hard Liqueur" img="/img/menu/liqueur_bg.jpg" />
			<BrandyMenu />
			<GinMenu />
			<VodkaMenu />
			<RumMenu />
			<TequilaMenu />
			<Footer />
		</>
	);
};

export default Whisky;
