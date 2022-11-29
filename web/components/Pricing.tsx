import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const Counter = (props) => {
  const { name, area, price } = props;
  const [count, setCount] = React.useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <li className="py-6 text-center lg:col-span-1">
      <h3 className="font-futura-bold text-2xl">{name}</h3>
      <p className="">{area}</p>
      <div className="calculator flex flex-row items-center justify-center">
        <button onClick={decrement}>
          <MinusIcon className="h-6 w-6 text-green-600" />
        </button>
        <div className="mx-2 text-4xl">{count}</div>
        <button onClick={increment}>
          <PlusIcon className="h-6 w-6 text-green-600" />
        </button>
      </div>
    </li>
  );
};

const Pricing = (props) => {
  const [count, setCount] = React.useState(0);

  const areas = [
    {
      name: "Small",
      area: "Up to 12 square meters",
      price: "$50",
      count: 0,
    },
    {
      name: "Medium",
      area: "Up to 16 square meters",
      price: "$65",
      count: 0,
    },
    {
      name: "Large",
      area: "Up to 20 square meters",
      price: "$85",
      count: 0,
    },
    {
      name: "X-Large",
      area: "20+ square meters",
      price: "$115",
      count: 0,
    },
  ];
  console.log(count);
  return (
    <div className="light:bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Simple no-tricks pricing
            </h2>
            <p className="light:text-gray-600 mx-auto max-w-lg text-xl">
              Simple pricing is at the heart of our business. We don&apos;t want
              to waste your time with calculations, quotes and hidden fees. We
              give you a simple price and we stick to it.
            </p>
          </div>
        </div>
      </div>
      <div className="light:bg-white mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="light:bg-gray-100 absolute inset-0 h-1/2" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="light:shadow-lg mx-auto max-w-lg overflow-hidden rounded-lg lg:flex lg:max-w-none">
              <div className="light:bg-white flex-1 px-6 py-8 dark:bg-gray-700 lg:p-12">
                <h3 className="light:text-gray-900 text-2xl font-bold sm:text-3xl sm:tracking-tight">
                  Select areas to be cleaned.
                </h3>
                <div className="mt-8">
                  <div className="flex items-center">
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                  >
                    {areas.map((area, i) => (
                      <Counter
                        key={i}
                        name={area.name}
                        area={area.area}
                        price={area.price}
                        count={count}
                      />
                    ))}
                  </ul>
                  <div className="flex items-center">
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <div className="py-6">
                    <h3 className="sm:text-1xl light:text-gray-900 text-xl font-bold sm:tracking-tight">
                      Stains
                    </h3>
                    <p>
                      Cleaning stains can be tricky business. DIY treatments may
                      let you down.{" "}
                      <strong>
                        You can expect to pay between $30-$60 per stain.
                      </strong>{" "}
                      We&apos;ll advise you before commencing your clean.
                    </p>
                  </div>
                </div>
              </div>
              <div className="light:bg-gray-50 py-8 px-6 text-center dark:bg-gray-700 lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6">Your price</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight">
                  <span className="mr-2 text-xl">$</span>
                  <span>0</span>
                </div>
                <p className="mt-4 text-sm">
                  <a
                    href="#"
                    className="light:text-gray-500 font-medium underline"
                  >
                    Our 100% Guarantee has you covered
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base text-white hover:bg-gray-900"
                    >
                      Schedule your clean
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
