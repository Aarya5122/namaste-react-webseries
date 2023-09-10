import { INSTAGRAM, TWITTER, FACEBOOK } from "../utils/constants";

function Footer() {
	return (
		<footer>
			<img src="" alt="" />
			<div>
				<img src={FACEBOOK} alt="Facebook" />
				<img src={INSTAGRAM} alt="Instagram" />
				<img src={TWITTER} alt="Twitter" />
			</div>
		</footer>
	);
}

export default Footer;
