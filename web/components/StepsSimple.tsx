/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

const steps = [
  {
    id: "01",
    name: "Carpets that need cleaning",
    description:
      "Exiting a property means having your carpets professionally cleaned. We can help you with that.",
  },
  {
    id: "02",
    name: "Schedule your clean with us",
    description:
      "Schedule you clean with our friendly staff and we will be there on time. We'll provide a reliable estimate based on what you tell us.",
  },
  {
    id: "03",
    name: "Enjoy amazingly clean carpets.",
    description:
      "We'll clean your carpet, attend to any stains and make sure your carpets are looking their best.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StepsSimple = () => {
  return (
    <section className="pt-12 pb-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            3 Simple Steps
          </h2>
          <p className="text-xl">We make carpet cleaning a breeze.</p>
        </div>
        <div className="lg:border-t lg:border-gray-200">
          <nav className="mx-auto max-w-7xl" aria-label="Progress">
            <ol
              role="list"
              className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
            >
              {steps.map((step, stepIdx) => (
                <li
                  key={step.id}
                  className="relative overflow-hidden lg:flex-1"
                >
                  <div
                    className={classNames(
                      stepIdx === 0 ? "rounded-t-md border-b-0" : "",
                      stepIdx === steps.length - 1
                        ? "rounded-b-md border-t-0"
                        : "",
                      "overflow-hidden border border-gray-200 lg:border-0"
                    )}
                  >
                    <span
                      className="absolute top-0 left-0 h-full w-1 bg-green-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? "lg:pl-9" : "",
                        "flex items-start px-6 py-5 text-sm"
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600">
                          <span className="font-futura-bold text-green-600">
                            {step.id}
                          </span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="mb-2 font-futura-bold text-2xl leading-none">
                          {step.name}
                        </span>
                        <span className="">{step.description}</span>
                      </span>
                    </span>

                    {stepIdx !== 0 ? (
                      <>
                        {/* Separator */}
                        <div
                          className="absolute inset-0 top-0 left-0 hidden w-3 lg:block"
                          aria-hidden="true"
                        >
                          <svg
                            className="h-full w-full text-gray-300"
                            viewBox="0 0 12 82"
                            fill="none"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M0.5 0V31L10.5 41L0.5 51V82"
                              stroke="currentcolor"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </div>
                      </>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default StepsSimple;
