import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const rums = [
	{
		items: [
			{ name: "BACARDI WHITE RUM", img: "/img/menu/bacardi-white-rum.png", details: "バカルディホワイト", alc: "40%", volume: "30ml", price: "¥800" },
			{ name: "BACARDI BLACK RUM", img: "/img/menu/bacardi-black-rum.png", details: "バカルディブラック", alc: "40%", volume: "30ml", price: "¥900" },
			{ name: "DIPLOMATICO", img: "/img/menu/diplomatico.png", details: "ディプロマティコ", alc: "40%", volume: "30ml", price: "¥1,000" },
			{ name: "CAPTAIN MORGAN GOLD", img: "/img/menu/captain-morgan-gold.png", details: "キャプテンモルガン", alc: "35%", volume: "30ml", price: "¥1,200" },
		],
	},
];

const RumMenu = () => {
	return (
		<>
			<div id="rum">
				<h1 className="text-center mb-5 mt-5">Rum - ラム</h1>
				<div className="container">
					<div className="row justify-content-center">{rums.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
};

export default RumMenu;
