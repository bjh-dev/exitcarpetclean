import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/future/image";
import Button from "./Button";

const CtaWithImage = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="relative">
          <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <Image
              className="h-full w-full object-cover"
              src="/couch-couple-carpet.jpg"
              width={1920}
              height={224}
              alt=""
            />
          </div>
          <div className="py-12 lg:py-16">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="font-futura-bold text-lg text-green-600">
                Get the clean your carpets need.
              </h2>
              <p className="mt-2 font-futura-bold text-3xl tracking-tight sm:text-4xl">
                Now it&apos;s time to get those carpets cleaned.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <Button href="/schedule" label="Schedule your clean" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaWithImage;
