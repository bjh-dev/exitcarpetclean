import { FaAward, FaDollarSign, FaHandHoldingHeart } from "react-icons/fa";

const features = [
  {
    name: "Simple Pricing",
    description:
      "No confusing calculations. No hidden fees. No surprises. Just a simple pricing.",
    icon: FaDollarSign,
  },
  {
    name: "100% Guarantee",
    description:
      "We guarantee you'll be happy with your clean or we'll come back and make it right.",
    icon: FaAward,
  },
  {
    name: "Friendly Service",
    description:
      "We're a family owned and operated business. We treat your property like our own.",
    icon: FaHandHoldingHeart,
  },
];

const FeaturesThreeColumns = () => {
  return (
    <div className="pb-12">
      <div className="container">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-md bg-gray-200 p-8 text-center dark:bg-gray-700"
            >
              <dt>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-green-600">
                  <feature.icon
                    className="h-6 w-6 fill-gray-200 dark:fill-gray-700"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-5 font-futura-bold text-lg">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-lg">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FeaturesThreeColumns;
