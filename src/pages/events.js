import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Banner from "../components/banner";
import Layout from "../components/layout";

function Events() {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "events" }, sourceInstanceName: { eq: "content" }) {
        childMarkdownRemark {
          frontmatter {
            heroImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            snippet
            title
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter;

  const heroImage = getImage(data.heroImage);

  return (
    <Layout>
      <Banner title="Upcoming events" image={heroImage} />

      <div className="container mx-auto h-px w-full my-8"></div>

      <section>
        {/* upcoming events... */}
        <div className="container mx-auto flex flex-col sm:items-center"></div>
      </section>

      <div className="container mx-auto h-px w-full my-8"></div>
    </Layout>
  );
}

export default Events;
