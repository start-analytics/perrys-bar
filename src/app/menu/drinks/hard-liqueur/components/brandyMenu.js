import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const brandies = [
	{
		items: [
			{ name: "REMY MARTIN VSOP", img: "/img/menu/remy-martin-vsop.png", details: "レミーマルタンVSOP", alc: "40%", volume: "30ml", price: "¥1,400" },
			{ name: "MARTELL VSOP", img: "/img/menu/martell-vsop.png", details: "マーテルVSOP", alc: "40%", volume: "30ml", price: "¥1,600" },
			{ name: "HENNESSY VSOP", img: "/img/menu/hennessy-vsop.png", details: "ヘネシーVSOP", alc: "40%", volume: "30ml", price: "¥1,600" },
			{ name: "MARTELL CORDON BLEU", img: "/img/menu/martell-cordon-bleu.png", details: "マーテルコルドンブルー", alc: "40%", volume: "30ml", price: "¥2,100" },
			{ name: "HENNESSY XO", img: "/img/menu/hennessy_xo.png", details: "ヘネシーXO", alc: "40%", volume: "30ml", price: "¥2,800" },
		],
	},
];

const BrandyMenu = () => {
	return (
		<>
			<div id="brandy">
				<h1 className="text-center mb-5 mt-5">BRANDY - ブランデー</h1>
				<div className="container">
					<div className="row justify-content-center">{brandies.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
};

export default BrandyMenu;
