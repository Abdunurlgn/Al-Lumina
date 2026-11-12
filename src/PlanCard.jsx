export default function PlanCard({ name, price, description, featured }) {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl p-6 ${
        featured
          ? 'bg-indigo-500 text-white shadow-xl'
          : 'bg-white text-slate-900'
      }`}
    >
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-2 text-3xl font-bold">{price}</p>
        <p
          className={`mt-4 ${featured ? 'text-indigo-100' : 'text-slate-600'}`}
        >
          {description}
        </p>
      </div>
      <button
        className={`mt-6 cursor-pointer rounded-lg px-4 py-2 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
          featured
            ? 'bg-white text-indigo-600 hover:bg-indigo-50 focus-visible:outline-white'
            : 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-300'
        }`}
      >
        Get Started
      </button>
    </div>
  )
}
