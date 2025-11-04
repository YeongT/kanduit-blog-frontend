import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kanduit Blog - 개발과 기술에 대한 인사이트',
  description: '개발, 기술, 그리고 프로그래밍에 대한 다양한 이야기를 공유합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
          <nav className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Kanduit Blog
            </a>
            <div className="flex items-center gap-6">
              <a href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Blog
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                About
              </a>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-blue-500">
                Contact
              </button>
            </div>
          </nav>
        </header>
        <div className="mt-16">{children}</div>
        <footer className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">About</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  개발과 기술에 대한 인사이트를 공유하는 블로그입니다.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    GitHub
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} Kanduit Blog. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
