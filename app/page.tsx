'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
            HMYC Blog
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            WE GO HIGH.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">Featured Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured Post Card */}
            <article className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-700">
              <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-600" />
              <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">Nov 4, 2025</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                시작하는 개발자를 위한 가이드
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                개발을 시작하는 분들을 위한 로드맵과 유용한 리소스를 정리했습니다.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </article>

            {/* More Featured Posts */}
            <article className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-700">
              <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-600" />
              <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">Nov 3, 2025</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                웹 개발 트렌드 2025
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                2025년 주목해야 할 웹 개발 트렌드와 기술들을 소개합니다.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </article>

            <article className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-700">
              <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-600" />
              <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">Nov 2, 2025</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Next.js와 TypeScript로 블로그 만들기
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                모던 웹 기술을 활용한 블로그 제작 과정을 상세히 설명합니다.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl bg-blue-50 p-8 dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              최신 포스트 업데이트 받기
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              새로운 포스트가 등록되면 가장 먼저 알려드립니다.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-blue-500"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
