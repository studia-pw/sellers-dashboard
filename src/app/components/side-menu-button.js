export default function SideMenuButton({ icon, label }) {
  return (
    <button className="flex flex-row gap-x-3.5 items-center font-lexend text-xl font-normal hover:bg-[#F5F5F5] transition-colors duration-150 ease-in-out rounded-[10px] py-2 px-4">
      <img src={icon} className="w-[24px] h-[24px]" />
      <span>{label}</span>
    </button>
  );
}
