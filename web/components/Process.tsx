const steps = [
  {
    title: "Loosening dirt and allergens",
    description:
      "The first step in carpet cleaning is to loosen the dirt and allergens that are stuck into the fabric of the rug or carpet and are tough to remove. Once they are loose, they can be easily vacuumed away. Did you know most cleaning companies don’t vacuum before cleaning let alone pile lifting before vacuuming.",
  },
  {
    title: "Thorough vacuuming",
    description:
      "Vacuuming with heavy-duty equipment will ensure the dirt, dust, and allergens are adequately removed from the surface and from beneath the surface of your carpet or rug. Most of these contaminants are almost impossible to remove once they become wet.",
  },
  {
    title: "Breaking down soils and stains",
    description:
      "Attacking stains is next. You want those difficult marks to be loosened. This alone can be a gradual and multi-step process. Professional cleaning services can get the job done right with specialty products and the right cleaning equipment.",
  },
  {
    title: "Preconditioning",
    description:
      "Using a specialty pre-conditioner loosens deeply embedded contamination so it can be rinsed out easier. It prevents overwetting and harsh agitation because the contamination is suspended from the fibers.",
  },
  {
    title: "Gentle Agitation",
    description:
      "The above preconditioning helps to lubricate the fibers so the agitation is more gentle. Agitation is essential to remove certain contamination.",
  },
  {
    title: "Washing edges and corners",
    description:
      "The edges and corners of carpets often see filtration soiling (the dark edge around a room).  To be sure they are cleaned properly, you need a multi-step cleaning approach that includes some dedicated time for cleaning corners and edges.",
  },
  {
    title: "Steam Rinse",
    description:
      "Thorough rinsing with hot water removes more soil, and residue than other methods and Steam Rinsing is the most thorough method of all.",
  },
  {
    title: "Drying",
    description:
      "The final step is drying the carpet so it is not wet for too long. Once the carpet has been adequately cleaned a short 3-4 hour period is all that is needed for the carpets to dry.",
  },
];
const Process = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="max-w-xl">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The 8 step process to{" "}
            <span className="catfishscript inline-block text-7xl underline decoration-gray-900 decoration-4 underline-offset-8">
              amazingly clean
            </span>{" "}
            carpets.
          </h2>
          <p className="mb-6 text-xl">
            We ensure the best clean possible and get your bond back. While
            other cleaners offer insanely cheap quotes, they&apos;re actually
            cutting corners with 1 or 2 steps that don&apos;t get the carpets
            clean.
          </p>
        </div>
        <ul className="grid grid-cols-2 grid-rows-4">
          {steps.map((step, id) => (
            <li key={id} className="col-span-2 mr-6 lg:col-span-1">
              <div className="mt-6 flex">
                <span className="mr-6 flex-shrink-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600">
                    <span className="font-futura-bold text-green-600">
                      {id + 1}
                    </span>
                  </span>
                </span>
                <div>
                  <h3 className="font-futura-bold text-xl">{step.title}</h3>
                  <p className="py-2">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Process;
