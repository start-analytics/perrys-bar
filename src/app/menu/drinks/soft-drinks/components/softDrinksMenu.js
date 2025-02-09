import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const softDrinks = [
	{
		items: [
			{ name: "コーラ", img: "/img/menu/cola.png", details: "Cola", price: "¥500" },
			{ name: "ジンジャエール", img: "/img/menu/ginger_ale.png", details: "Ginger Ale", price: "¥500" },
			{ name: "カルピス", img: "/img/menu/calpis.png", details: "Calpis", price: "¥500" },
			{ name: "カルピスソーダ", img: "/img/menu/calpis-soda.png", details: "Calpis soda", price: "¥500" },
			{ name: "オレンジジュース", img: "/img/menu/orange-juice.png", details: "Orange Juice", price: "¥600" },
			{ name: "アップルジュース", img: "/img/menu/apple-juice.png", details: "Apple Juice", price: "¥600" },
			{ name: "パイナップルジュース", img: "/img/menu/pineapple-juice.png", details: "Pineapple Juice", price: "¥600" },
			{ name: "クランベリージュース", img: "/img/menu/cranberry-juice.png", details: "Cranberry Juice", price: "¥600" },
			{ name: "ウーロン茶", img: "/img/menu/oolong-tea.png", details: "Oolong Tea", price: "¥500" },
			{ name: "ジャスミン茶", img: "/img/menu/jasmine-tea.png", details: "Jasmine Tea", price: "¥500" },
			{ name: "緑茶", img: "/img/menu/green-tea.png", details: "Green Tea", price: "¥500" },
			{ name: "トニックウォーター", img: "/img/menu/tonic-water.png", details: "Tonic Water", price: "¥500" },
			{ name: "炭酸水", img: "/img/menu/soda.png", details: "Soda", price: "¥500" },
		],
	},
];

const SoftDrinksMenu = () => {
	return (
		<>
			<div id="soft-drinks">
				<h1 className="text-center mb-5 mt-5">Soft Drinks - ドリンク</h1>
				<div className="container">
					<div className="row justify-content-center">{softDrinks.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
};

export default SoftDrinksMenu;
