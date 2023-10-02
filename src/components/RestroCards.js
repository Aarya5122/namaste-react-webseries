import { CLOUDINARY_URL } from "../utils/constants";
import Button from "./Button";

function RestroCard({
	foodImageSource,
	name = "food-name",
	description = "food-description",
	hotel = "Aarya's Kitchen",
	price = "xxx",
	rating = "4.2",
	id = "0",
	itemOnClick,
}) {
	return (
		<div
			onClick={(e) => {
				e.preventDefault();
				itemOnClick({
					name,
					description,
					rating,
					price,
					foodImageSource,
					id,
				});
			}}
		>
			<img src={foodImageSource} alt="meal-image" />
			<p>{name}</p>
			<p>{hotel}</p>
			<p>{description}</p>
			<p>
				<span>
					{rating?.value
						? parseFloat(rating?.value).toPrecision(2)
						: ""}
				</span>{" "}
				<span>{price}</span>
			</p>
			<Button value="Add to cart" />
		</div>
	);
}

export default RestroCard;
