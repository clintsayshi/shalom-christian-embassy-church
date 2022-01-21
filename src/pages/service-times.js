import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
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
            heroImage
            snippet
            weekdayServices {
              serviceDetails {
                name
                time
              }
              weekday
            }
            weekdayServicesImage
            sundayMainService
            sundaySchools {
              name
              time
            }
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <Banner title={data.title} img={data.heroImage} />

      <div className="container mx-auto h-px w-full my-4"></div>

      <section>
        <div className="container mx-auto flex flex-col gap-2 sm:items-center">
          <h2 className="text-xl text-center">Sunday Main Service</h2>
          <p className="text-center">{data.sundayMainService}</p>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8"></div>

      <section>
        <div className="container w-full mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center">
          <StaticImage
            className="block h-40 sm:h-64 sm:py-4 w-full sm:flex-1"
            src="../images/drake.JPG"
            alt=""
          />

          <div className="flex flex-col flex-1 gap-4 items-center sm:items-start">
            <h2 className="text-xl text-center sm:text-left">Sunday Schools</h2>

            {React.Children.toArray(
              data.sundaySchools.map((item) => (
                <article className="w-full flex flex-row justify-between">
                  <h4 className="text-base font-medium">{item.name}</h4>
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
            {/* {
              React.Children.toArray(data.weekdayServices.map(item=>(
                <article className="h-36 w-full sm:w-44 p-4 flex flex-col justify-between bg-green-200">
              <h4 className="text-base font-medium">{item.serviceDetails.name}</h4>

              <div>
                <p className="text-sm">{item.weekday}</p>
                <time className="text-xs">{item.serviceDetails.time}</time>
              </div>
            </article>
              )))
            } */}

            <article className="h-36 w-full sm:w-44 p-4 flex flex-col justify-between bg-green-200">
              <h4 className="text-base font-medium">Fasting and Prayer days</h4>

              <div>
                <p className="text-sm">Monday</p>
                <time className="text-xs">10:30 AM - 13:00 PM</time>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8"></div>
    </Layout>
  );
}

export default ServiceTimes;
