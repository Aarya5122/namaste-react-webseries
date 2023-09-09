function DescriptionImage({ backgroundImageSource, mealImageSource }) {
	return (
		<>
			<img src={backgroundImageSource} alt="background-image" />
			<img src={mealImageSource} alt="meal-image" />
		</>
	);
}

export default DescriptionImage;
