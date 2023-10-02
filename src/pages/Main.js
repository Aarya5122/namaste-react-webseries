import Button from "../components/Button";
import Description from "../components/Description";
import DescriptionImage from "../components/DescriptionImage";
import Feature from "../components/Feature";
import RestroCard from "../components/RestroCards";
import Testimonial from "../components/Testimonial";

import Menu from "./Menu";
import { useEffect, useState } from "react";
import RestrocardShimmer from "../components/RestrocardShimmer";

function Main() {
	const [foods, setFoods] = useState([]);
	const [restrocards, setRestrocards] = useState([]);

	async function fetchFood() {
		let food = await fetch(
			"https://www.zomato.com/webroutes/getPage?page_url=/bangalore/meghana-foods-residency-road/order&location=&isMobile=0"
		);
		food = await food.json();
		setFoods([
			...food?.page_data?.order?.menuList?.menus
				?.map((menuObj) => {
					let categoryFoods = menuObj?.menu?.categories?.map(
						(categoryObj) => {
							const items = categoryObj?.category?.items;
							return items;
						}
					);
					categoryFoods = categoryFoods?.reduce(
						(accumulatorArray, itemArray) => {
							return [...accumulatorArray, ...itemArray];
						},
						[]
					);
					return categoryFoods;
				})
				?.reduce((accumulatorArray, menuItems) => {
					accumulatorArray.push(...menuItems);
					return accumulatorArray;
				}, []),
		]);
	}

	useEffect(() => {
		fetchFood();
	}, []);

	useEffect(() => {
		setRestrocards(foods.slice(0, 4));
	}, [foods]);

	return (
		<>
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
					{!restrocards.length ? (
						<>
							<RestrocardShimmer />
							<RestrocardShimmer />
							<RestrocardShimmer />
							<RestrocardShimmer />
						</>
					) : (
						restrocards?.slice(0, 4)?.map(({ item }) => {
							return (
								<RestroCard
									key={item.id}
									name={item.name}
									description={item.desc}
									price={item.price}
									rating={item.rating}
									foodImageSource={item.item_image_thumb_url}
								/>
							);
						})
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
		</>
	);
}

export default Main;
