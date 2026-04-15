export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-6">Features</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Explore the powerful features that make GTSS the choice for modern enterprises.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-2">Scalable Infrastructure</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Built to grow with your business needs.</p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Enterprise-grade protection for your data.</p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Insights that drive decision making.</p>
        </div>
      </div>
    </div>
  );
}
