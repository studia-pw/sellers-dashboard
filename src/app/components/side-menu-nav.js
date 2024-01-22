import SideMenuButton from "@/app/components/side-menu-button";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "@/app/lib/store";
import { useTranslation } from "react-i18next";

export default function SideMenuNav() {
  const { t } = useTranslation();

  let menuItems = [
    {
      icon: "assets/navbar/research.png",
      label: t("sideMenu.overview"),
    },
    {
      icon: "assets/navbar/order.png",
      label: t("sideMenu.orders"),
    },
    {
      icon: "assets/navbar/quality.png",
      label: t("sideMenu.salesQuality"),
    },
    {
      icon: "assets/navbar/reviews.png",
      label: t("sideMenu.sellersReviews"),
    },
    {
      icon: "assets/navbar/ranking.png",
      label: t("sideMenu.offerRanking"),
    },
    {
      icon: "assets/navbar/tips.png",
      label: t("sideMenu.salesTips"),
    },
  ];

  const language = useSelector((state) => {
    return state.languageState.usedLanguage;
  });

  const dispatch = useDispatch();
  const onButton = () => {
    dispatch(changeLanguage("new flags"));
  };

  return (
    <div className="flex flex-col items-start">
      <button onClick={onButton}>{language}</button>
      <div className="flex flex-row gap-x-4 items-center pb-10">
        <img src="assets/navbar/logo.svg" className="w-[40px] h-[40px]" />
        <h1>{t("dashboard")}</h1>
      </div>

      <div className="flex flex-col gap-y-6">
        {menuItems.map((item) => (
          <SideMenuButton {...item} />
        ))}
      </div>
    </div>
  );
}
