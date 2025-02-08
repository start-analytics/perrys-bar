import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const draftBeers = [
	{
		items: [
			{
				name: "ASAHI",
				details: "アサヒビール",
				img: "/img/menu/asahi.png",
				sizes: [
					{ volume: "400ml", price: "¥700" },
					{ volume: "1000ml", price: "¥1,800" },
				],
			},
			{
				name: "THE PREMIUM MALTS",
				details: "サントリー ザ プレミアムモルツ 生樽",
				img: "/img/menu/the-premium-malts.png",

				sizes: [
					{ volume: "400ml", price: "¥1,000" },
					{ volume: "1000ml", price: "¥2,000" },
				],
			},
		],
	},
];

const DraftBeerMenu = () => {
	return (
		<>
			<div id="draft-beer">
				<h1 className="text-center mb-5 mt-5">Draft Beer - ビール</h1>
				<div className="container">
					<div className="row justify-content-center">{draftBeers.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
	ß;
};

export default DraftBeerMenu;
