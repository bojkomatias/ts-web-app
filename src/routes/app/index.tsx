import { Badge, BadgeButton } from "~/ui/badge"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/ui/table"

type User = { name: string; email: string; access: string }
const users: User[] = [
	{ name: "Matute", email: "bojko.matias@gmail.com", access: "admin" },
	{ name: "Matute", email: "bojko.matias@gmail.com", access: "admin" },
	{ name: "Matute", email: "bojko.matias@gmail.com", access: "admin" },
	{ name: "Matute", email: "bojko.matias@gmail.com", access: "admin" },
	{ name: "Matute", email: "bojko.matias@gmail.com", access: "admin" },
	{ name: "Matute", email: "bojko.matias@gmail.com", access: "admin" },
]

export default function AppPage() {
	return (
		<div>
			<BadgeButton color="amber">Hola</BadgeButton>
			<Table
				grid
				class="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]"
			>
				<TableHead>
					<TableRow>
						<TableHeader>Name</TableHeader>
						<TableHeader>Email</TableHeader>
						<TableHeader>Role</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<TableRow>
							<TableCell class="font-medium">{user.name}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell class="text-zinc-500">{user.access}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
