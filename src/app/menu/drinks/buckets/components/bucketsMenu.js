import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const buckets = [
	{
		items: [
			{ name: "WHISKY COLA BUCKET", width: "110px", img: "/img/menu/bucket-gin-tonic.png", details: "ウイスキーコーク", volume: "1L", price: "¥980" },
			{ name: "RUM COLA BUCKET", width: "110px", img: "/img/menu/bucket-rum-coke.png", details: "ラムコーク", volume: "1L", price: "¥980" },
			{ name: "GIN TONIC BUCKET", width: "110px", img: "/img/menu/bucket-gin-tonic.png", details: "ジントニックバケット", volume: "1L", price: "¥980" },
			{ name: "VODKA REDBULL BUCKET", width: "110px", img: "/img/menu/bucket-vodka-redbull.png", details: "レッドブルウォッカ", volume: "1L", price: "¥980" },
		],
	},
];

const BucketsMenu = () => {
	return (
		<>
			<div id="buckets">
				<h1 className="text-center mb-5 mt-5">Buckets - バケット</h1>
				<div className="container">
					<div className="row justify-content-center">{buckets.map((category, categoryIdx) => category.items.map((item, idx) => <MenuItemCard key={`${categoryIdx}-${idx}`} item={item} />))}</div>
				</div>
			</div>
		</>
	);
	ß;
};

export default BucketsMenu;
