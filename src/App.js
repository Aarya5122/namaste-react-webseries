import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = ({ children }) => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
