export default function OrderWidgetItem({ icon, label, percentage, text }) {
  return (
    <div className="card flex flex-row py-[47px] px-[40px] items-center gap-x-12 group">
      <div className="flex flex-col justify-between gap-y-[30px]">
        <h3>
          {label.split(" ").at(0)} <br /> {label.split(" ").at(1)}
        </h3>
        <div className="flex flex-col justify-start text-[#9381FF]">
          <h3 className="font-medium">{percentage}</h3>
          <p className="font-medium">{text}</p>
        </div>
      </div>
      <div className="w-[100px] h-[100px] group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">
        <img src={icon} />
      </div>
    </div>
  );
}
