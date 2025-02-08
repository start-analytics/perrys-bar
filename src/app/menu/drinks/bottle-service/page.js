import HeroMenu from "@/components/HeroMenu/heroMenu";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import ChampagneMenu from "./components/champagne";
import RedWineMenu from "./components/redWine";
const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#champagne", label: "Champagne" },
	{ href: "#red-wine", label: "Red Wine" },
];

const BottleService = () => {
	return (
		<>
			<Header navItems={navItems} />
			<HeroMenu title="Champagne & Red Wine" img="/img/menu/champagne.jpg" />
			<ChampagneMenu />
			<RedWineMenu />
			<Footer />
		</>
	);
};

export default BottleService;
