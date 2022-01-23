import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      home: file(sourceInstanceName: { eq: "content" }, name: { eq: "home" }) {
        childMarkdownRemark {
          frontmatter {
            heroImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            subHeading
            ctaText
            heading
            quotedBook
            quote
          }
        }
      }

      about: file(
        sourceInstanceName: { eq: "content" }
        name: { eq: "about" }
      ) {
        childMarkdownRemark {
          frontmatter {
            vision
            visionImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            statementOfFaithImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            statementsOfFaith {
              statement
            }
          }
        }
      }

      ministries: file(
        sourceInstanceName: { eq: "content" }
        name: { eq: "ministries" }
      ) {
        childMarkdownRemark {
          frontmatter {
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
  `);
  const home = data.home.childMarkdownRemark.frontmatter;
  const about = data.about.childMarkdownRemark.frontmatter;
  const ministries = data.ministries.childMarkdownRemark.frontmatter;

  const heroImage = getImage(home.heroImage);
  const visionImage = getImage(about.visionImage);
  const statementOfFaithImage = getImage(about.statementOfFaithImage);
  const ministriesImage = getImage(ministries.heroImage);

  // book-open-svg
  const BookOpen = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    );
  };

  return (
    <Layout>
      <section className="relative bg-white-300">
        <GatsbyImage
          className="absolute w-full h-full inset-0 opacity-30"
          image={heroImage}
          alt=""
        />
        <div className="container relative mx-auto h-96 md:h-96 flex flex-col justify-center z-10">
          <h1 className="text-4xl font-semibold text-black">{home.heading}</h1>
          <p className="py-4">{home.subHeading}</p>
          <Link
            to="/about"
            className="block w-max py-2 px-3 rounded-sm text-sm sm:text-sm capitalize text-white bg-secondary-color border-heading"
            href="#"
          >
            {home.ctaText}
          </Link>
        </div>
      </section>

      <section className="container mx-auto h-72 flex flex-col justify-center">
        <BookOpen />
        <p className="py-4">{home.quote}</p>
        <h4 className="text-sm uppercase font-medium">{home.quotedBook}</h4>
      </section>

      <section>
        <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <GatsbyImage
            className="block h-60 md:h-64 w-full sm:w-2/5 object-cover"
            image={visionImage}
            alt=""
          />

          <div className="flex-1 ">
            <h2 className="text-2xl text-secondary-color">Values</h2>
            <p className="my-3 text-base">{about.vision}</p>
            <Link
              to="/about#mission-vision"
              className="block w-max py-2 px-3 rounded-sm bg-transparent text-sm sm:text-xs font-medium capitalize text-secondary-color border border-secondary-color"
            >
              Mission &amp; Vision
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8 bg-gray-200"></div>

      <section>
        <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex-1 ">
            <h2 className="text-2xl text-secondary-color">What we believe</h2>
            <p className="my-3 text-base">
              {about.statementsOfFaith[0].statement}
            </p>
            <Link
              to="/about#what-we-believe"
              className="block w-max py-2 px-3 rounded-sm bg-transparent text-sm sm:text-xs font-medium capitalize text-secondary-color border border-secondary-color"
            >
              Statement of Faith
            </Link>
          </div>

          <GatsbyImage
            className="block h-60 w-full sm:w-2/5 object-cover"
            image={statementOfFaithImage}
          />
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8 bg-gray-200"></div>

      <div className="container mx-auto h-px my-8"></div>
    </Layout>
  );
};

export default IndexPage;
