import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-transparent">
      <h1 className="text-5xl font-bold mb-8 text-center text-black">About Calmistry</h1>
      <p className="text-xl mb-12 text-center text-black max-w-2xl">
        Calmistry is a comprehensive well-being assistant designed to help users manage stress, reduce anxiety, and foster positive mental health. 
        Our platform features a range of tools including breathing exercises, meditation videos, and an AI-powered assistant that provides compassionate, evidence-based advice to guide users through their emotions and challenges.
      </p>
      
      <h2 className="text-4xl font-semibold mb-6 text-black">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl w-full">
        {[
          { name: "MUHAMMAD IBRAHIM QASMI", role: "Data Scientist & AI Engineer", linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-qasmi-9876a1297/", github: "https://github.com/muhammadibrahim313", image: "/images/ibrahim.jpeg" },
          { name: "ASIM KHAN", role: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/asim-khan-baloch/", github: "https://github.com/Asimbaloch", image: "/images/asim.jpeg" },
          { name: "TAYYAB SAJJAD", role: "Full Stack Developer", linkedin: "http://www.linkedin.com/in/tayyab-sajjad-156ab2267", github: "https://github.com/devtayyabsajjad", image: "/images/tayyab.jpeg" },
          { name: "AHMAD FAKHAR", role: "Data Analyst", linkedin: "https://www.linkedin.com/in/ahmad-fakhar-357742258/", github: "https://github.com/Ahmad-Fakhar", image: "/images/ahmad.jpeg" },
          { name: "MUHAMMAD JAWAD", role: "Data Analyst", linkedin: "https://www.linkedin.com/in/muhammad-jawad-86507b201/", github: "https://github.com/mj-awad17/", image: "/images/jawad.jpeg" },
          { name: "MUHAMMAD USAMA", role: "Frontend Developer", linkedin: "#", github: "#", image: "/images/usama.jpg" }
        ].map((member) => (
          <div key={member.name} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center">
            <Image src={member.image} alt={member.name} width={128} height={128} className="rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-black">{member.name}</h3>
            <p className="text-lg text-gray-600">{member.role}</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href={member.linkedin} className="text-blue-500 hover:underline">LinkedIn</Link>
              <Link href={member.github} className="text-gray-800 hover:underline">GitHub</Link>
            </div>
          </div>
        ))}
      </div>

      <Link href="/" className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Back to Home
      </Link>
    </div>
  );
}
