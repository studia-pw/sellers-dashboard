import ReviewItemList from "@/app/dashboard/components/review/review-item-list";

function ReviewWidgetTopBar() {
  return (
    <div className="flex flex-row justify-between">
      <h3>Opinie kupujących</h3>
      <div className="flex flex-row gap-x-2 items-start">
        <p>Wszystkie</p>
        <div className="w-[22px]">
          <img src="assets/cards/filter.svg" />
        </div>
      </div>
    </div>
  );
}

export default function ReviewWidget({ reviews }) {
  return (
    <div className="card">
      <div className="mb-3">
        <ReviewWidgetTopBar />
      </div>
      <ReviewItemList reviews={reviews} />
    </div>
  );
}
