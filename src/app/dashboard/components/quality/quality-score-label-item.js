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

export default function QualityScoreAndLabelItem({ quality, label }) {
  return (
    <div className="flex flex-row items-center gap-x-2.5 justify-center">
      <p className="text-black text-right max-w-[90px]">{label}</p>
      <QualityScore quality={quality} />
    </div>
  );
}
