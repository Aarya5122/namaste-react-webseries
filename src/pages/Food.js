import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

function Food() {
	const [food, setFood] = useState({});
	const params = useParams();

	console.log(food);

	useEffect(() => {
		let item = localStorage.getItem(params.foodId);
		setFood(JSON.parse(item));
	}, []);

	return (
		<div>
			<div>
				<img src={food.imageURL ?? ""} alt="Food image" />
			</div>
			<div>
				<p>{food.name}</p>
				<p>{food.description}</p>
				<p>* {food.rating}</p>
				<p>₹{food.price} /-</p>
				<Button value="Add to cart" />
			</div>
		</div>
	);
}

export default Food;
