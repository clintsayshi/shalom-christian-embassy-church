import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import Banner from "../components/banner";
import Layout from "../components/layout";

function ServiceTimes() {
  const data = useStaticQuery(graphql`
    {
      file(
        name: { eq: "servicetimes" }
        sourceInstanceName: { eq: "content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            title
            heroImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            snippet
            weekdayServices {
              title
              time
              weekday
            }
            weekdayServicesImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            mainService
            mainServiceTime
            sundaySchools {
              title
              time
            }
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter;

  const heroImage = getImage(data.heroImage);
  const weekdayServicesImage = getImage(data.weekdayServicesImage);

  return (
    <Layout>
      <Banner title={data.title} image={heroImage} />

      <div className="container mx-auto h-px w-full my-4"></div>

      <section>
        <div className="container mx-auto flex flex-col gap-2 sm:items-center">
          <h2 className="text-xl text-center">{data.mainService}</h2>
          <p className="text-center">{data.mainServiceTime}</p>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8"></div>

      <section>
        <div className="container w-full mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center">
          <GatsbyImage
            className="block h-52 sm:h-64 sm:py-4 w-full sm:flex-1"
            image={weekdayServicesImage}
            alt=""
          />

          <div className="flex flex-col flex-1 gap-4 items-center sm:items-start">
            <h2 className="text-xl text-center sm:text-left">Sunday Schools</h2>

            {React.Children.toArray(
              data.sundaySchools.map((item) => (
                <article className="w-full flex flex-row justify-between">
                  <h4 className="text-base font-medium">{item.title}</h4>
                  <span className="text-sm text-gray-800">{item.time}</span>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8 bg-gray-100 sm:bg-transparent"></div>

      <section>
        <div className="container mx-auto flex flex-col gap-4 sm:items-center">
          <h2 className="text-xl text-center">Weekday Services</h2>
          <div className="flex flex-row flex-wrap gap-2 sm:gap-4">
            {React.Children.toArray(
              data.weekdayServices.map((item) => (
                <article className="h-36 w-full sm:w-44 p-4 flex flex-col justify-between bg-green-200">
                  <h4 className="text-base font-medium">{item.title}</h4>

                  <div>
                    <p className="text-sm">{item.weekday}</p>
                    <time className="text-xs">{item.time}</time>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8"></div>
    </Layout>
  );
}

export default ServiceTimes;
