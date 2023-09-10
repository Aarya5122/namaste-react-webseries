import { useState } from "react";
import RestroCard from "../components/RestroCards";
import Button from "../components/Button";

function Menu({ menuItems }) {
	const [menu, setMenu] = useState(menuItems);
	const [filterApplied, setFilterApplied] = useState(false);

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
							? staticData.menuItems
							: states.menu.filter(
									(item) =>
										+item?.ratings?.aggregatedRating
											?.rating > 4
							  );
						setStates.setMenu(menuValue);
					}}
				/>
			</section>
			<section>
				{menu.map(
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
			</section>
		</div>
	);
}

export default Menu;
