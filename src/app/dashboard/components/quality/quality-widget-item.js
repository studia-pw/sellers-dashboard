function QualityScore({ quality }) {
  return (
    <div>
      <div className="w-[50px] flex flex-col border-2 border-[#9381FF] rounded-[10px] items-center overflow-hidden">
        <div className="h-[30px] flex flex-row justify-center items-center">
          <p className="rating-text text-[#9381FF]">{quality.score}</p>
        </div>
        <div className="h-[30px] w-full flex flex-row justify-center items-center bg-[#9381FF]">
          <p className="rating-text text-white">{quality.max}</p>
        </div>
      </div>
    </div>
  );
}

function QualityScoreAndLabel({ quality }) {
  return (
    <div className="flex flex-row items-center gap-x-2.5">
      <p className="text-black text-right">
        Zaufany <br />
        Sprzedawca
      </p>
      <QualityScore quality={quality} />
    </div>
  );
}

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
        <QualityScoreAndLabel quality={quality1} />
      </div>
    </div>
  );
}
