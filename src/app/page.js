"use client";

import OrderWidgetItem from "@/app/dashboard/components/order/order-widget-item";
import SideMenuNav from "@/app/components/side-menu-nav";
import ThemeSwitchButton from "@/app/components/theme-switch-button";
import { Provider } from "react-redux";
import { store } from "@/app/lib/store";
import "./i18n";
import LanguageSwitchButton from "@/app/components/language-switch-button";
import OfferWidget from "@/app/dashboard/components/offer/offer-widget";
import ReviewWidget from "@/app/dashboard/components/review/review-widget";
import QualityWidgetItem from "@/app/dashboard/components/quality/quality-widget-item";
import ReviewItem from "@/app/dashboard/components/review/review-item";
import { useTranslation } from "react-i18next";
import ChartWidget from "@/app/dashboard/components/graph/chart-widget";


export default function Home() {
  const { t } = useTranslation();
  const myNumber = 5;

  let items = [
    {
      icon: "assets/cards/unpaid.png",
      label: t("orders.unpaidOrders"),
      percentage: "67%",
      text: t("orders.numberSummary", { count: 33, total: 55 }),
    },
    {
      icon: "assets/cards/sent.png",
      label: t("orders.notSentOrders"),
      percentage: "20%",
      text: t("orders.numberSummary", { count: 10, total: 50 }),
    },
    {
      icon: "assets/cards/returned.png",
      label: t("orders.refundedOrders"),
      percentage: "6%",
      text: t("orders.numberSummary", { count: 5, total: 50 }),
    },
  ];

  let reviews = [
    {
      name: "Anna Kowalska",
      time: "2 godziny temu",
      comment: "Fantastyczny produkt! Bardzo zadowolona z zakupu. Polecam!",
      stars: "5",
    },
    {
      name: "Jan Nowak",
      time: "1 dzień temu",
      comment:
        "Obsługa klienta na najwyższym poziomie. Szybka dostawa i świetna jakość.",
      stars: "4",
    },
    {
      name: "Ewa Malinowska",
      time: "5 minut temu",
      comment:
        "Bardzo dobra cena w porównaniu do konkurencji. Produkt zgodny z opisem.",
      stars: "5",
    },
    {
      name: "Piotr Wojcik",
      time: "10 godzin temu",
      comment:
        "Trochę długi czas dostawy, ale warto było czekać. Doskonała jakość.",
      stars: "4",
    },
    {
      name: "Magdalena Zielińska",
      time: "30 minut temu",
      comment:
        "Świetna obsługa klienta, szybka reakcja na pytania. Produkt zgodny z oczekiwaniami.",
      stars: "5",
    },
  ];

  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-5">
        <SideMenuNav />
        <LanguageSwitchButton />
        <ThemeSwitchButton />
        <ChartWidget />
        <div className="flex flex-row gap-x-4">
          {items.map((item) => (
            <OrderWidgetItem {...item} />
          ))}
        </div>
        <OfferWidget />
        <ReviewWidget reviews={reviews} />
        <QualityWidgetItem />
      </main>
    </Provider>
  );
}
