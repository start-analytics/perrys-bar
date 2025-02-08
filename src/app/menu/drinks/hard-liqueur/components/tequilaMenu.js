import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const tequilas = [
	{
		items: [
			{ name: "PATRON", img: "/img/menu/patron.png", details: "パトロン", alc: "40%", volume: "30ml", price: "¥1,800" },
			{ name: "DON JULIO ANEJO TEQUILA", img: "/img/menu/don-julio-anejo.png", details: "ドン フリオ テキーラ 1942", alc: "38%", volume: "30ml", price: "¥2,500" },
		],
	},
];

const TequilaMenu = () => {
	return (
		<>
			<div id="tequila">
				<h1 className="text-center mb-5 mt-5">Tequila - テキーラ</h1>
				<div className="container">
					<div className="row justify-content-center">{tequilas.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
};

export default TequilaMenu;
