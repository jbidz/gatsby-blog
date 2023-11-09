import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="max-w-3xl mx-auto">
      <header className="py-8 text-5xl text-gray-900 font-black">
        {data.site.siteMetadata.title}
      </header>
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
          <li>
            <Link to="/blog" className="underline">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main className="pb-10">
        <h1 className="text-4xl mb-4 font-bold text-purple-800">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
