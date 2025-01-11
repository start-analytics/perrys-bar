import logo from "../../assets/img/red-white-logo.png";
import "./header.css";

const Header = () => {
	return (
		<header id="header" className="header fixed-top">
			<div className="branding d-flex align-items-cente">
				<div className="container position-relative d-flex align-items-center justify-content-between">
					<a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
						<div className="d-flex">
							<img src={logo} className="logo-img margin-right-13" alt="logo" />
						</div>
					</a>
					<nav id="navmenu" className="navmenu">
						<ul>
							<li>
								<a href={window.location.pathname !== "/menu" ? "#home" : "/"} className="active">
									Home
								</a>
							</li>
							<li>
								<a href={window.location.pathname !== "/menu" ? "#discover" : "/"}>Discover</a>
							</li>
							<li>
								<a href={window.location.pathname !== "/menu" ? "#access" : "/"}>Access</a>
							</li>
							<li>
								<a href="/menu">Menu</a>
							</li>
						</ul>
						<a href="/menu" style={{ fontSize: "14px" }} className="mobile-nav-toggle d-xl-none">
							Menu
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
