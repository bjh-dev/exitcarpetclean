import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Hero = (props) => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="items-center lg:flex">
          <div className="max-w-lg flex-col space-y-14 lg:flex">
            <h2 className="font-futura-bold text-6xl tracking-tight">
              We take care of the carpet so you can move out with ease.
            </h2>
            <p className="text-2xl">
              Moving out can be stressful. That’s why we’ve made the carpet
              cleaning process simple. Schedule your clean now for fresh,
              fragrant and clean carpets.
            </p>
            <Button label="Schedule your clean" href="/schedule" size="lg" />
          </div>
          <div className="mt-12 lg:pl-24">
            <Image
              className="aspect-[4/3] w-1/2 rounded-lg object-cover object-center"
              src="/couple-carpet.jpeg"
              alt="Happy couple sitting on clean carpet in the lounge room"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
