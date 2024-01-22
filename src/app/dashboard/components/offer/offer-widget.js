import OfferItemList from "@/app/dashboard/components/offer/offer-item-list";
import {useTranslation} from "react-i18next";

function OfferWidgetTopBar() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-between">
      <h3>{t("sideMenu.offerRanking")}</h3>
      <div className="flex flex-row gap-x-2 items-start">
        <p>{t("offer.bestSellers")}</p>
        <div className="w-[22px]">
          <img src="assets/cards/filter.svg" />
        </div>
      </div>
    </div>
  );
}

export default function OfferWidget() {
  return (
    <div className="card">
      <div className="mb-3">
        <OfferWidgetTopBar />
      </div>
      <OfferItemList />
    </div>
  );
}
