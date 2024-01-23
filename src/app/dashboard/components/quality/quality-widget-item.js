import QualityScoreAndLabel from "@/app/dashboard/components/quality/quality-score-label-item";

function QualityTitle({ title }) {
  return <h3>{title}</h3>;
}

export default function QualityWidgetItem({ quality }) {
  let quality1 = {
    score: 90,
    max: 100,
  };
  return (
    <div className="card">
      <div className="mb-3">
        <QualityTitle title="Ocena jakości" />
      </div>
      <div className="border-2 border-[#F5F5F5] rounded-[10px] px-8 py-6">
        <QualityScoreAndLabel quality={quality1} label="Zaufany sprzedawca" />
      </div>
    </div>
  );
}
