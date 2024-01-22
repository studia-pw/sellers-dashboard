import SideMenuButton from "@/app/components/side-menu-button";

export default function SideMenuNav() {
  let menuItems = [
    {
      icon: "assets/navbar/research.png",
      label: "Przegląd",
    },
    {
      icon: "assets/navbar/order.png",
      label: "Zamówienia",
    },
    {
      icon: "assets/navbar/quality.png",
      label: "Jakość sprzedaży",
    },
    {
      icon: "assets/navbar/reviews.png",
      label: "Opinie kupujących",
    },
    {
      icon: "assets/navbar/ranking.png",
      label: "Ranking ofert",
    },
    {
      icon: "assets/navbar/tips.png",
      label: "Porady sprzedażowe",
    },
  ];
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-row gap-x-4 items-center pb-10">
        <img src="assets/navbar/logo.svg" className="w-[40px] h-[40px]" />
        <h1>Dashboard</h1>
      </div>

      <div className="flex flex-col gap-y-6">
        {menuItems.map((item) => (
          <SideMenuButton {...item} />
        ))}
      </div>
    </div>
  );
}
