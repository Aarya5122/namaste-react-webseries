import Button from "../components/Button";
import Header from "../components/Header";
import Description from "../components/Description";
import DescriptionImage from "../components/DescriptionImage";
import Feature from "../components/Feature";
import RestroCard from "../components/RestroCards";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

import foods from "../utils/mockData";
import Menu from "./Menu";

const restrocards = foods.slice(0, 4);

function Home() {
	return (
		<>
			<Header />
			<section>
				<div>
					<p>Healthy food for busy people</p>
					<p>
						Imagine devouring delicious, healthy meals daily without
						so much as lifting a pot.
					</p>
					<Button value="HOW IT WORKS" />
				</div>
			</section>
			<section>
				<DescriptionImage />
				<Description />
			</section>
			<section>
				<DescriptionImage />
				<Description />
			</section>
			<section>
				<Feature />
				<Feature />
				<Feature />
			</section>
			<section>
				<div>
					<p>Try our best dishes</p>
					<Button value="See All" />
				</div>
				<div>
					{restrocards.map(
						({
							id,
							name,
							imageId,
							description,
							ratings,
							price,
							cuisines,
						}) => (
							<RestroCard
								key={id}
								name={name}
								description={description}
								price={price / 100}
								rating={ratings?.aggregatedRating?.rating}
								foodImageSource={imageId}
							/>
						)
					)}
				</div>
			</section>
			<section>
				<p>
					Autopilot your diet, and start <span>feeling amazing.</span>
				</p>
				<Button value="HOW IT WORKS" />
			</section>
			<section>
				<p>Stories from clients</p>
				<div>
					<Testimonial />
					<Testimonial />
					<Testimonial />
					<Testimonial />
				</div>
			</section>
			<Menu menuItems={foods} />
			<Footer />
		</>
	);
}

export default Home;
