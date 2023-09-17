import { useEffect, useState } from "react";
import RestroCard from "../components/RestroCards";
import Button from "../components/Button";

function Menu({ menuItems }) {
	const [menu, setMenu] = useState(menuItems);
	const [filterApplied, setFilterApplied] = useState(false);

	useEffect(() => setMenu(menuItems), [menuItems]);
	return (
		<div>
			<section>
				<Button
					value={!filterApplied ? "4 Stars" : "Cancel"}
					states={{ menu, filterApplied }}
					setStates={{ setMenu, setFilterApplied }}
					staticData={filterApplied ? { menuItems } : undefined}
					action={(states, setStates, staticData) => {
						setStates?.setFilterApplied(!states.filterApplied);
						const menuValue = filterApplied
							? menuItems
							: states.menu.filter((item) => {
									return (
										+parseFloat(
											item?.item?.rating?.value
										).toPrecision(2) > 4.0
									);
							  });
						setStates.setMenu(menuValue);
					}}
				/>
			</section>
			<section>
				{"4star"}
				{menu.map(({ item }) => {
					return (
						<RestroCard
							key={item?.id}
							name={item?.name}
							description={item?.desc}
							price={item?.price}
							rating={item?.rating}
							foodImageSource={item?.item_image_thumb_url}
						/>
					);
				})}
			</section>
		</div>
	);
}

export default Menu;
