import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RestroCard from "../components/RestroCards";
import Button from "../components/Button";

function Menu() {
	const [menuItems, setMenuItems] = useState([]);
	const [foods, setFoods] = useState(menuItems);
	const [search, setSearch] = useState("");
	const [filterApplied, setFilterApplied] = useState(false);
	const navigate = useNavigate();

	async function fetchFood() {
		let food = await fetch(
			"https://www.zomato.com/webroutes/getPage?page_url=/bangalore/meghana-foods-residency-road/order&location=&isMobile=0"
		);
		food = await food.json();
		const items = [
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
		];
		setMenuItems(items);
		setFoods(items);
	}

	console.log(foods.length);
	console.log(menuItems.length);

	useEffect(() => {
		fetchFood();
	}, []);

	function searchOnChange(e) {
		e.preventDefault();
		setSearch(e.target.value);
	}

	function itemOnClick(data) {
		localStorage.setItem(
			data.id,
			JSON.stringify({
				name: data.name,
				price: data.price,
				description: data.description,
				rating: data?.rating?.value
					? parseFloat(data.rating?.value).toPrecision(2)
					: "",
				imageURL: data.foodImageSource,
			})
		);
		navigate(`/menu/${data.id}`);
	}

	return foods?.length ? (
		<div>
			<section>
				<input
					type="text"
					name="search"
					id="search"
					onChange={searchOnChange}
					value={search}
				/>
				<Button
					value="search"
					states={{ foods, search }}
					setStates={{ setFoods }}
					staticData={{ menuItems }}
					action={(states, setStates, staticData) => {
						!states.search
							? setStates.setFoods(staticData.menuItems)
							: setStates.setFoods(
									menuItems?.filter((item) => {
										return item?.item?.name
											?.toLowerCase()
											?.includes(
												states.search?.toLowerCase()
											);
									})
							  );
					}}
				/>
				<Button
					value={!filterApplied ? "4 Stars" : "Cancel"}
					states={{ foods, filterApplied }}
					setStates={{ setFoods, setFilterApplied }}
					staticData={filterApplied ? { menuItems } : undefined}
					action={(states, setStates, staticData) => {
						setStates?.setFilterApplied(!states.filterApplied);
						const menuValue = filterApplied
							? menuItems
							: states.foods.filter((item) => {
									return (
										+parseFloat(
											item?.item?.rating?.value
										).toPrecision(2) > 4.0
									);
							  });
						setStates.setFoods(menuValue);
					}}
				/>
			</section>
			<section>
				{foods.map(({ item }) => {
					return (
						<RestroCard
							key={item?.id}
							id={item?.id}
							name={item?.name}
							description={item?.desc}
							price={item?.price}
							rating={item?.rating}
							foodImageSource={item?.item_image_thumb_url}
							itemOnClick={itemOnClick}
						/>
					);
				})}
			</section>
		</div>
	) : (
		<p>Loading</p>
	);
}

export default Menu;
