import MenuItemCard from "@/components/MenuItemCard/menuItemCard";
const redWine = [
	{
		items: [
			{ name: "GRACE KOSHU", details: "グレイス甲州", volume: "750ml", price: "¥6,500" },
			{ name: "KYAMBEL ARL", details: "キャンベルアーリー", alcohol: "12%", volume: "750ml", price: "¥7,200" },
			{ name: "PENFOLDS BIN8", details: "ビン 8 シリーズ カベルネ 2018", alcohol: "12.5%", volume: "750ml", price: "¥1,100" },
			{ name: "CLOUDY BAY", details: "クラウディベイ白ワイン (王嘉爾推薦)", alcohol: "13.5%", volume: "750ml", price: "¥1,500" },
		],
	},
];

const RedWineMenu = () => {
	return (
		<>
			<div id="red-wine">
				<h1 className="text-center mb-5 mt-5">Red Wine - ワイン</h1>
				<div className="container">
					<div className="row justify-content-center">{redWine.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
};

export default RedWineMenu;
