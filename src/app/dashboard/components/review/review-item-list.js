import ReviewItem from "@/app/dashboard/components/review/review-item";

export default function ReviewItemList({ reviews }) {
  return (
    <div className="flex flex-col gap-y-1">
      {reviews.map((review) => (
        <ReviewItem review={review} />
      ))}
    </div>
  );
}
