import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const specialShots = [
	{
		items: [
			{ name: "TEQUILA", img: "/img/menu/tequila-shot.png", details: "テキーラ エスペシャル (ゴールド/シルバー) 40°", volume: "30ml", price: "¥550" },
			{ name: "BITE", details: "ボゾジョフ", volume: "30ml", price: "¥550" },
			{ name: "B52", img: "/img/menu/b52.png", details: "B52", volume: "30ml", price: "¥790" },
			{ name: "JAGERMEISTER BOMB", img: "/img/menu/jagermeister-bomb.png", details: "イエガーボム", volume: "30ml", price: "¥790" },
			{ name: "HABUSH", details: "ハブシュ", volume: "30ml", price: "¥800" },
			{ name: "KAMIKAZE", img: "/img/menu/kamikaze-shot.png", details: "カミカゼ", volume: "30ml", price: "¥800" },
		],
	},
];

const SpecialShotsMenu = () => {
	return (
		<>
			<div id="special-shots">
				<h1 className="text-center mb-5 mt-5">Special shots - スペシャルショット</h1>
				<div className="container">
					<div className="row justify-content-center">{specialShots.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
	ß;
};

export default SpecialShotsMenu;
