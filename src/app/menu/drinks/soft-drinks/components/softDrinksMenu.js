import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const softDrinks = [
	{
		items: [
			{ name: "KPRICE OOLONG", details: "Kprice おいしい烏龍茶", volume: "200ml", price: "¥200" },
			{ name: "KPRICE GREEN TEA", details: "Kprice おいしい緑茶", volume: "200ml", price: "¥200" },
			{ name: "ITO EN OI OCHA", details: "伊藤園 おーいお茶 ほうじ茶 玄米茶 ペット", volume: "200ml", price: "¥200" },
			{ name: "EVIAN", details: "エビアン・ペット", volume: "330ml", price: "¥500" },
			{ name: "PERRIER", details: "ペリエ", volume: "330ml", price: "¥500" },
			{ name: "GINGER ALE", details: "カナダドライジンジャーエール ペット", volume: "200ml", price: "¥600" },
			{ name: "TONIC", details: "ウィルキンソン トニック ペット", volume: "200ml", price: "¥600" },
			{ name: "RED BULL", details: "レッドブル", volume: "250ml", price: "¥600" },
			{ name: "CALPIS", details: "カルピス", volume: "200ml", price: "¥600" },
			{ name: "PEPSI", details: "ペプシコーラ", volume: "330ml", price: "¥600" },
			{ name: "COCA-COLA", details: "セロコーラ", volume: "500ml", price: "¥600" },
			{ name: "SPRITE", details: "スプライト", volume: "470ml", price: "¥600" },
			{ name: "KPRICE SODA", details: "Kprice強炭酸水", volume: "500ml", price: "¥600" },
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
