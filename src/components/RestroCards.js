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
				src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${foodImageSource}`}
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
