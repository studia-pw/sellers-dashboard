import {useTranslation} from "react-i18next";

function OfferItemDetails() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center gap-x-2.5 text-[#444444]">
      <p>1.</p>
      <div className="w-8 h-8">
        <img src="assets/iphone.jpeg" />
      </div>
      <p>{t("offer.name")}, 3000 PLN</p>
    </div>
  );
}

function OfferItemSales() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-between gap-x-6">
      <div className="flex flex-col items-start text-[#444444]">
        <p>{t("offer.sold")}:</p>
        <p>{t("offer.turnover")}:</p>
      </div>
      <div className="flex flex-col items-end text-[#444444]">
        <p>{t("offer.pieces", {count: 3})}</p>
        <p>9000 PLN</p>
      </div>
    </div>
  );
}

export default function OfferItem() {
  return (
    <div className="flex flex-row justify-between items-center gap-x-10 rounded-[10px] bg-white hover:bg-[#F5F5F5] py-3 px-2.5">
      <OfferItemDetails />
      <OfferItemSales />
    </div>
  );
}
