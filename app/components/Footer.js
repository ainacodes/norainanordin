import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 text-gray-700 py-4">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy;{currentYear}, developed with ❤️ by Noraina Nordin using
              nextjs14. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/noraina-nordin/"
              className="hover:text-purple-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/ainacodes"
              className="hover:text-purple-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:noraina.nordin16@gmail.com"
              className="hover:text-purple-400"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
