import * as React from "react";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";
import { graphql, Link } from "gatsby";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Link to="/blog" className="text-blue-600 bg-slate-100 p-2 rounded">
        Back
      </Link>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_alt}
        className="mt-4 mb-2 rounded-md"
      />
      <p className="text-sm mb-3 text-blue-500 underline">
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
