import { type RouteSectionProps, useLocation } from "@solidjs/router";
import {
  HomeIcon,
  InboxIcon,
  KeyRoundIcon,
  MessageCircleQuestionIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-solid";
import { For, Show, createMemo } from "solid-js";
import { UserDropdown } from "~/modules/profile/user-dropdown";
import {
  Breadcrumbs,
  BreadcrumbsLink,
  BreadcrumbsSeparator,
} from "~/ui/breadcrumbs";
import { Divider } from "~/ui/divider";
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from "~/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "~/ui/sidebar";
import { SidebarLayout } from "~/ui/sidebar-layout";

export default function AppLayout(props: RouteSectionProps) {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="#" aria-label="Search">
              <SearchIcon data-slot="icon" />
            </NavbarItem>
            <NavbarItem href="#" aria-label="Inbox">
              <InboxIcon data-slot="icon" />
            </NavbarItem>
            <UserDropdown avatarOnly />
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader class="max-lg:hidden">
            <UserDropdown />
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="#">
                <SearchIcon data-slot="icon" />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="#">
                <InboxIcon data-slot="icon" />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/app">
                <HomeIcon data-slot="icon" />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/app/users">
                <UsersIcon data-slot="icon" />
                <SidebarLabel>Users</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/app/role-permissions">
                <ShieldCheckIcon data-slot="icon" />
                <SidebarLabel>Role Permissions</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/app/scopes">
                <KeyRoundIcon data-slot="icon" />
                <SidebarLabel>Actions</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support">
                <MessageCircleQuestionIcon data-slot="icon" />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <SparklesIcon data-slot="icon" />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      <AppBreadcrumbs />
      {props.children}
    </SidebarLayout>
  );
}

function AppBreadcrumbs() {
  const location = useLocation();

  const segments = createMemo(() => location.pathname.split("/").slice(1));

  return (
    <>
      <Breadcrumbs>
        <Show when={segments().length === 1}>
          <BreadcrumbsLink>{segments()[0]}</BreadcrumbsLink>
        </Show>
        <Show when={segments().length >= 2}>
          <For each={segments().slice(0, segments().length - 1)}>
            {(segment, index) => (
              <>
                <BreadcrumbsLink
                  href={`/${segments()
                    .slice(0, index() - segments().length + 1)
                    .join("/")}`}
                >
                  {segment}
                </BreadcrumbsLink>
                <BreadcrumbsSeparator />
              </>
            )}
          </For>
          <BreadcrumbsLink>{segments().at(-1)}</BreadcrumbsLink>
        </Show>
      </Breadcrumbs>
      <Divider soft />
    </>
  );
}
