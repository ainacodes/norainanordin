import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 navbar">
      <div className="w-full max-w-7xl mx-auto px-0.5 bg-primary rounded-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="dropdown sm:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>About me</a>
              </li>
              <li>
                <a>My Services</a>
                <ul className="p-2">
                  <li>
                    <a>Custom AI Chatbot</a>
                  </li>
                  <li>
                    <a>Make.com automation</a>
                  </li>
                  <li>
                    <a>Virtual Assistant</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li className="mt-2 sm:hidden">
                <a className="btn btn-sm">Book a FREE Discovery Call</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">norainanordin</a>
        </div>
        <div className="hidden sm:flex items-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About me</a>
            </li>
            <li>
              <details>
                <summary>My Services</summary>
                <ul className="p-2 z-[1] bg-primary">
                  <li>
                    <a>Custom AI Chatbot</a>
                  </li>
                  <li>
                    <a>Make.com automation</a>
                  </li>
                  <li>
                    <a>Virtual Assistant</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden sm:block">
          <a className="btn">Book a FREE Discovery Call</a>
        </div>
      </div>
    </header>
  );
}