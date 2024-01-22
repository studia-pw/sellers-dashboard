function ReviewItemProfilePicture() {
  return (
    <div className="rounded-full overflow-hidden w-8 h-8">
      <img src="assets/profile.jpeg" />
    </div>
  );
}

function ReviewItemName({ name }) {
  return <p className="text-[#9381FF]">{name}</p>;
}

function ReviewItemTime({ time }) {
  return <p className="sub-text text-black leading-[8px]">{time}</p>;
}

function ReviewItemComment({ comment }) {
  return <p className="sub-text text-[#444] truncate">{comment}</p>;
}

function ReviewItemStars() {
  return <p className="sub-text leading-[8px]">5 stars</p>;
}

export default function ReviewItem({ review }) {
  return (
    <div className="flex flex-row gap-x-4 items-center rounded-[10px] bg-white hover:bg-[#F5F5F5] px-2.5">
      <ReviewItemProfilePicture />
      <div className="flex flex-col">
        <ReviewItemName name={review.name} />
        <ReviewItemTime time={review.time} />
        <ReviewItemComment comment={review.comment} />
        <ReviewItemStars />
      </div>
    </div>
  );
}
