import MenuItemCard from "@/components/MenuItemCard/menuItemCard";
const sake = [
	{
		items: [
			{ name: "特別本醸造 八海山", details: "Tokubetsu Honjozo Hakkaisan", alcohol: "15.5%", volume: "30ml", price: "¥600" },
			{ name: "九頭龍", details: "Kuzuryu", alcohol: "16%", volume: "30ml", price: "¥600" },
		],
	},
];

const SakeMenu = () => {
	return (
		<>
			<div id="sakes">
				<h1 className="text-center mb-5 mt-5">Sake - 日本酒</h1>
				<div className="container">
					<div className="row justify-content-center">{sake.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
	ß;
};

export default SakeMenu;
