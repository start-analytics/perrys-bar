import HeroMenu from "@/components/HeroMenu/heroMenu";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import SpecialShotsMenu from "./components/specialShotsMenu";
import CocktailsMenu from "./components/cocktailsMenu";

const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#special-shots", label: "Special shots" },
	{ href: "#buckets", label: "Buckets" },
	{ href: "#cocktails", label: "Cocktails" },
];

const Cocktails = () => {
	return (
		<>
			<Header navItems={navItems} />
			<HeroMenu title="Cocktails & Mixed Drinks" img="/img/menu/cocktail-bg.jpg" />
			<SpecialShotsMenu />
			<BucketsMenu />
			<CocktailsMenu />
			<Footer />
		</>
	);
};

export default Cocktails;
