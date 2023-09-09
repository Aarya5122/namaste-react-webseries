function Feature({
	featureImageSource,
	heading = "feature-heading",
	description = "freature-description",
}) {
	return (
		<div>
			<img src={featureImageSource} alt="feature-image" />
			<p>{heading}</p>
			<p>{description}</p>
		</div>
	);
}

export default Feature;
