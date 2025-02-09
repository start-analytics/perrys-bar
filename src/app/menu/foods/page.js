import HeroMenu from "@/components/HeroMenu/heroMenu";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import MenuItemCard from "@/components/MenuItemCard/menuItemCard";
const menuItems = [
	{
		items: [
			{ name: "エビマヨ", details: "Shrimp with mayonnaise", price: "¥500" },
			{ name: "焼き餃子", details: "Grilled dumplings (Gyoza)", price: "¥300" },
			{ name: "牛蒡チップス", details: "Burdock chips", price: "¥350" },
			{ name: "パリパリビアソーセージ", details: "Crispy beer sausage", price: "¥500" },
			{ name: "一口餃子", details: "Bite-sized dumplings", price: "¥350" },
			{ name: "チキンナゲット", details: "Chicken nuggets", price: "¥350" },
			{ name: "チーズフライ", details: "Fried cheese", price: "¥350" },
			{ name: "枝豆", details: "Edamame (steamed soybeans)", price: "¥300" },
			{ name: "チュロス", details: "Churros", price: "¥550" },
			{ name: "ポテトチップス", details: "Potato chips", price: "¥350" },
			{ name: "パリパリ鶏皮", details: "Crispy chicken skin", price: "¥500" },
			{ name: "タコ唐揚げ", details: "Deep-fried octopus", price: "¥600" },
			{ name: "ペリーズピザ", details: "Perry's pizza", price: "¥800" },
			{ name: "フライトポテト", details: "Fried fries", price: "¥400" },
			{ name: "鶏の唐揚げ", details: "Fried chicken", price: "¥400" },
			{ name: "生ハム盛り合わせ", details: "Raw ham mixed", price: "¥800" },
			{ name: "チーズ盛り合わせ", details: "Cheese mixed", price: "¥800" },
			{ name: "オマール海老のクリームコロッケ", details: "Lobster cream croquette", price: "¥600" },
			{ name: "牡蠣とトリュフのクリームコロッケ", details: "Oyster and truffle cream croquette", price: "¥600" },
			{ name: "手羽先黄金焼き", details: "Chicken wings", price: "¥600" },
			{ name: "ハンバーグ", details: "Hamburger", price: "¥1200" },
			{ name: "ミートパスタ", details: "Meat Pasta", price: "¥800" },
			{ name: "ペペロンチーノ", details: "Peperoncino", price: "¥350" },
			{ name: "苺ミルクアイス", details: "Strawberry Milk Ice Cream", price: "¥450" },
			{ name: "チーズケーキ", details: "Cheesecake", price: "¥300" },
			{ name: "ティラミス大福", details: "Tiramisu Daifuku", price: "¥300" },
		],
	},
];

const navItems = [];
const Foods = () => {
	return (
		<>
			<Header navItems={navItems} />
			<HeroMenu img="/img/menu/food_bg.jpg" title="Foods" />
			<div id="foods">
				<h1 className="text-center mb-5 mt-5">Foods - 食べ物</h1>
				<div className="container">
					<div className="row justify-content-center">{menuItems.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Foods;
