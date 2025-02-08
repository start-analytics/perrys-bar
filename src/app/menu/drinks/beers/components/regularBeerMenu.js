import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const beers = [
	{
		items: [
			{ name: "BUDWEISER", img: "/img/menu/budweiser.png", details: "バドワイザー", volume: "330ml", price: "¥700" },
			{ name: "CORONA", img: "/img/menu/corona.png", details: "コロナ", volume: "330ml", price: "¥800" },
			{ name: "HEINEKEN", img: "/img/menu/heineken.png", details: "ハイネケン", volume: "330ml", price: "¥800" },
			{ name: "SAPPORO BLACK", img: "/img/menu/sapporo-black.png", details: "札幌黒ラベル", volume: "334ml", price: "¥800" },
			{ name: "CARLSBERG LIGHT LAGER", img: "/img/menu/carlsberg-light-lager.png", details: "カールスバーグ", volume: "330ml", price: "¥800" },
			{ name: "HOEGAARDEN WITBIER", img: "/img/menu/hoegaarden-witbier.png", details: "ヒューガルデン (オリジナル/バラ本)", volume: "330ml", price: "¥900" },
			{ name: "GOOSE IPA", img: "/img/menu/goose-ipa.png", details: "グースアイランド", volume: "335ml", price: "¥1,100" },
			{ name: "ERDINGER WHITE/BLACK", img: "/img/menu/erdinger-white-black.png", details: "エルディンガーブラックホワイト", volume: "300ml", price: "¥1,100" },
			{ name: "STOUT 8", img: "/img/menu/stout-8.png", details: "ロストコースト8ボール", volume: "335ml", price: "¥1,600" },
		],
	},
];

const RegularBeerMenu = () => {
	return (
		<>
			<div id="regular-beer">
				<h1 className="text-center mb-5 mt-5">Regular Beer - ビール</h1>
				<div className="container">
					<div className="row justify-content-center">{beers.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
};

export default RegularBeerMenu;
