import FeatureCard from './FeatureCard'

const features = [
  {
    id: 1,
    title: 'Curated Tech Insights',
    description:
      'Get hand-picked software engineering articles and industry trends delivered directly to your inbox every Monday.',
  },
  {
    id: 2,
    title: 'Zero Noise, Pure Code',
    description:
      'We filter out sponsor bloat and clickbait so you only spend time reading deep technical breakdowns.',
  },
  {
    id: 3,
    title: 'Exclusive Code Snippets',
    description:
      'Access production-ready snippets and practical architecture patterns you can implement in your daily workflow.',
  },
  {
    id: 4,
    title: 'Architectural Deep Dives',
    description:
      'Explore comprehensive system design breakdowns of large-scale distributed applications and services.',
  },
  {
    id: 5,
    title: 'Performance Optimization',
    description:
      'Learn proven profiling techniques to eliminate render bottlenecks and accelerate build times.',
  },
  {
    id: 6,
    title: 'Community Code Reviews',
    description:
      'Participate in weekly peer code reviews to refine your pull requests and coding standards.',
  },
]

export default function Features() {
  return (
    <section className="bg-white px-6 py-20 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}
