import HeroMenu from "@/components/HeroMenu/heroMenu";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import SoftDrinksMenu from "./components/softDrinksMenu";

const navItems = [];

const Cocktails = () => {
	return (
		<>
			<Header navItems={navItems} />
			<HeroMenu title="Soft Drinks" img="/img/menu/soft-drinks_bg.jpg" />
			<SoftDrinksMenu />
			<div className="d-flex justify-content-center mt-4">
				<p style={{ maxWidth: "600px", textAlign: "center" }}>✲全てのメニュー➕100円で以下のドリンク (200ml) を割ることができます コーラ/スプライト/ソーダ（中または強）/カルピス/トニックウォーター ジンジャーエール / ウーロン茶/緑茶</p>
			</div>
			<Footer />
		</>
	);
};

export default Cocktails;
