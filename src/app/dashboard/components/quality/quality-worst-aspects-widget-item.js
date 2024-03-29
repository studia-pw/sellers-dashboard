import QualityScoreAndLabel from "@/app/dashboard/components/quality/quality-score-label-item";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  let worst = [
    {
      name: t("quality.aspects.shippingTime"),
      score: 66,
      max: 100,
    },
    {
      name: t("quality.aspects.communication"),
      score: 50,
      max: 100,
    },
    {
      name: t("quality.aspects.returns"),
      score: 41,
      max: 100,
    },
  ];
  return (
    <div className="card">
      <div className="mb-3">
        <QualityWorstAspectsTitle title={t("quality.worstAspects")} />
      </div>
      <div className="border-2 border-[#F5F5F5] rounded-[10px] px-8 py-6 flex flex-row justify-between">
        {worst.map((aspect) => (
          <QualityScoreAndLabel quality={aspect} label={aspect.name} />
        ))}
      </div>
    </div>
  );
}
