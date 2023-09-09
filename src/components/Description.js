import Button from "./Button";

function Description({
	title = "description-title",
	heading = "description-heading",
	description = "description",
	buttonValue,
	buttonClassName,
}) {
	return (
		<div>
			<p>{title}</p>
			<p>{heading}</p>
			<p>{description}</p>
			<Button value={buttonValue} buttonClassName={buttonClassName} />
		</div>
	);
}

export default Description;
