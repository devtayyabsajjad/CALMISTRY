import './globals.css'
import 'react-modal-video/css/modal-video.css'
import Link from 'next/link'
import { Providers } from "./providers"

export const metadata = {
  title: 'CALMISTRY',
  description: 'Your journey to mental wellness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white min-h-screen text-black">
        <Providers>
          <nav className="bg-white bg-opacity-10 text-black shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="text-2xl font-bold text-black">CALMISTRY</Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                    <Link href="/breathing-setup" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Breathing</Link>
                    <Link href="/meditation" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Meditation</Link>
                    <Link href="/about" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-white bg-opacity-10 text-black text-center py-4">
            <p>&copy; 2024 CALMISTRY. All rights reserved.</p>
          </footer>
        </Providers>
      </body>
    </html>
  )
}

