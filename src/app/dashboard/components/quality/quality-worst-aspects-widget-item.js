import QualityScoreAndLabel from "@/app/dashboard/components/quality/quality-score-label-item";

function QualityWorstAspectsTitle({ title }) {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <h3>{title}</h3>
      <div>
        <img src="assets/cards/tips.svg" />
      </div>
    </div>
  );
}

export default function QualityWorstAspectsWidgetItem() {
  let worst = [
    {
      name: "Czas realizacji zamówienia",
      score: 66,
      max: 100,
    },
    {
      name: "Komunikacja",
      score: 50,
      max: 100,
    },
    {
      name: "Ilość zwrotów",
      score: 41,
      max: 100,
    },
  ];
  return (
    <div className="card w-[650px]">
      <div className="mb-3">
        <QualityWorstAspectsTitle title="Najgorsze aspekty" />
      </div>
      <div className="border-2 border-[#F5F5F5] rounded-[10px] px-8 py-6 flex flex-row justify-between">
        {worst.map((aspect) => (
          <QualityScoreAndLabel quality={aspect} label={aspect.name} />
        ))}
      </div>
    </div>
  );
}
