import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const vodkas = [
	{
		items: [
			{ name: "ABSOLUT VODKA", img: "/img/menu/absolut-vodka.png", details: "アブソルート", alc: "40%", volume: "30ml", price: "¥800" },
			{ name: "X-RATED VODKA", img: "/img/menu/x-rated-vodka.png", details: "エックスレイテッド", alc: "17%", volume: "30ml", price: "¥800" },
			{ name: "SMIRNOFF VODKA", img: "/img/menu/smirnoff.png", details: "スミノフ", alc: "40%", volume: "30ml", price: "¥800" },
			{ name: "GREY GOOSE", img: "/img/menu/grey-goose.png", details: "グレイグース", alc: "40%", volume: "30ml", price: "¥900" },
			{ name: "BELVEDERE VODKA", img: "/img/menu/belvedere.png", details: "ベルヴェデール ウオツカ", alc: "40%", volume: "30ml", price: "¥900" },
		],
	},
];

const VodkaMenu = () => {
	return (
		<>
			<div id="vodka">
				<h1 className="text-center mb-5 mt-5">Vodka - ウォッカ</h1>
				<div className="container">
					<div className="row justify-content-center">{vodkas.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
};

export default VodkaMenu;
