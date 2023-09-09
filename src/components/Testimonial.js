function Testimonial({
	avatarSource = "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png",
	name = "user",
	review = "review",
}) {
	return (
		<div>
			<img src={avatarSource} alt="avatar" />
			<p>{name}</p>
			<p>{review}</p>
		</div>
	);
}

export default Testimonial;
