import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const soju = [
	{
		items: [
			{ name: "眞露チャミスル", details: "Fresh / Strawberry / Plum", volume: "360ml", price: "¥900" },
			{ name: "乙 黒霧島 芋 25°", details: "Miyazaki", alcohol: "25%", volume: ["30ml", "1800ml"], price: ["¥500", "¥15,000"] },
			{ name: "乙 一粒の麦 25°", details: "Kagoshima", alcohol: "25%", volume: ["30ml", "1800ml"], price: ["¥500", "¥15,000"] },
			{ name: "甲 乙 混和 鍛高譚 20°", details: "Shiso - Tantakatan", alcohol: "20%", volume: ["30ml", "1800ml"], price: ["¥500", "¥15,000"] },
			{ name: "乙 神の河 長期貯蔵 麦 25°", details: "Kagoshima", alcohol: "25%", volume: ["30ml", "720ml"], price: ["¥600", "¥8,000"] },
			{ name: "乙 富乃宝山 芋 25°", details: "Kagoshima", alcohol: "25%", volume: ["30ml", "1800ml"], price: ["¥600", "¥18,000"] },
			{ name: "乙 吉兆宝山 芋 25°", details: "Kagoshima", alcohol: "25%", volume: ["30ml", "1800ml"], price: ["¥600", "¥18,000"] },
			{ name: "乙 二階堂 吉四六 びん 麦 25°", details: "Oita", alcohol: "25%", volume: ["30ml", "720ml"], price: ["¥600", "¥18,000"] },
		],
	},
];

const SojuMenu = () => {
	return (
		<>
			<div id="sojus">
				<h1 className="text-center mb-5 mt-5">Soju - 烧酎</h1>
				<div className="container">
					<div className="row justify-content-center">{soju.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
	ß;
};

export default SojuMenu;
