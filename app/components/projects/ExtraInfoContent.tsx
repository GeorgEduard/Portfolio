import React from 'react';
import Image from 'next/image';
import webImage from '../../../public/projects/squadra/web.webp';
import mobileTerminalImage from '../../../public/projects/squadra/mobile-terminal.webp';
import caveoMobileImage from '../../../public/projects/caveo/mobile.png';

interface ExtraInfoContentProps {
  projectId: string;
}

export const ExtraInfoContent: React.FC<ExtraInfoContentProps> = ({
  projectId,
}) => {
  // Return different content based on project ID
  switch (projectId) {
    case 'caveo':
      return (
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Mobile & Admin Applications
          </h3>
          <div className="flex gap-6 mb-4">
            <div>
              <Image
                src={caveoMobileImage}
                alt="Caveo Mobile App"
                className="rounded-lg shadow-md mb-2"
                width={300}
                height={600}
              />
              <h4 className="font-medium text-lg">Mobile Application</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A user-friendly mobile app for clients to manage their insurance
                policies and financial plans
              </p>
            </div>
            <div className="max-w-xl">
              <h4 className="font-medium mb-2 text-lg">
                Back-office Admin Application
              </h4>
              <p>
                A powerful admin dashboard built with React-admin, enabling
                Caveo staff to manage client accounts and policies, process
                insurance claims, and more. This comprehensive tool streamlined
                internal operations and improved staff efficiency.
              </p>
            </div>
          </div>
        </div>
      );
    case 'squadra':
      return (
        <div>
          <h3 className="text-xl font-semibold mb-2">Ecosystem of Apps</h3>
          <p className="mb-4">
            The Squadra ecosystem consisted of 3 distinct applications linked by
            a serverless backend:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <Image
                src={webImage}
                alt="Squadra Web App"
                className="rounded-lg shadow-md mb-2"
              />
              <h4 className="font-medium">Web Application</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Designed for managers to oversee shifts, personnel, and
                analytics
              </p>
            </div>

            <div>
              <Image
                src={mobileTerminalImage}
                alt="Squadra Mobile and Terminal Apps"
                className="rounded-lg shadow-md mb-2"
              />
              <h4 className="font-medium">Mobile & Terminal Apps</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mobile app for employees to manage their shifts, while the
                terminal app (typically on tablets) was used on-location by both
                managers and employees for time tracking
              </p>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default ExtraInfoContent;
