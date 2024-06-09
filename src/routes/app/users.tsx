import { createQuery, useQueryClient } from "@tanstack/solid-query"
import { Match, Switch } from "solid-js"
import { getUsers } from "~/db/user/queries/get-users"
import UsersTable from "~/modules/users/users.table"
import { Divider } from "~/ui/divider"
import { Heading } from "~/ui/heading"

export const route = {
	load: () => {
		const queryClient = useQueryClient()

		queryClient.prefetchQuery({
			queryKey: ["users"],
			queryFn: getUsers,
			gcTime: 15000,
		})
	},
}

export default function Users() {
	const query = createQuery(() => ({
		queryKey: ["users"],
		queryFn: getUsers,
	}))

	return (
		<>
			<Heading class="mx-8 mt-2">Users</Heading>
			<Divider />
			<Switch>
				<Match when={query.isPending}>
					<p>Loading...</p>
				</Match>
				<Match when={query.isError}>
					<p>Error: {query.error?.message}</p>
				</Match>
				<Match when={query.isSuccess}>
					{query.data && <UsersTable users={query.data} />}
				</Match>
			</Switch>
		</>
	)
}
