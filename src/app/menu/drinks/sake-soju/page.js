import HeroMenu from "@/components/HeroMenu/heroMenu";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import SakeMenu from "./components/sakes";
import SojuMenu from "./components/sojus";

const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#sakes", label: "Sake" },
	{ href: "#sojus", label: "Soju" },
];

const SakeSoju = () => {
	return (
		<>
			<Header navItems={navItems} />
			<HeroMenu title="Sake & Soju" img="/img/menu/cocktail-bg.jpg" />
			<SakeMenu />
			<SojuMenu />

			<Footer />
		</>
	);
};

export default SakeSoju;
