import styles from "./whiskyMenu.module.css";
import MenuItemCard from "@/components/MenuItemCard/menuItemCard";

const whiskyData = [
	{
		id: 1,
		name: "角瓶",
		engName: "KAKUBIN",
		image: "/img/menu/kakubin.png",
		alc: "40%",
		price: "¥900",
		color: "Bright Gold With A Gentle Halo",
		aroma: "Caramel Pudding, Cardamom, Sweet Locust Blossom Honey, And The Fragrance Of Blooming Roses",
		taste: "Mild And Smooth, With A Hint Of Mint And Honey Sweetness",
		aftertaste: "Pure And Clear, With A Spicy Oak Aroma And A Slightly Bitter Sweetness",
	},
	{
		id: 2,
		name: "知多",
		engName: "THE CHITA WHISKY",
		image: "/img/menu/chita.png",
		alc: "43%",
		price: "¥1,300",
		color: "Bright Amber",
		smell: "Peach, Pineapple, Grapefruit, Lilac, Orange Sauce, Vanilla",
		taste: "Coconut Meat, Cranberries, Persimmons, Butter",
		aftertaste: "Ginger Candy, Cinnamon, With A Long-lasting Aftertaste",
	},
	{
		id: 3,
		name: "余市",
		engName: "NIKKA YOICHI",
		image: "/img/menu/nikka_yoichi.png",
		alc: "43%",
		price: "¥1,400",
		color: "Light Golden With A Hint Of Green Light",
		aroma: "Full Of Fresh Mint, Honeydew, And Cucumber",
		taste: "You Can Feel Japanese Grapefruit, Pink Grapefruit, Lemon, And Thyme",
		tailRhyme: "Fresh And Elegant, With A Thin Smoky Flavor",
	},
	{
		id: 4,
		name: "白州",
		engName: "HAKUSHU",
		image: "/img/menu/hakushu.png",
		alc: "43%",
		price: "¥1,400",
		color: "Amber",
		aroma: "Fruity Aroma, Creamy Sugar, Faintly Mixed With A Slight Peat Flavor",
		taste: "Sweet Blend Of Cream, Oil, And Vanilla, With A Light Salty Taste Of Sea Salt",
		tailRhyme: "Slight Smoky And Sea Salt Flavor, With Some Fruity Aftertaste",
	},
	{
		id: 5,
		name: "官城峡",
		engName: "MIYAGIKYO",
		image: "/img/menu/miyagikyo.png",
		alc: "45%",
		price: "¥1,400",
		color: "Amber",
		aroma: "The taste is vanilla, Earl Grey tea, persimmon cakes, and bitter chocolate",
		taste: "Smooth taste, with a hint of oak, vanilla, and black tea leaves, sweet and bitter flavors coexist",
		aftertaste: "The aftertaste is delicate and long-lasting, leaving a lasting fragrance on the palate",
	},
];

const whiskies = [
	{
		region: "ISLAY (アイレ島)",
		color: "#799159", // Adding color directly to the region
		description: "PEAT IS THE MAIN FEATURE OF AISAKIJIMA WHISKY MANY OF THEM USE LOCAL PEAT SMOKED MALT",
		items: [
			{ name: "BOWMORE 12 YEARS", img: "/img/menu/bowmore-bottle-12-year-old.png", details: "ボウモア12年", alc: "40%", volume: "30ml", price: "¥1,200" },
			{ name: "ARDBEG WHISKY 10 YEARS", img: "/img/menu/ardbeg-10-years.png", details: "アートヘッグ10年", alc: "46%", volume: "30ml", price: "¥1,200" },
			{ name: "LAPHROAIG LORE", img: "/img/menu/laphroaig-lore.png", details: "ラフロイグロレ", alc: "48%", volume: "30ml", price: "¥1,300" },
		],
	},
	{
		region: "ISLANDS (アイランド)",
		color: "#bead6d", // Color for ISLANDS アイランド
		description: "A WET SALTY SEA BREEZE A SWAMP WITH FRAGRANT FLOWERS AND MOSS",
		items: [
			{ name: "TALISKER 10 YEARS", img: "/img/menu/talisker-10-years.png", details: "タリスカー10年", alc: "45.8%", volume: "30ml", price: "¥1,200" },
			{ name: "TALISKER STORM", img: "/img/menu/talisker-storm.png", details: "タリスカーストーム", alc: "45.8%", volume: "30ml", price: "¥1,300" },
			{ name: "HIGHLAND PARK CASK STRENGTH", img: "/img/menu/highland-park-cask-strength.png", details: "ハイランドパークNO3", alc: "64.1%", volume: "30ml", price: "¥1,800" },
		],
	},
	{
		region: "HIGHLAND (ハイランド)",
		color: "#847050", // Color for HIGHLAND ハイランド
		description: "THE SOUTHERN REGION HAS A LIGHT AND FRUITY FLAVOR, WHILE THE WESTERN REGION COMBINES FRUITY AND SPICY FLAVORS",
		items: [
			{ name: "THE SINGLETON 12 YEARS", img: "/img/menu/singleton-12-years.png", details: "シングルトン12年", alc: "40%", volume: "30ml", price: "¥1,100" },
			{ name: "GLENMORANGIE SHERRY CASK 12 YEARS", img: "/img/menu/glenmorangie-sherry-cask-12-years.png", details: "グレンモーレンジィ12年", alc: "43%", volume: "30ml", price: "¥1,200" },
		],
	},
	{
		region: "LOWLANDS (ローランド)",
		color: "#715329",
		description: "A SWEET MILD TEXTURE AND THE SMELL OF HERBS AND PRETTY CLEAR FLOWERS",
		items: [{ name: "GLENFIDDICH 12 YEARS", img: "/img/menu/glenfiddich-12-years.png", details: "クレンフィディック12年", alc: "40%", volume: "30ml", price: "¥1,100" }],
	},
	{
		region: "SPEYSIDE (スペイサイド)",
		color: "#be8aa7", // Color for SPEYSIDE スペイサイド
		description: "THE QUALITY OF BEING MILD AND MILD AND HIERARCHICALLY RICH AND IT IS RICH IN FRUIT AND FLOWERS",
		items: [
			{ name: "GLENKINCHIE 12 YEARS", img: "/img/menu/glenkinchie-12-years.png", details: "クレンギングー12年", alc: "43%", volume: "30ml", price: "¥1,100" },
			{ name: "THE GLENLIVET 12 YEARS", img: "/img/menu/the-glenlivet-12-years.png", details: "ザ グレンベット", alc: "40%", volume: "30ml", price: "¥1,100" },
			{ name: "THE BALVENIE 12 YEARS", img: "/img/menu/the-balvenie-12-years.png", details: "ヴァルゲミニー12年", alc: "40%", volume: "30ml", price: "¥1,100" },
			{ name: "THE CLENALLACHIE 12 YEARS", img: "/img/menu/the-clenallachie-12-years.png", details: "クレンプラヒー12年", alc: "40%", volume: "30ml", price: "¥1,100" },
		],
	},
	{
		region: "OTHER REGIONS (その他)",
		color: "#666666", // Color for OTHER REGIONS その他
		items: [
			{ name: "TEACHERS HIGHLAND", img: "/img/menu/teachers-highland.png", details: "ティーチャーズハイランドグリーム", alc: "40%", volume: "30ml", price: "¥900" },
			{ name: "MAKER'S MARK", img: "/img/menu/markers-mark.png", details: "メーカーズヤーク", alc: "40%", volume: "30ml", price: "¥900" },
			{ name: "JAMESON IRISH WHISKY", img: "/img/menu/jameson-irish-whisky.png", details: "ジェムソン", alc: "40%", volume: "30ml", price: "¥900" },
			{ name: "JIM BEAM BOURBON", img: "/img/menu/jim-beam-bourbon.png", details: "ジムビーム", alc: "40%", volume: "30ml", price: "¥900" },
			{ name: "Jack Daniels", img: "/img/menu/jack-daniels.png", details: "ジャックダニエル", alc: "40%", volume: "30ml", price: "¥900" },
			{ name: "CHIVAS 12 YEARS", img: "/img/menu/chivas-12-years.png", details: "シーバスリーガル12年", alc: "40%", volume: "30ml", price: "¥900" },
			{ name: "JOHNNIE WALKER BLACK LABEL", img: "/img/menu/johnnie-walker-black-label.png", details: "ジョニーウォーカーブラック", alc: "40%", volume: "30ml", price: "¥900" },
			{ name: "JOHNNIE WALKER BLUE LABEL", img: "/img/menu/johnnie-walker-bllue-label.png", details: "ジョニーウォーカーブルー", alc: "40%", volume: "30ml", price: "¥900" },
		],
	},
];

const WhiskyMenu = () => {
	return (
		<>
			<div id="japanese" className={`${styles.darkMode} container py-5`}>
				<h1 className="text-center mb-5">JAPANESE WHISKY</h1>
				<div className="row">
					{whiskyData.map((whisky) => (
						<div key={whisky.id} className={`${styles.menuContainer} col-12 mb-4`}>
							<div className="d-flex align-items-center">
								<div className={styles.imageContainer}>
									<img src={whisky.image} className={styles.responsiveImage} alt={whisky.name} />
								</div>
								<div className="flex-grow-1 ms-3">
									<div className="d-flex justify-content-between">
										<div>
											<h3 className="card-title mb-2">{whisky.name}</h3>
											<h5 style={{ color: "#cacaca" }}>{whisky.engName}</h5>{" "}
										</div>

										<strong>
											Alc. {whisky.alc} 30ml <span style={{ fontSize: "25px", fontWeight: "700" }}>{whisky.price}</span>
										</strong>
									</div>

									<p className="card-text" style={{ color: "#cacaca", fontWeight: "300" }}>
										<br />
										<strong className="text-white">Color:</strong> {whisky.color}
										<br />
										{whisky.aroma && (
											<>
												<strong className="text-white">Aroma:</strong> {whisky.aroma}
												<br />
											</>
										)}
										{whisky.smell && (
											<>
												<strong className="text-white">Smell:</strong> {whisky.smell}
												<br />
											</>
										)}
										<strong className="text-white">Taste:</strong> {whisky.taste}
										<br />
										{whisky.aftertaste && (
											<>
												<strong className="text-white">Aftertaste:</strong> {whisky.aftertaste}
												<br />
											</>
										)}
										{whisky.tailRhyme && (
											<>
												<strong className="text-white">Tail Rhyme:</strong> {whisky.tailRhyme}
												<br />
											</>
										)}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<section id="scottish">
				<h1 className="text-center mb-5">Scottish WHISKY</h1>

				<div className="w-100 mb-2 container d-flex justify-content-center ">
					<img className="img-fluid" style={{ maxHeight: "450px", borderRadius: "20px" }} src="/img/menu/scotland.png" />
				</div>
				<div className={`${styles.darkMode} mt-2 mb-2`}>
					{whiskies.map((section, index) => {
						// Determine the background color based on the index (alternating red and black)
						const bgColor = index % 4 === 0 ? "transparent" : "transparent"; // Red for even index, Black for odd index

						return (
							<div key={index} className="pb-5 pt-5 " style={{ background: bgColor }}>
								<h2
									className={`${styles.cardTitle} mb-3 `}
									style={{
										color: `rgba(${section.color}, 2)`,
										textShadow: `1px 1px 1px ${section.color},
                        1px 2px 1px ${section.color},
                        1px 3px 1px ${section.color},
                        1px 4px 1px ${section.color},
                        1px 5px 1px ${section.color},
                        1px 5px 1px ${section.color},
                    1px 18px 6px rgba(16,16,16,0.4),
                    1px 22px 10px rgba(16,16,16,0.2),
                    1px 25px 35px rgba(16,16,16,0.2),
                    1px 30px 60px rgba(16,16,16,0`,
									}}
								>
									{section.region}
								</h2>
								{section.description && (
									<div className="w-100 d-flex justify-content-center">
										<p
											style={{
												color: "white",
												maxWidth: "600px",
												textShadow: `1px 1px 1px ${section.color},
                        1px 2px 1px ${section.color},
                        1px 3px 1px ${section.color},
                    1px 18px 6px rgba(16,16,16,0.4),
                    1px 22px 10px rgba(16,16,16,0.2),
                    1px 25px 35px rgba(16,16,16,0.2),
                    1px 30px 60px rgba(16,16,16,0`,
											}}
											className={`${styles.cardTitle}`}
										>
											{section.description}
										</p>
									</div>
								)}
								<div className="mb-5"></div>
								<div className="container">
									<div className="row justify-content-center">
										{section.items.map((item, idx) => (
											<MenuItemCard key={idx} item={item} />
										))}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default WhiskyMenu;
