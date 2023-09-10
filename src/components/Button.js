function Button({
	value = "Button Name",
	buttonClassName,
	action,
	setStates,
	states,
	staticData,
}) {
	function onClick(event) {
		event.preventDefault();
		action(states, setStates, staticData);
	}

	return (
		<button className={buttonClassName} onClick={onClick}>
			{value}
		</button>
	);
}

export default Button;
