import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query"
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools"
import { Suspense } from "solid-js"
import { AdnLoader } from "./ui/loaders/Adn"
import "./index.css"

export default function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				staleTime: 5000,
			},
		},
	})

	return (
		<QueryClientProvider client={queryClient}>
			<SolidQueryDevtools />
			<Router
				root={(props) => (
					<Suspense fallback={<AdnLoader />}>{props.children}</Suspense>
				)}
			>
				<FileRoutes />
			</Router>
		</QueryClientProvider>
	)
}
