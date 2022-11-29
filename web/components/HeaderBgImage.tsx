import Image from "next/future/image";

const HeaderBgImage = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          fill={true}
          priority
          alt="Frustrated person trying to get their carpets cleaned"
        />
        <div className="absolute inset-0" aria-hidden="true" />
      </div>
      <div className="relative py-24 sm:py-32">
        <div className="container">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Don&apos;t waste your time{" "}
              <span className="catfishscript mx-2 my-4 inline-block -rotate-1 text-8xl leading-[3.5rem] underline decoration-gray-50 decoration-4 underline-offset-8 lg:my-0">
                stressing out
              </span>{" "}
              about carpet cleaning!
            </h2>
            <p className="mt-6 max-w-3xl text-xl text-indigo-100">
              You deserve honest simple pricing, not hours of lost time
              calculating room sizes. Many companies put all the responsibility
              on you only to charge you more than expected on the day. We
              don&apos;t do that. We give you a simple price and we stick to it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBgImage;
