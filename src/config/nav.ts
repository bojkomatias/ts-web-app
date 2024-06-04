import { Calculator, LayoutDashboard, UserSquare, Plus } from "lucide-solid";
import type { JSX } from "solid-js";

type Navigation = {
	href: string;
	text: string;
	icon: (props: JSX.IntrinsicElements["svg"]) => JSX.Element;
};

export const navigation: Navigation[] = [
	{
		href: "/",
		text: "Dashboard",
		icon: LayoutDashboard,
	},
	{
		href: "/calculator",
		text: "Calculator",
		icon: Calculator,
	},
	{
		href: "/teams",
		text: "Teams",
		icon: UserSquare,
	},
];
