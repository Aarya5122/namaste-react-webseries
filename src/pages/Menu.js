import { useEffect, useState } from "react";
import RestroCard from "../components/RestroCards";
import Button from "../components/Button";

function Menu({ menuItems }) {
	const [menu, setMenu] = useState(menuItems);
	const [search, setSearch] = useState("");
	const [filterApplied, setFilterApplied] = useState(false);

	useEffect(() => setMenu(menuItems), [menuItems]);

	function searchOnChange(e) {
		e.preventDefault();
		setSearch(e.target.value);
	}

	return (
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
					states={{ menu, search }}
					setStates={{ setMenu }}
					staticData={{ menuItems }}
					action={(states, setStates, staticData) => {
						!states.search
							? setStates.setMenu(staticData.menuItems)
							: setStates.setMenu(
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
