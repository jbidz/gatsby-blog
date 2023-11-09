import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <nav className="py-6">
        <ul className="flex gap-5">
          <li>
            <Link to="/" className="underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main className="pb-10">
        <h1 className="text-4xl mb-4 font-black">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
