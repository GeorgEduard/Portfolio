'use client';

import { Project } from '@/app/utils/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Calculate delay based on index for staggered animation
  const delay = `${index * 100}ms`;

  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: delay }}
    >
      {project.image ? (
        <Image src={project.image} alt={project.title} width={730} height={300} />
      ) : (
        <div className="h-[300px] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">No image available</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map(tech => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <Link
            href={`/projects/${project.id}`}
            className="text-green-700 dark:text-green-500 hover:text-green-900 dark:hover:text-green-400 font-medium transition-colors"
          >
            View Details
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-500 transition-colors"
          >
            Visit Site →
          </a>
        </div>
      </div>
    </div>
  );
}
