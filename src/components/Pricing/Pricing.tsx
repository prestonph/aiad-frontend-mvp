import { CheckCircleIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Starter",
    id: "tier-basic",
    href: "#",
    credits: 1,
    price: { monthly: "$19", annually: "$15" },
    description:
      "Perfect for business looking to engage their online presence.",
    features: ["4 Ads Videos"],
  },
  {
    name: "Basic",
    id: "tier-essential",
    href: "#",
    credits: 3,
    price: { monthly: "$49", annually: "$39" },
    description:
      "Ideal for professionals requiring frquent updates to their profile.",
    features: ["12 Ads Videos"],
  },
  {
    name: "Premium",
    id: "tier-growth",
    href: "#",
    credits: 5,
    price: { monthly: "$99", annually: "$79" },
    description:
      "The best value with unlimited possibilities for your business.",
    features: ["20 Ads Videos"],
  },
];

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <p className="mt-2 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance">
            Pricing
          </p>
        </div>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3
                  id={tier.id}
                  className="text-base/7 font-semibold text-gray-900"
                >
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="tracking-tight text-base/7 font-semibold text-gray-900">
                    {tier.credits} Credits
                  </span>
                </p>

                <p className="mt-10 text-sm/6 font-semibold text-gray-900">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm/6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-4 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Choose {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
