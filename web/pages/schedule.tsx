import CtaWithImage from "@/components/CtaWithImage";
import FeaturesThreeColumns from "@/components/FeaturesThreeColumn";
import Hero from "@/components/Hero";
import StepsSimple from "@/components/StepsSimple";
import type { NextPage } from "next";
import HeaderBgImage from "@/components/HeaderBgImage";
import Faq from "@/components/Faq";
import Process from "@/components/Process";
import Promo from "@/components/Promo";
import Form from "@/components/Form";

const Schedule: NextPage = () => {
  return (
    <>
      <div className="py-12">
        <div className="container">
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
                  Booking Request Form
                </h2>
                <p className="mt-4 text-lg leading-6">
                  Complete the form below to arrange a suitable date and time
                  for your clean.
                </p>
              </div>
              <div className="mt-12">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
