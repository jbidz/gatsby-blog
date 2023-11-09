import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p className="mb-10">I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        className="rounded-xl"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog.jfif"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Home page" />;

export default IndexPage;
