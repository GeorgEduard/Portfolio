'use client';

import { personalInfo } from '@/app/utils/data/personal';
import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Within my 9 years of experience in web development, I&apos;ve mastered a variety of technologies and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
  };
}

function SkillCard({ skill }: SkillCardProps) {
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
      }
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

  // Get appropriate color based on skill level
  const getColorClass = (level: number) => {
    switch (level) {
      case 5:
        return 'bg-green-700 dark:bg-green-600';
      case 4:
        return 'bg-green-600 dark:bg-green-500';
      case 3:
        return 'bg-green-500 dark:bg-green-400';
      case 2:
        return 'bg-green-400 dark:bg-green-300';
      default:
        return 'bg-green-300 dark:bg-green-200';
    }
  };

  // Get skill level text
  const getSkillLevelText = (level: number) => {
    switch (level) {
      case 5:
        return 'Expert';
      case 4:
        return 'Advanced';
      case 3:
        return 'Intermediate';
      case 2:
        return 'Basic';
      default:
        return 'Beginner';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transform transition-all duration-500 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
      }`}
    >
      <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-3">
        <div
          className={`h-full rounded-full ${getColorClass(
            skill.level
          )} transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${(skill.level / 5) * 100}%` : '0%',
          }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>{getSkillLevelText(skill.level)}</span>
        <span>{skill.level}/5</span>
      </div>
    </div>
  );
}
