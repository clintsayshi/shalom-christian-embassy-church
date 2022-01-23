import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Banner from "../components/banner";

// markup
const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "about" }, sourceInstanceName: { eq: "content" }) {
        childMarkdownRemark {
          frontmatter {
            heroImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            snippet
            title
            mission
            missionImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            vision
            visionImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            leaders {
              name
              bio
              role
              photo {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            leadersImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            statementOfFaithImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            statementOfFaith
            statementsOfFaith {
              statement
            }
            values {
              value
            }
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter;

  const heroImage = getImage(data.heroImage);
  const statementOfFaithImage = getImage(data.statementOfFaithImage);
  const leadersImage = getImage(data.leadersImage);
  const missionImage = getImage(data.missionImage);
  const visionImage = getImage(data.visionImage);

  return (
    <Layout>
      <Banner title={data.title} image={heroImage} />

      <section className="container mx-auto min-h-52 flex flex-col justify-center">
        <p className="text-sm my-4 sm:my-8">{data.snippet}</p>

        <div className="flex flex-row gap-2 sm:gap-2 md:gap-3 justify-between">
          <a className="block w-full" href="#mission-vision">
            <GatsbyImage
              className="h-24 sm:h-32 w-full"
              image={visionImage}
              alt=""
            />
            <h4 className="my-1 text-xs">Mission &amp; Vision</h4>
          </a>
          <a className="block w-full" href="#what-we-believe">
            <GatsbyImage
              className="h-24 sm:h-32 w-full"
              image={statementOfFaithImage}
              alt=""
            />
            <h4 className="my-1 text-xs">What we beleive</h4>
          </a>
          <a className="block w-full" href="#leadership">
            <GatsbyImage
              className="h-24 sm:h-32 w-full"
              image={leadersImage}
              alt=""
            />
            <h4 className="my-1 text-xs">Our Leadership</h4>
          </a>
        </div>
      </section>

      <div className="container mx-auto h-px my-4 sm:my-8"></div>

      {/* Mission, Vision and Values */}
      <section id="mission-vision">
        <div className="container mx-auto pt-2 flex flex-col sm:flex-row items-center">
          <GatsbyImage
            className="block h-48 w-full sm:h-72 sm:flex-1"
            image={visionImage}
            alt=""
          />

          <div className="flex-1 py-5 sm:pl-10">
            <h2 className="text-2xl text-secondary-color">Vision</h2>
            <p className="py-2 text-base">{data.vision}</p>
          </div>
        </div>

        <div className="container block mx-auto h-px w-full my-8 sm:bg-gray-200"></div>

        <div className="container mx-auto flex flex-col sm:flex-row-reverse items-center">
          <GatsbyImage
            className="block h-48 w-full sm:h-72 sm:flex-1"
            image={missionImage}
            alt=""
          />

          <div className="flex-1 py-5 sm:pr-10">
            <h2 className="text-2xl text-secondary-color">Mission</h2>
            <p className="pt-1 text-base">{data.mission}</p>
          </div>
        </div>

        <div className="flex container mx-auto h-px w-full my-8 sm:bg-gray-200"></div>

        <div className="container mx-auto">
          <h2 className="text-2xl font-normal text-secondary-color">Values</h2>

          <div className="flex flex-row justify-start flex-wrap gap-1 py-4 p-0 mx-0">
            {React.Children.toArray(
              data.values.map((item) => (
                <h4 className="w-max p-4 capitalize shadow">{item.value}</h4>
              ))
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px w-full sm:m-8 my-16"></div>

      {/* Our Statement of Faith */}
      <section id="what-we-believe">
        <div className="container mx-auto flex flex-col items-left">
          <header className="my-4">
            <h2 className="mb-1 text-2xl text-secondary-color">
              Statement of Faith
            </h2>
            <p className="text-sm">{data.statementOfFaith}</p>
          </header>

          <ul className="list-none list-inside flex flex-col gap-2">
            {React.Children.toArray(
              data.statementsOfFaith.map((item) => (
                <li className="py-2 px-2 rounded-sm shadow-sm hover:shadow">
                  {item.statement}
                </li>
              ))
            )}
          </ul>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-12"></div>

      {/* Our Leadership */}
      <section id="leadership">
        <div className="container mx-auto">
          <div className="pb-4">
            <h2 className="mt-1 mb-2 text-2xl text-secondary-color sm:text-2xl text-left">
              Leadership
            </h2>
          </div>

          {React.Children.toArray(
            data.leaders.map((item) => {
              const image = getImage(item.photo);
              return (
                <article className="w-full mb-4 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* <Stat
                    
                    src={image}
                    alt={item.name}
                  /> */}
                  <GatsbyImage
                    className="block w-full h-60 sm:w-96"
                    image={image}
                    alt={item.name}
                  />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg text-left font-medium">
                      {item.name}
                    </h4>
                    <small className="uppercase">{item.role}</small>
                    <p className="text-sm">{item.bio}</p>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-12"></div>
    </Layout>
  );
};

export default About;
