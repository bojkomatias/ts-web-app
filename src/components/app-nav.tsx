import { Navbar, NavbarItem, NavbarSection } from "~/ui/navbar"

export function AppNav() {
	return (
		<Navbar>
			<NavbarSection>
				<AppNavItem href={"/"} name="Home" />
				<AppNavItem href={"/events"} name="Events" />
				<AppNavItem href={"/orders"} name="Orders" />
			</NavbarSection>
		</Navbar>
	)
}

const AppNavItem = ({ href, name }: { href: string; name: string }) => {
	return <NavbarItem href={href}>{name}</NavbarItem>
}
