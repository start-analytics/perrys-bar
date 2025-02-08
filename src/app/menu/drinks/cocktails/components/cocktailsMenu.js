import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const cocktails = [
	{
		items: [
			{ name: "GIN TONIC", img: "/img/menu/gin-tonic.png", details: "ジントニック ", volume: "CUP", price: "¥800" },
			{ name: "PINA COLADA", img: "/img/menu/pina-colada.png", details: "ピナコラダ", volume: "CUP", price: "¥800" },
			{ name: "MOSCOW MULE", img: "/img/menu/moscow-mule.png", details: "モスコーミュール", volume: "CUP", price: "¥800" },
			{ name: "MOJITO", img: "/img/menu/mojito.png", details: "モヒート", volume: "CUP", price: "¥900" },
			{ name: "VIRGIN MOJITO", img: "/img/menu/virgin-mojito.png", details: "モヒートノンアルコール", volume: "CUP", price: "¥900" },
			{ name: "BLUE HAWAII", img: "/img/menu/blue-hawaii.png", details: "ブルーハワイ", volume: "CUP", price: "¥900" },
			{ name: "LONG ISLAND ICED TEA", img: "/img/menu/long-island-iced-tea.png", details: "ロングアイランドアイスティー", volume: "CUP", price: "¥900" },
			{ name: "TEQUILA SUNRISE", img: "/img/menu/tequila-sunrise.png", details: "テキーラサンライズ", volume: "CUP", price: "¥900" },
			{ name: "TOMORROW", details: "トゥモロー", volume: "CUP", price: "¥1200" },
			{ name: "PERRY'S SPECIAL STYLE", details: "ペリーズスペシャルスタイル", volume: "CUP", price: "¥1200" },
			{ name: "GODFATHER", img: "/img/menu/godfather.png", details: "ゴッドファーザー", volume: "CUP", price: "¥1200" },
		],
	},
];

const CocktailsMenu = () => {
	return (
		<>
			<div id="cocktails">
				<h1 className="text-center mb-5 mt-5">Cocktails</h1>
				<div className="container">
					<div className="row justify-content-center">{cocktails.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
	ß;
};

export default CocktailsMenu;
