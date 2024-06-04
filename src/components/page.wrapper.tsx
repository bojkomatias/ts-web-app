import type { JSX } from "solid-js";

type PageWrapperProps = {
  title: string;
  actions: JSX.Element;
  children: JSX.Element;
};
export function PageWrapper(props: PageWrapperProps) {
  return (
    <div class="bg-card ring-line h-screen overflow-hidden rounded-lg ring-1 ring-inset sm:h-[calc(100vh-0.5rem)]">
      <div class="border-line inline-flex w-full justify-between gap-3 border-b p-3">
        <h1 class="pl-4 text-lg font-bold capitalize">{props.title}</h1>
        <div class="flex gap-2">{props.actions}</div>
      </div>
      {props.children}
    </div>
  );
}
