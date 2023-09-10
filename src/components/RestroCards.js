import { CLOUDINARY_URL } from "../utils/constants";
import Button from "./Button";

function RestroCard({
	foodImageSource,
	name = "food-name",
	description = "food-description",
	hotel = "Aarya's Kitchen",
	price = "xxx",
	rating = "4.2",
}) {
	return (
		<div>
			<img
				src={`${CLOUDINARY_URL}/${foodImageSource}`}
				alt="meal-image"
			/>
			<p>{name}</p>
			<p>{hotel}</p>
			<p>{description}</p>
			<p>
				<span>{rating}</span> <span>{price}</span>
			</p>
			<Button value="Add to cart" />
		</div>
	);
}

export default RestroCard;
