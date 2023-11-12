import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = (props) => {
  const { pageTitle, children } = props;
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
    <div className="max-w-3xl mx-auto px-8">
      <header className="py-8 text-5xl text-gray-900 font-black">
        {data.site.siteMetadata.title}
      </header>
      <nav className="py-6">
        <ul className="flex gap-5">
          <li>
            <Link
              to="/"
              className="text-blue-600"
              activeClassName="bg-slate-100 py-2 px-3 rounded-md font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-blue-600"
              activeClassName="bg-slate-100 py-2 px-3 rounded-md font-medium"
              partiallyActive={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-blue-600"
              activeClassName="bg-slate-100 py-2 px-3 rounded-md font-medium"
              partiallyActive={true}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main className="pb-10">
        <h1 className="text-4xl mb-6 font-bold text-purple-800">{pageTitle}</h1>
        {children}
      </main>
      <footer className="py-12 border-t">
        <small className="text-center block">
          &copy;John Denver Bidong 2023
        </small>
      </footer>
    </div>
  );
};

export default Layout;
