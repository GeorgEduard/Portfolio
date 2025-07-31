import React from 'react';

interface TechItemProps {
  tech: string;
}

export default function TechItem({ tech }: TechItemProps) {
  return (
    <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
      {tech}
    </span>
  );
}
