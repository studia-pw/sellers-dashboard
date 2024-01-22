import OfferItem from "@/app/dashboard/components/offer/offer-item";

export default function OfferItemList() {
  return (
    <div className="flex flex-col gap-y-2">
      {[1, 2, 3, 4, 5].map((item) => (
        <OfferItem />
      ))}
    </div>
  );
}
