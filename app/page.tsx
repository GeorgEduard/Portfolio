import Profile from './components/about/Profile';
import Skills from './components/about/Skills';
import ProjectList from './components/projects/ProjectList';

export default function Home() {
  return (
    <>
      <Profile />
      <Skills />
      <ProjectList />
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Interested in working together? Feel free to contact me for any
              project or collaboration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-200 dark:bg-green-950 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-700 dark:text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:georgeduard.dinu@gmail.com"
                  className="text-green-700 dark:text-green-500 hover:underline"
                >
                  georgeduard.dinu@gmail.com
                </a>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-700 dark:text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Social</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/george-dinu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 dark:text-green-500 hover:text-green-900 dark:hover:text-green-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/GeorgEduard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 dark:text-green-500 hover:text-green-900 dark:hover:text-green-400 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
