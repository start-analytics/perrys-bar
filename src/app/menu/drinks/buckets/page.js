import HeroMenu from "@/components/HeroMenu/heroMenu";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import BucketsMenu from "./components/bucketsMenu";

const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#buckets", label: "Buckets" },
];

const Buckets = () => {
	return (
		<>
			<Header navItems={navItems} />
			<HeroMenu title="Buckets" img="/img/menu/buckets_bg.jpg" />
			<BucketsMenu />
			<Footer />
		</>
	);
};

export default Buckets;
