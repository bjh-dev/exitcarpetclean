import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How long will the cleaning take?",
    answer:
      "1 to 3 hours depending on the size of the house. We will always try to finish as soon as possible.",
  },
  {
    question: "When will the carpet be dry?",
    answer: "3 to 4 hours depending on the weather.",
  },
  {
    question: "Can you provide a written quote?",
    answer: "Available upon request. Valid for up to 30 days",
  },
  {
    question: "Do you clean furnished houses?",
    answer: "No.",
  },
  {
    question: "Can you clean our rug?",
    answer: "No.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Faq = () => {
  return (
    <div className="light:bg-gray-50 py-12 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left">
                        <span className="font-bold">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="light:text-gray-500 text-base dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
