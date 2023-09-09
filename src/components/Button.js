function Button({ value = "Button Name", buttonClassName, action }) {
	return <button className={buttonClassName}>{value}</button>;
}

export default Button;
