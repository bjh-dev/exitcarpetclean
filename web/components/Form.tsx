import { useState } from "react";
import { Switch } from "@headlessui/react";
import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Form = () => {
  const [agreed, setAgreed] = useState(false);
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM);
  if (state.succeeded) {
    return (
      <section className="bg-gray-200 p-12">
        <h3 className="mb-6 text-center text-3xl">
          Thanks for your submission!
        </h3>
        <p className="mb-12 text-center">
          We&apos;ll be in contact with you soon.
        </p>
      </section>
    );
  }

  return (
    <div className="overflow-hidden lg:py-24">
      <div className="relative mx-auto max-w-xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Schedule your clean
          </h2>
          <p className="mt-4 text-lg leading-6">
            Complete the form below to arrange a suitable date and time for your
            clean.
          </p>
        </div>
        <div className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label htmlFor="first-name" className="block text-sm">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
                  placeholder="(03) 9857-6543"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="street-address" className="block text-sm">
                Street Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
                  placeholder="12 Smith Street"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address-level2" className="block text-sm">
                Suburb
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="address-level2"
                  id="address-level2"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
                  placeholder="Geelong"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <ValidationError errors={state.errors} />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:outline-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
