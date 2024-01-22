import SideMenuButton from "@/app/components/side-menu-button";
import {useTranslation} from "react-i18next";

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("dashboard")}</h1>
      <SideMenuButton />
    </>
  );
}
