import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <p className="sub-text text-black leading-[8px]">
      {t("review.minutesAgo", { count: 3 })}
    </p>
  );
}

function ReviewItemComment({ comment }) {
  return <p className="sub-text text-[#444] truncate">{comment}</p>;
}

function ReviewItemStars() {
  const { t } = useTranslation();
  return (
    <p className="sub-text leading-[8px]">{t("review.stars", { count: 5 })}</p>
  );
}

export default function ReviewItem() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row gap-x-4 items-center rounded-[10px] bg-white hover:bg-[#F5F5F5] px-2.5 py-1">
      <ReviewItemProfilePicture />
      <div className="flex flex-col">
        <ReviewItemName name={t("review.name") + " " + t("review.surname")} />
        <ReviewItemTime />
        <ReviewItemComment comment={t("review.comment")} />
        <ReviewItemStars />
      </div>
    </div>
  );
}
