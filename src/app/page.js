"use client";

import SideMenuNav from "@/app/components/side-menu-nav";
import { Provider } from "react-redux";
import { store } from "@/app/lib/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SideMenuNav />
      </main>
    </Provider>
  );
}
