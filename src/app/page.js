"use client";

import OrderWidgetItem from "@/app/dashboard/components/order/order-widget-item";
import SideMenuNav from "@/app/components/side-menu-nav";
import ThemeSwitchButton from "@/app/components/theme-switch-button";
import { Provider } from "react-redux";
import { store } from "@/app/lib/store";
import "./i18n";
import LanguageSwitchButton from "@/app/components/language-switch-button";

export default function Home() {
  let items = [
    {
      icon: "assets/cards/unpaid.png",
      label: "Zamówienia nieopłacone",
      percentage: "67%",
      text: "33 z 55 zamówień",
    },
    {
      icon: "assets/cards/sent.png",
      label: "Zamówienia niewysłane",
      percentage: "20%",
      text: "10 z 50 zamówień",
    },
    {
      icon: "assets/cards/returned.png",
      label: "Zamówienia zwrócone",
      percentage: "6%",
      text: "3 z 50 zamówień",
    },
  ];
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SideMenuNav />
        <LanguageSwitchButton />
        <ThemeSwitchButton />
        <div className="flex flex-row gap-x-4">
          {items.map((item) => (
            <OrderWidgetItem {...item} />
          ))}
        </div>
      </main>
    </Provider>
  );
}
