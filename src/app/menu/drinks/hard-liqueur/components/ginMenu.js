import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const gins = [
	{
		items: [
			{ name: "BEEFEATER", img: "/img/menu/beefeater.png", details: "ビーフィーター", alc: "40%", volume: "30ml", price: "¥800" },
			{ name: "GORDON'S", img: "/img/menu/gordons.png", details: "ゴードン", alc: "43%", volume: "30ml", price: "¥800" },
			{ name: "TANQUERAY", img: "/img/menu/tanqueray.png", details: "タンカレー", alc: "47.3%", volume: "30ml", price: "¥800" },
			{ name: "NORDES", img: "/img/menu/nordes.png", details: "ノルディスアトランティックガリシアンジン", alc: "40%", volume: "30ml", price: "¥900" },
			{ name: "SAKURAO CLASSIC", img: "/img/menu/sakurao-classic.png", details: "桜尾", alc: "40%", volume: "30ml", price: "¥1,000" },
			{ name: "KI NO BI", img: "/img/menu/ki-no-bi.png", details: "季の美", alc: "45.7%", volume: "30ml", price: "¥1,100" },
			{ name: "BOMBAY", img: "/img/menu/bombay.png", details: "ボンベイサファイア", alc: "40%", volume: "30ml", price: "¥1,200" },
			{ name: "SUNTORY ROKU", img: "/img/menu/suntory-roku.png", details: "サントリーROKU", alc: "47%", volume: "30ml", price: "¥1,300" },
			{ name: "MONKEY KING", img: "/img/menu/monkey-king.png", details: "モンキー47", alc: "47%", volume: "30ml", price: "¥1,800" },
		],
	},
];

const GinMenu = () => {
	return (
		<>
			<div id="gin">
				<h1 className="text-center mb-5 mt-5">Gin - ジン</h1>
				<div className="container">
					<div className="row justify-content-center">{gins.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
};

export default GinMenu;
