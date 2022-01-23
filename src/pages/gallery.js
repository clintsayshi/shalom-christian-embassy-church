import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Banner from "../components/banner";
import Layout from "../components/layout";

function Gallery() {
  /* const data = useStaticQuery(graphql`
    {
      file(sourceInstanceName: { eq: "content" }, name: { eq: "home" }) {
        childMarkdownRemark {
          frontmatter {
            title
            snippet
            heroImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter;

  const heroImage = getImage(data.heroImage); */

  return (
    <Layout>
      <Banner title="Gallery" image="../images/hero-bg.jpg" />
    </Layout>
  );
}

export default Gallery;
