import Link from 'next/link';
import { ReactNode } from 'react';

type FooterLinkType = {
  href: string;
  label: string;
  isExternal?: boolean;
};

type FooterSectionType = {
  title: string;
  items: FooterLinkType[];
};

// Reusable link component
const FooterLink = ({ href, label, isExternal = false }: FooterLinkType) => {
  const linkClass =
    'text-gray-600 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-500 transition-colors';

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      {label}
    </Link>
  );
};

const FooterSection = ({ title, items }: FooterSectionType) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <FooterLink {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const PlainTextItem = ({ children }: { children: ReactNode }) => (
  <li className="text-gray-600 dark:text-gray-400">{children}</li>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Footer data structure
  const footerSections = [
    {
      title: 'Contact',
      items: [
        {
          href: 'mailto:georgeduard.dinu@gmail.com',
          label: 'georgeduard.dinu@gmail.com',
        },
        { href: 'tel:+40750491212', label: '+40750491212' },
      ],
      extraContent: <PlainTextItem>Bucharest, Romania</PlainTextItem>,
    },
    {
      title: 'Quick Links',
      items: [
        { href: '/#about', label: 'About Me' },
        { href: '/#skills', label: 'Skills' },
        { href: '/#projects', label: 'Projects' },
        { href: '/#contact', label: 'Contact' },
      ],
    },
    {
      title: 'Connect',
      items: [
        {
          href: 'https://www.linkedin.com/in/george-dinu/',
          label: 'LinkedIn',
          isExternal: true,
        },
        {
          href: 'https://github.com/GeorgEduard',
          label: 'GitHub',
          isExternal: true,
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <FooterSection title={section.title} items={section.items} />
              {section.extraContent}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} George Dinu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
