import styles from "./menuCardItem.module.css";

const MenuItemCard = ({ item }) => {
	return (
		<div className="col-md-4 mb-3">
			<div className={`${styles.menuContainer} card h-100`}>
				<div className="card-body">
					<div className="d-flex align-items-center h-100">
						{item.img && <img style={{ height: "140px", width: item.width ? `${item.width}px` : "90px" }} className="img-fluid px-3" src={item.img} alt={item.name} />}
						<div className="w-100">
							<h5>{item.name}</h5>
							{item.details && <p className={styles.cardText}>{item.details}</p>}
							{item.alcohol && <p className={styles.cardText}>Alc. {item.alcohol}</p>}
							{Array.isArray(item.volume) && Array.isArray(item.price) ? (
								item.volume.map((vol, index) => (
									<p key={index} className={`${styles.cardText} d-flex justify-content-between align-items-center`}>
										<span>{vol}</span>
										<span style={{ fontSize: "25px", fontWeight: "700" }}>{item.price[index]}</span>
									</p>
								))
							) : (
								<p className={`${styles.cardText} d-flex justify-content-between align-items-center`}>
									<span>{item.volume}</span>
									<span style={{ fontSize: "25px", fontWeight: "700" }}>{item.price}</span>
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuItemCard;
