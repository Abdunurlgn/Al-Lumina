import PlanCard from './PlanCard'

const plans = [
  {
    id: 1,
    name: 'Free',
    price: '$0/mo',
    description:
      'Essential tools for personal newsletters and hobbyists starting out.',
    featured: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: '$19/mo',
    description:
      'Advanced analytics, custom domains, and automated workflows for professionals.',
    featured: true,
  },
  {
    id: 3,
    name: 'Team',
    price: '$49/mo',
    description:
      'Collaborative workspaces and priority support for growing organizations.',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="bg-slate-100 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Choose the plan that fits your publishing volume. Upgrade or downgrade
          anytime.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            featured={plan.featured}
          />
        ))}
      </div>
    </section>
  )
}
