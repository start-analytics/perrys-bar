import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const champagne = [
	{
		items: [
			{ name: "安心院スパークリング", details: "スパークリングワイン", alcohol: "0%", volume: "750ml", price: "¥1,200" },
			{ name: "MOET & CHANDON IMPERIAL BRUT", details: "モエ エ シャンドン", alcohol: "12%", volume: "750ml", price: "¥1,500" },
			{ name: "PERRIER JOUET", details: "ペリエ ジュエ", alcohol: "12%", price: "¥1,800" },
			{ name: "DOM PERIGNON", details: "ドンペリニオン", alcohol: "12%", volume: "750ml", price: "¥6,800" },
			{ name: "PERRYS CHAMPAGNE", details: "派シャンパン", alcohol: "12%", volume: "750ml", price: "¥6,800" },
			{ name: "ARMAND DE BRIGNAC", details: "アルマンド", alcohol: "12%", volume: "750ml", price: "¥12,000" },
		],
	},
];

const ChampagneMenu = () => {
	return (
		<>
			<div id="champagne">
				<h1 className="text-center mb-5 mt-5">Champagne - シャンパン</h1>
				<div className="container">
					<div className="row justify-content-center">{champagne.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
};

export default ChampagneMenu;
