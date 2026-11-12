export default function FeatureCard({ title, description }) {
  return (
    <div className="rounded-xl bg-slate-100 p-6 transition-shadow duration-200 hover:shadow-lg">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  )
}
