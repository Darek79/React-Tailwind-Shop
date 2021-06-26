import CheckoutBox from "./CheckoutBox";
import SummaryItem from "./SummaryItem";

interface SummaryBoxI {
  summary?: {item: string; sum: string}[];
}

export default function SummaryBox({
  summary,
}: SummaryBoxI): JSX.Element {
  return (
    <section className="my-10 lg:m-0 w-full lg:flex-col lg:w-1/2 ">
      <div className="w-full lg:w-3/4 m-auto mb-6">
        <p className="text-lg lg:text-xl text-dark mb-2 ">
          Summary
        </p>
        {summary !== undefined && summary?.length > 0
          ? summary.map((el, i) => {
              if (summary.length - 1 === i || 0 === i) {
                return (
                  <SummaryItem
                    item={el.item}
                    sum={el.sum}
                    styleCustom="font-bold"
                    key={el.item}
                  />
                );
              } else {
                return (
                  <SummaryItem
                    key={el.item}
                    item={el.item}
                    sum={el.sum}
                  />
                );
              }
            })
          : undefined}
      </div>
      <CheckoutBox styleWrapper="w-full hidden lg:block lg:w-3/4 m-auto " />
    </section>
  );
}
