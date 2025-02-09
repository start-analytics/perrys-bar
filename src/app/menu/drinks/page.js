import styles from "./drinks.module.css";
import Header from "@/components/Header/header";

const categories = [
	{ name: "Buckets", slug: "buckets", image: "/img/menu/buckets_bg.jpg" },
	{ name: "Beers", slug: "beers", image: "/img/menu/beers_bg.jpg" },
	{ name: "Cocktails & Mixed Drinks", slug: "cocktails", image: "/img/menu/cocktail-bg.jpg" },
	{ name: "Whisky", slug: "whisky", image: "/img/menu/whisky_bg.png" },
	{ name: "Sake and Soju", slug: "sake-soju", image: "/img/menu/sake_bg.jpg" },
	{ name: "Soft Drinks", slug: "soft-drinks", image: "/img/menu/soft-drinks_bg.jpg" },
	{ name: "Hard Liqueur", slug: "hard-liqueur", image: "/img/menu/liqueur_bg.jpg" },
	{ name: "Bottle Service", slug: "bottle-service", image: "/img/menu/bottle-service_bg.jpg" },
];

const navItems = [];

export default function Menu() {
	return (
		<>
			{" "}
			<Header navItems={navItems} />
			<div className="container mt-5 text-ligh min-vh-100 p-4">
				<div className="d-flex align-items-center justify-content-center neon-title mt-5 mb-4">Drinks Menu</div>
				<div className="row">
					{categories.map((category) => (
						<div key={category.slug} className="col-12 col-sm-6 col-md-4 mb-4">
							<a href={`/menu/drinks/${category.slug}`} className={styles.cardLink}>
								<div style={{ minHeight: "300px" }} className={`${styles.card} h-100 position-relative overflow-hidden rounded shadow-lg text-center bg-secondary text-white`}>
									<img src={category.image} alt={category.name} className="w-100 h-100 object-fit-cover opacity-50" />
									<div className="position-absolute top-50 start-50 translate-middle w-100 text-white fw-bold fs-4">{category.name}</div>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
