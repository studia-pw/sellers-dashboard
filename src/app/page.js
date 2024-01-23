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
import { useTranslation } from "react-i18next";
import QualityWorstAspectsWidgetItem from "@/app/dashboard/components/quality/quality-worst-aspects-widget-item";

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
      <main>
        <div className="flex flex-row">
          <div className="flex flex-col shrink-0 w-[300px] items-center justify-between border-r-2">
            <SideMenuNav />
            <ThemeSwitchButton />
          </div>

          <div className="grid grid-cols-12 auto-rows-max gap-5 p-7 max-w-screen-xl w-full mx-auto">
            {items.map((item, index) => (
              <div key={index} className="col-span-4">
                <OrderWidgetItem {...item} />
              </div>
            ))}

            <div className="col-span-6">
              <ReviewWidget reviews={reviews} />
            </div>
            <div className="col-span-6">
              <OfferWidget />
            </div>
            <div className="col-span-4">
              <QualityWidgetItem />
            </div>
            <div className="col-span-8">
              <QualityWorstAspectsWidgetItem />
            </div>
          </div>
        </div>
        <LanguageSwitchButton />
      </main>
    </Provider>
  );
}
