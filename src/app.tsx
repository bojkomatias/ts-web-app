import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import "./index.css"
import { AdnLoader } from "./ui/loaders/Adn"

export default function App() {
	return (
		<Router
			root={(props) => (
				<Suspense fallback={<AdnLoader />}>{props.children}</Suspense>
			)}
		>
			<FileRoutes />
		</Router>
	)
}
