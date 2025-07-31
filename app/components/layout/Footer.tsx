export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} George Dinu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
