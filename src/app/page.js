import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-transparent">
      <h1 className="text-6xl font-bold mb-8 text-center text-black">Welcome to CALMISTRY</h1>
      <p className="text-2xl mb-12 text-center text-black">Your journey to mental wellness starts here.</p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {[
          { title: "Breathing Exercise", description: "Take a moment to relax and focus on your breath.", link: "/breathing-setup" },
          { title: "Wellness Assistant", description: "Get personalized support for stress, anxiety, and mental well-being.", link: "/assistant" },
          { title: "Meditation", description: "Explore guided meditations for inner peace.", link: "/meditation" }
        ].map((item) => (
          <div key={item.title} className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold mb-4 text-black">{item.title}</h2>
            <p className="mb-6 text-black">{item.description}</p>
            <Link href={item.link} className="inline-block bg-transparent border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold">
              Start
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
