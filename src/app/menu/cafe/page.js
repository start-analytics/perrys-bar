import HeroMenu from "@/components/HeroMenu/heroMenu";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import MenuItemCard from "@/components/MenuItemCard/menuItemCard";
const drinkItems = [
	{
		items: [
			{ name: "アメリカン", details: "Americano", price: "¥500" },
			{ name: "カフェラテ", details: "Caffe Latte", price: "¥350" },
			{ name: "東京ラテ", details: "Tokyo Latte", price: "¥400" },
			{ name: "カフェモカ", details: "Cafe mocha", price: "¥450" },
		],
	},
];

const navItems = [];
const Cafe = () => {
	return (
		<>
			<Header navItems={navItems} />
			<HeroMenu img="/img/menu/cafe_bg.jpg" title="Cafe" />
			<div id="cafe">
				<h1 className="text-center mb-5 mt-5">Cafe - カフェ</h1>
				<div className="container">
					<div className="row justify-content-center">{drinkItems.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cafe;
