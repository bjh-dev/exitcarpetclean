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
      <section className="bg-gray-300 p-12 p-12 dark:bg-gray-800">
        <h3 className="mb-6 text-center text-3xl">Thanks for choosing us.</h3>
        <p className="mb-12 text-center">
          We have received your request and will be in contact with you soon.
        </p>
      </section>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-y-6 bg-gray-300 p-12 dark:bg-gray-800 sm:grid-cols-2 sm:gap-x-8"
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
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
            required
            placeholder="Sam"
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
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
            placeholder="Jones"
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
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
            placeholder="sam@example.com"
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
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
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
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
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
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-green-600 focus:ring-green-500 dark:bg-gray-200 dark:text-gray-900"
            placeholder="Armstrong Creek"
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
          className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white placeholder-gray-500 shadow-sm hover:bg-green-700 focus:outline-none focus:outline-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
