import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <StaticImage
        className="mx-auto w-56 aspect-square my-4 object-cover rounded-full"
        alt="John Denver Bidong's photo"
        src="../images/john.jpg"
      />
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="Abuot me" />;

export default AboutPage;
