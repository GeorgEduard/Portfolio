# George Dinu - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Dark Mode Support**: Automatically adapts to user's system preferences
- **Animated Components**: Smooth animations and transitions for better user experience
- **Dynamic Project Pages**: Individual pages for each project with detailed information
- **SEO Friendly**: Optimized metadata for better search engine visibility
- **Reusable Components**: Modular architecture for easy maintenance and updates

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install


3. Run the development server:

```bash
npm run dev

```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `app/`: Main application code (Next.js App Router)
  - `components/`: Reusable UI components
    - `about/`: Components for the About section
    - `layout/`: Layout components (header, footer)
    - `projects/`: Components for the Projects section
    - `ui/`: Generic UI components
  - `projects/[id]/`: Dynamic routes for individual project pages
  - `utils/`: Utility functions and data
    - `data/`: Data files for personal info and projects
  - `globals.css`: Global styles
  - `layout.tsx`: Root layout component
  - `page.tsx`: Home page component


## Future Improvements

- Add a blog section to share articles and thoughts
- Implement a contact form with email functionality
- Add more interactive elements and animations
- Integrate a CMS for easier content management
- Add a theme switcher for manual dark/light mode selection
- Implement internationalization for multiple languages

## Customization


## License

This project is open source and available under the [MIT License].

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
