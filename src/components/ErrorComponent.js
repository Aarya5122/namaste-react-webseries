import { useRouteError } from "react-router-dom";

function ErrorComponent() {
	const routeError = useRouteError();
	console.log(routeError);
	return (
		<div>
			<p>Oops! Something went wrong</p>
			<p>Please shoot us an email, Our team will look into it.</p>
			<p>Internal Error: {routeError.internal ? "True" : "False"}</p>
			<p>
				{routeError.status} - {routeError.statusText}
			</p>
		</div>
	);
}

export default ErrorComponent;
