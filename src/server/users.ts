import { action, cache } from "@solidjs/router";

export const users = [
	{
		id: 3,
		name: "Matias Bojko",
		cuit: "20323140324",
	},
];

export const getUsers = cache(async () => {
	"use server";

	return users;
}, "users");

export const createUser = action(
	async ({
		name,
		cuit,
	}: {
		name: string;
		cuit: string;
	}) => {
		"use server";
		await new Promise((resolve) => setTimeout(resolve, 4000));
		users.push({
			name,
			cuit,
			id: 23,
		});
		console.log("user added");
	},
);
