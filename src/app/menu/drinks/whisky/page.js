import HeroMenu from "@/components/HeroMenu/heroMenu";
import WhiskyMenu from "./components/whiskyMenu";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#japanese", label: "Japanese" },
	{ href: "#scottish", label: "Scottish" },
];
const Whisky = () => {
	return (
		<>
			<Header navItems={navItems} />
			<HeroMenu img="/img/menu/whisky_bg.png" title="Whisky" />
			<WhiskyMenu />
			<Footer />
		</>
	);
};

export default Whisky;
