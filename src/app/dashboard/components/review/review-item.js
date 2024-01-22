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

function ReviewItemTime() {
  return <p className="sub-text text-black leading-[8px]">3 minuty temu</p>;
}

function ReviewItemComment({ comment }) {
  return <p className="sub-text text-[#444] truncate">{comment}</p>;
}

function ReviewItemStars() {
  return <p className="sub-text leading-[8px]">5 stars</p>;
}

export default function ReviewItem() {
  return (
    <div className="flex flex-row gap-x-4 items-center">
      <ReviewItemProfilePicture />
      <div className="flex flex-col">
        <ReviewItemName name="Imię Nazwisko" />
        <ReviewItemTime />
        <ReviewItemComment comment="Dsklfjaskdfj adskfjadskjfaskl djfkladsjfkadsjfadskljfkladsjf kldasjf klasdjf akldsfja" />
        <ReviewItemStars />
      </div>
    </div>
  );
}
