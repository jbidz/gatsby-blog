import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import BlogPostTemplate from "../../components/blogPostTemplate";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((i) => (
        <article key={i.id}>
          {
            <BlogPostTemplate
              title={i.frontmatter.title}
              date={i.frontmatter.date}
              excerpt={i.excerpt}
              href={i.frontmatter.slug}
            />
          }
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM, D, YYYY")
          slug
          title
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
