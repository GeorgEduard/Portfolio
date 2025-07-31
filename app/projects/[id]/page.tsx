import { projects } from '@/app/utils/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import TechItem from '@/app/components/projects/TechItem';
import { Metadata } from 'next';

type Params = Promise<{ id: string }>;

// Generate metadata for each project page
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | George Dinu`,
    description: project.description,
  };
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map(project => ({
    id: project.id,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  // If a project not found, return 404
  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center text-green-700 dark:text-green-500 hover:text-green-900 dark:hover:text-green-400 mb-4 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={750}
              height={350}
              className="rounded-lg shadow-xl"
            />
          ) : (
            <div className="h-[350px] bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg shadow-xl">
              <span className="text-gray-500 dark:text-gray-400">
                No image available
              </span>
            </div>
          )}
          <div className=" flex flex-col justify-between">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map(tech => (
                <TechItem key={tech} tech={tech} />
              ))}
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-6 w-2/3">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Client:
                  </span>
                  <span className="font-medium">{project.company}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Period:
                  </span>
                  <span className="font-medium">{project.period}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Role:
                  </span>
                  <span className="font-medium">{project.role}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>
          <h2 className="text-2xl font-bold mb-4">My Role</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            As the {project.role} for this project, I was responsible for
            developing the application using{' '}
            {project.technologies.slice(0, 3).join(', ')}
            {project.technologies.length > 3 ? ', and other technologies' : ''}.
          </p>
          <div className="mt-8">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center"
            >
              Visit Live Site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 gap-4">
          {prevProject && (
            <Link
              href={`/projects/${prevProject.id}`}
              className="flex flex-col items-start hover:text-green-700 dark:hover:text-green-500 transition-colors"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Previous Project
              </span>
              <span className="font-medium">{prevProject.title}</span>
            </Link>
          )}
          {nextProject && (
            <Link
              href={`/projects/${nextProject.id}`}
              className="flex flex-col items-end text-right hover:text-green-700 dark:hover:text-green-500 transition-colors"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Next Project
              </span>
              <span className="font-medium">{nextProject.title}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
