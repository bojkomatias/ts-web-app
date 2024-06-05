import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import "./index.css"

export default function App() {
	return (
		<Router
			root={(props) => (
				<Suspense fallback={"Loading ..."}>{props.children}</Suspense>
			)}
		>
			<FileRoutes />
		</Router>
	)
}
