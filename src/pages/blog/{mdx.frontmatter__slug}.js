import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, Link } from "gatsby";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <Link to="/blog" className="text-blue-600 bg-slate-100 p-2 rounded">
        Back
      </Link>
      <p className="mt-6 font-bold mb-4">{data.mdx.frontmatter.title}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
