export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Mindful Journal
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Track your thoughts, monitor your moods, and discover insights with AI-powered reflections.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">Journal Entries</h3>
              <p className="text-gray-600">
                Write freely and capture your daily thoughts, experiences, and reflections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">😊</div>
              <h3 className="text-xl font-semibold mb-2">Mood Tracking</h3>
              <p className="text-gray-600">
                Log your daily moods and visualize patterns over time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
              <p className="text-gray-600">
                Get personalized reflections and insights powered by artificial intelligence.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
