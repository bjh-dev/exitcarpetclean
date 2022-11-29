import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
const includedFeatures = [
	"Private forum access",
	"Member resources",
	"Entry to annual conference",
	"Official member t-shirt",
];

const Promo = () => {
	return (
		<div className="bg-gray-100">
			<div className="pt-12 sm:pt-16 lg:pt-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
							Your{" "}
							<span className="catfishscript inline-block text-7xl underline decoration-gray-900 decoration-4 underline-offset-8">
								whole house
							</span>{" "}
							cleaned
							<span className="block font-futura-bold text-8xl text-green-600">
								<span className="text-gray-800">=</span> $150
							</span>
						</h2>
					</div>
				</div>
			</div>
			<div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
				<div className="relative">
					<div className="absolute inset-0 h-1/2 bg-gray-100" />
					<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
							<div className="flex-1 bg-white px-6 py-8 lg:p-12">
								<div className="max-w-md">
									<h3 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
										We will clean all the carpets in your house no matter how
										many rooms or how big they are!
									</h3>
									<p className="mb-2 text-sm text-gray-500">
										Offer applies to vacant single-tenant unfurnished
										residential properties only. Stains and heavily soiled areas
										are not included, will be quoted separately after
										inspection.
									</p>
									<p className="mb-2 text-sm text-gray-500">
										Offer expires 31/01/2023.Offer only available in the
										following postcodes: 3217, 3216, 3224, 3219, 3227. Offer
										subject to change without notice.
									</p>
								</div>
								{/* <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">
                      What&apos;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                  >
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div> */}
							</div>
							<div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
								<p className="text-lg font-medium leading-6 text-gray-900">
									One price, simple.
								</p>
								<div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
									<span>$150</span>
									<span className="ml-3 text-xl font-medium tracking-normal text-gray-500">
										inc GST
									</span>
								</div>
								<div className="mt-6">
									<Button
										href="/schedule"
										label="Schedule your clean"
										size="sm"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promo;
